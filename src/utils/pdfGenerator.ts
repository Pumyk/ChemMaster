import jsPDF from 'jspdf';
import { domToCanvas } from 'modern-screenshot';
import { Topic } from '../data/questions';

export const generatePDF = async (topic: Topic, userAnswers: Record<number, number>, score: number, totalQuestions: number, isDark: boolean = false) => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - (margin * 2);

  // Colors based on theme
  const colors = {
    bg: isDark ? [15, 23, 42] : [255, 255, 255],
    header: isDark ? [30, 41, 59] : [37, 99, 235],
    text: isDark ? [248, 250, 252] : [30, 41, 59],
    subtext: isDark ? [148, 163, 184] : [71, 85, 105],
    accent: [37, 99, 235],
    cardBg: isDark ? [30, 41, 59] : [248, 250, 252],
    cardBorder: isDark ? [51, 65, 85] : [226, 232, 240]
  };

  const setFill = (c: number[]) => doc.setFillColor(c[0], c[1], c[2]);
  const setText = (c: number[]) => doc.setTextColor(c[0], c[1], c[2]);

  // Background
  setFill(colors.bg);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  // Header Design
  setFill(colors.header);
  doc.rect(0, 0, pageWidth, 60, 'F');
  
  // Decorative circle in header
  doc.setFillColor(255, 255, 255, 0.1);
  doc.circle(pageWidth, 0, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text("QUIZ REPORT", margin, 25);
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text(topic.title.toUpperCase(), margin, 35);
  
  doc.setFontSize(10);
  doc.text(`Generated on ${new Date().toLocaleDateString('en-US', { dateStyle: 'long' })}`, margin, 45);

  // Score Summary Card (Modern Design)
  const summaryY = 70;
  setFill(colors.cardBg);
  doc.setDrawColor(colors.cardBorder[0], colors.cardBorder[1], colors.cardBorder[2]);
  doc.roundedRect(margin, summaryY, contentWidth, 40, 4, 4, 'FD');

  const percentage = Math.round((score / totalQuestions) * 100);
  
  // Grade Label
  let gradeText = "NEEDS IMPROVEMENT";
  let gradeColor = [239, 68, 68]; // Red
  if (percentage >= 80) {
    gradeText = "EXCELLENT PERFORMANCE";
    gradeColor = [16, 185, 129]; // Emerald
  } else if (percentage >= 60) {
    gradeText = "GOOD PROGRESS";
    gradeColor = [245, 158, 11]; // Amber
  }

  setText(colors.text);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text("OVERALL SCORE", margin + 10, summaryY + 12);
  
  doc.setFontSize(32);
  doc.setTextColor(gradeColor[0], gradeColor[1], gradeColor[2]);
  doc.text(`${percentage}%`, margin + 10, summaryY + 28);
  
  setText(colors.subtext);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text(`${score} out of ${totalQuestions} questions correct`, margin + 10, summaryY + 35);

  // Status Badge
  doc.setFillColor(gradeColor[0], gradeColor[1], gradeColor[2], 0.1);
  doc.roundedRect(pageWidth - margin - 60, summaryY + 10, 50, 20, 2, 2, 'F');
  doc.setTextColor(gradeColor[0], gradeColor[1], gradeColor[2]);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.text(gradeText, pageWidth - margin - 35, summaryY + 22, { align: 'center' });

  // Detailed Review Section
  let yPos = 125;
  setText(colors.text);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text("QUESTION BY QUESTION REVIEW", margin, yPos - 8);

  // Capture Questions as Images
  for (let i = 0; i < topic.questions.length; i++) {
    const q = topic.questions[i];
    const element = document.getElementById(`question-card-${q.id}`);
    
    if (element) {
      try {
        // Capture using modern-screenshot (supports oklch)
        const canvas = await domToCanvas(element, {
          scale: 2,
          backgroundColor: isDark ? '#1e293b' : '#ffffff',
          width: 800,
          style: {
            width: '800px',
            padding: '32px',
            borderRadius: '0px',
            border: 'none',
            boxShadow: 'none',
          }
        });
        
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = contentWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Check for page break
        if (yPos + imgHeight > 280) {
          doc.addPage();
          setFill(colors.bg);
          doc.rect(0, 0, pageWidth, pageHeight, 'F');
          yPos = 20;
        }

        // Add a subtle border around the image in the PDF
        doc.setDrawColor(colors.cardBorder[0], colors.cardBorder[1], colors.cardBorder[2]);
        doc.rect(margin, yPos, imgWidth, imgHeight);
        doc.addImage(imgData, 'PNG', margin, yPos, imgWidth, imgHeight);
        
        yPos += imgHeight + 8;
      } catch (err) {
        console.error("Error capturing question card:", err);
        // Fallback text
        setText(colors.text);
        doc.setFontSize(10);
        doc.text(`Question ${i + 1} analysis...`, margin, yPos);
        yPos += 10;
      }
    }
  }

  // Footer with Page Numbers
  const totalPages = (doc as any).internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    
    // Bottom border
    setFill(colors.header);
    doc.rect(0, pageHeight - 1, pageWidth, 1, 'F');
    
    doc.setFontSize(8);
    setText(colors.subtext);
    doc.text(`ChemMaster Pro Assessment Report`, margin, pageHeight - 10);
    doc.text(`Page ${i} of ${totalPages}`, pageWidth - margin, pageHeight - 10, { align: 'right' });
  }

  doc.save(`ChemMaster_Report_${topic.id}_${new Date().getTime()}.pdf`);
};
