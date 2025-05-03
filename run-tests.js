const { execSync } = require('child_process');

function runCommand(command) {
  console.log(`\n🟡 Rodando: ${command}\n`);
  try {
    execSync(command, { stdio: 'inherit' });
    console.log(`🟢 Sucesso: ${command}\n`);
  } catch (error) {
    console.error(`🔴 Erro ao executar: ${command}\n`);
  }
}

const steps = [
  'npm run clean-reports',
  'npm run cy:parallel',
  'npm run merge-reports',
  'npm run generate-report',
  'start cypress\\reports\\index.html'

];

for (const step of steps) {
  runCommand(step);
}