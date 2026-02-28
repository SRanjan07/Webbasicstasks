type urole ="admin"|"edit"|"view";

function assignRole(role: urole): string {
  return `Assigned role: ${role}`;
}

console.log(assignRole("admin"));  
