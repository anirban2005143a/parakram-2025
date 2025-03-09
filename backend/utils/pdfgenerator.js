const PDFDocument = require('pdfkit');

const generatePDF = async (teamData, playerData, paymentData) => {
  return new Promise((resolve, reject) => {
    try {
      // Create a PDF document
      const doc = new PDFDocument();
      const fileName = `${teamData.teamId}_registration.pdf`;

      // Create buffers to store PDF data in memory
      const buffers = [];
      doc.on('data', buffers.push.bind(buffers));

      // When PDF is done being generated
      doc.on('end', () => {
        // Concatenate all buffers to create a single buffer with the PDF data
        const pdfData = Buffer.concat(buffers);
        resolve({
          fileName,
          buffer: pdfData,
          contentType: 'application/pdf'
        });
      });

      // Add content to PDF
      doc.fontSize(18).text('Sports Fest Registration Details', { align: 'center' });

      // Team information
      doc.moveDown();
      doc.fontSize(14).text('Team Information', { underline: true });
      doc.fontSize(12).text(`Team ID: ${teamData.teamId}`);
      doc.text(`Sport: ${teamData.sportName}`);

      // Player information
      doc.moveDown();
      doc.fontSize(14).text('Player Information', { underline: true });

      playerData.forEach((player, index) => {
        doc.fontSize(12).text(`Player ${index + 1}:`);
        doc.text(`ID: ${player.playerId}`);
        doc.text(`Name: ${player.name}`);
        doc.text(`Phone: ${player.phoneNumber}`);
        doc.text(`College: ${player.collegeName}`);

        // Use direct accommodation info if available, otherwise fallback to populated reference
        const accommodationType = player.accommodationType || 
          (player.accommodation && player.accommodation.type ? player.accommodation.type : 'None');
        const accommodationPrice = player.accommodationPrice || 
          (player.accommodation && player.accommodation.price ? player.accommodation.price : 0);

        doc.text(`Accommodation: ${accommodationType} (Rs. ${accommodationPrice})`);
        doc.text(`T-shirt/Jacket Size: ${player.tshirtSize || 'NA'}`);
        doc.moveDown(0.5);
      });

      // Payment information
      doc.moveDown();
      doc.fontSize(14).text('Payment Information', { underline: true });
      doc.fontSize(12).text(`Transaction ID: ${paymentData.transactionId}`);
      doc.text(`Amount Paid: Rs. ${paymentData.amountPaid}`);
      doc.text(`Payment Date: ${paymentData.paymentDate.toLocaleDateString()}`);
      doc.text(`Payment Screenshot: ${paymentData.paymentScreenshot.url}`);

      // Finalize the PDF
      doc.end();
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { generatePDF };
