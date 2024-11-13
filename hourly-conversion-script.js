$(document).ready(function() {
    $("#hourlyToAnnual").click(function() {
        const hourlyPay = parseFloat($("#hourlyPay").val());
        const annualSalary = hourlyPay * 40 * 52;

        $("#result").html(`
            <p>Annual Salary: $${annualSalary.toFixed(2)}</p>
        `);
    });

    $("#annualToHourly").click(function() {
        const annualSalary = parseFloat($("#annualSalary").val());
        const hourlyPay = annualSalary / (40 * 52);

        $("#result").html(`
            <p>Hourly Pay: $${hourlyPay.toFixed(2)}</p>
        `);
    });
});
