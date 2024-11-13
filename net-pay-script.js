$(document).ready(function() {
    $("#paycheckForm").submit(function(event) {
        event.preventDefault();

        const grossPay = parseFloat($("#grossPay").val());

        // Assuming standard deduction rates
        const federalWithholdingRate = 0.22; // Adjust based on tax bracket
        const socialSecurityRate = 0.062;
        const medicareRate = 0.0145;
        const stateTaxWithholdingRate = 0.0525; // For North Carolina

        const federalWithholding = grossPay * federalWithholdingRate;
        const socialSecurity = grossPay * socialSecurityRate;
        const medicare = grossPay * medicareRate;
        const stateTaxWithholding = grossPay * stateTaxWithholdingRate;

        const netPay = grossPay - federalWithholding - socialSecurity - medicare - stateTaxWithholding;

        $("#result").html(`
            <p><strong>Gross Pay:</strong> $${grossPay.toFixed(2)}</p>
            <p><strong>Federal Withholding:</strong> $${federalWithholding.toFixed(2)}</p>
            <p><strong>Social Security:</strong> $${socialSecurity.toFixed(2)}</p>
            <p><strong>Medicare:</strong> $${medicare.toFixed(2)}</p>
            <p><strong>State Tax Withholding:</strong> $${stateTaxWithholding.toFixed(2)}</p>
            <p><strong>Net Pay:</strong> $${netPay.toFixed(2)}</p>
        `);
    });
});