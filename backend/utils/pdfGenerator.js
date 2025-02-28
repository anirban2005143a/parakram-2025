const PDFDocument = require('pdfkit');
const fs = require('fs');

const generatePDF = async (teamData, playerData, paymentData) => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument();
      const fileName = `${teamData.teamId}_registration.pdf`;
      const filePath = `./public/pdfs/${fileName}`;
      
      // Pipe the PDF into a file
      const stream = fs.createWriteStream(filePath);
      doc.pipe(stream);
      
      // Add content to PDF
      doc.fontSize(18).text('Sports Fest Registration Details', {
        align: 'center'
      });
      
      // Team information
      doc.moveDown();
      doc.fontSize(14).text('Team Information', {underline: true});
      doc.fontSize(12).text(`Team ID: ${teamData.teamId}`);
      doc.text(`Sport: ${teamData.sportName}`);
      
      // Player information
      doc.moveDown();
      doc.fontSize(14).text('Player Information', {underline: true});
      
      playerData.forEach((player, index) => {
        doc.fontSize(12).text(`Player ${index + 1}:`);
        doc.text(`ID: ${player.playerId}`);
        doc.text(`Name: ${player.name}`);
        doc.text(`Phone: ${player.phoneNumber}`);
        doc.text(`College: ${player.collegeName}`);
        doc.text(`Accommodation: ${player.accommodation.type} (₹${player.accommodation.price})`);
        doc.moveDown(0.5);
      });
      
      // Payment information
      // Payment information
      doc.moveDown();
      doc.fontSize(14).text('Payment Information', {underline: true});
      doc.fontSize(12).text(`Transaction ID: ${paymentData.transactionId}`);
      doc.text(`Amount Paid: ₹${paymentData.amountPaid}`);
      doc.text(`Payment Date: ${paymentData.paymentDate.toLocaleDateString()}`);
      doc.text(`Payment Screenshot: ${paymentData.paymentScreenshot.url}`);
      
      // Finalize the PDF
      doc.end();
      
      stream.on('finish', () => {
        resolve({
          fileName,
          filePath
        });
      });
      
      stream.on('error', (error) => {
        reject(error);
      });
      
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  generatePDF
};
