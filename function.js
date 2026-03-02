const generateBtn = document.getElementById('generateBtn');

generateBtn.addEventListener('click', function() {

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Datos
    const name = document.getElementById('nameInput').value;
    const job = document.getElementById('jobInput').value;
    const phone = document.getElementById('phoneInput').value;
    const email = document.getElementById('emailInput').value;
    const profile = document.getElementById('profileInput').value;
    const education = document.getElementById('educationInput').value;
    const skills = document.getElementById('skillsInput').value;

    // Encabezado de color
    doc.setFillColor(99, 102, 241);
    doc.rect(0, 0, 210, 30, "F");

    // Nombre
    doc.setTextColor(255,255,255);
    doc.setFontSize(20);
    doc.text(name || "Tu Nombre", 105, 15, null, null, "center");

    // Profesión
    doc.setFontSize(12);
    doc.text(job || "Profesión", 105, 25, null, null, "center");

    // Reset color
    doc.setTextColor(0,0,0);

    // Contacto
    doc.text("Teléfono: " + phone, 20, 50);
    doc.text("Correo: " + email, 20, 60);

    // Línea
    doc.line(20, 70, 190, 70);

    // Perfil
    doc.setFontSize(14);
    doc.text("Perfil", 20, 85);
    doc.setFontSize(12);
    doc.text(profile || "-", 20, 95, {maxWidth: 170});

    // Educación
    doc.setFontSize(14);
    doc.text("Educación", 20, 120);
    doc.setFontSize(12);
    doc.text(education || "-", 20, 130, {maxWidth: 170});

    // Habilidades
    doc.setFontSize(14);
    doc.text("Habilidades", 20, 155);
    doc.setFontSize(12);
    doc.text(skills || "-", 20, 165, {maxWidth: 170});

    // Descargar PDF
    doc.save("Curriculum.pdf");

});