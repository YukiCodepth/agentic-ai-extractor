document.getElementById("extractBtn").addEventListener("click", () => {
    const fileInput = document.getElementById("fileInput");
    const resultsDiv = document.getElementById("results");

    if (fileInput.files.length === 0) {
        resultsDiv.textContent = "⚠️ Please upload a file first.";
        return;
    }

    const file = fileInput.files[0];

    // Simulate extraction
    const fakeData = {
        Name: "John Doe",
        Position: "Software Engineer",
        Salary: "$80,000",
        Department: "IT"
    };

    // Show results
    resultsDiv.textContent = Object.entries(fakeData)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");

    // Save for CSV export
    window.extractedData = fakeData;
});

document.getElementById("exportCSV").addEventListener("click", () => {
    if (!window.extractedData) {
        alert("No data to export! Please extract first.");
        return;
    }

    const rows = Object.entries(window.extractedData)
        .map(([key, value]) => `${key},${value}`)
        .join("\n");

    const blob = new Blob([rows], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "extracted_data.csv";
    link.click();
});
