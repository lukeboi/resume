function pdf() {
// 	console.log("started");
// 	var HTML_Width = $("#paper-border").width();
// 	var HTML_Height = $("#paper-border").height();
// 	var top_left_margin = 0;
// 	var PDF_Width = HTML_Width + (top_left_margin * 2);
// 	var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
// 	var canvas_image_width = HTML_Width;
// 	var canvas_image_height = HTML_Height;

// 	var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

// 	html2canvas($("#paper-border")[0]).then(function (canvas) {
		
// 	console.log("started");
// 		var imgData = canvas.toDataURL("image/jpeg", 1.0);
// 		var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
// 		pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
// 		for (var i = 1; i <= totalPDFPages; i++) { 
// 			pdf.addPage(PDF_Width, PDF_Height);
// 			pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
// 		}
// 		pdf.save("Your_PDF_Name.pdf");
// 		$("#paper-border").hide();
//   });
	
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

	var doc = new jsPDF('p', 'pt', [$("#paper-border").width(), $("#paper-border").height()]);
	doc.fromHTML($('#paper-border').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('sample-file.pdf');
}