function calculateAge() {
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;
  
  if (!day || !month || !year) {
    alert("Please enter a valid date.");
    return;
  }

  const birthDate = new Date(`${year}-${month}-${day}`);
  const currentDate = new Date();

  if (birthDate > currentDate) {
    alert("Please enter a date in the past.");
    return;
  }

  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const birthMonth = birthDate.getMonth();

  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthDate.getDate())) {
    age--;
  }

  document.getElementById("result").textContent = `You are ${age} years old.`;
}
