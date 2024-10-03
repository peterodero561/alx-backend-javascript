export default function guardrail(mathFunction) {
  const list = [];
  try {
    const result = mathFunction();
    list.push(result);
  } catch (error) {
    list.push(`Error: ${error.message}`);
  }
  list.push('Guardrail was processed');
  return list;
}
