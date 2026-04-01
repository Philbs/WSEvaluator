export function askAI(prompt) {
     console.log('AI Prompt:', prompt);
     return Promise.resolve(`Analise completa para: ${prompt}`);
}
