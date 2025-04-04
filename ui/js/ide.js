let editor, afteditr, afteditr2;
const uploadButton = document.getElementById("uploadButton");
const fileInput = document.getElementById("fileInput");
const result = document.getElementById("result");

window.onload = function () {
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/c_cpp");
    editor.setFontSize(16);

    afteditr = ace.edit("afteditr");
    afteditr.setTheme("ace/theme/monokai");
    afteditr.session.setMode("ace/mode/c_cpp");
    afteditr.setReadOnly(true);
    afteditr.setFontSize(15);

    afteditr2 = ace.edit("afteditr2");
    afteditr2.setTheme("ace/theme/monokai");
    afteditr2.session.setMode("ace/mode/c_cpp");
    afteditr2.setReadOnly(true);
    afteditr2.setFontSize(15);
};

// Language switcher
function changeLanguage() {
    let language = $("#languages").val();

    if (language == "c" || language == "cpp") editor.session.setMode("ace/mode/c_cpp");
    else if (language == "php") editor.session.setMode("ace/mode/php");
    else if (language == "python") editor.session.setMode("ace/mode/python");
    else if (language == "node") editor.session.setMode("ace/mode/javascript");
}

// Execute and compile code
function executeCode() {
    let code = editor.getSession().getValue();
    let language = $("#languages").val();

    $.ajax({
        url: "/ide/app/compiler.php",
        method: "POST",
        data: {
            language: language,
            code: code
        },
        success: function (response) {
            if (/error|Error|syntax|fatal/i.test(response)) {
                afteditr.setValue(code, -1);
            } else {
                afteditr.setValue("");
            }

            $(".output").text(response);
        }
    });
}

// =========================
// File Upload + Editor Load
// =========================
uploadButton.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", async () => {
    const file = fileInput.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("codeFile", file);

    try {
        const response = await fetch("http://localhost:3000/upload", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        // Optionally show upload message
        result.innerText = data.message || "File uploaded.";

        // Now read the file content and load it into the editor
        const reader = new FileReader();
        reader.onload = function (e) {
            editor.setValue(e.target.result, -1); // Load file content into editor
        };
        reader.readAsText(file);

    } catch (error) {
        console.error("Upload failed:", error);
        result.innerText = "Upload failed.";
    }
});
