async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("Users:", data);
  } catch (error) {
    console.error("Failed to fetch users:", error);
  } finally {
    console.log("Operation finished");
  }
}

fetchUsers();