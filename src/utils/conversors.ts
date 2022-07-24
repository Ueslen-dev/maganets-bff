export const moneyConversor = (money: string): string => {
  const converser = Number(money).toLocaleString('pt-BR')

  return `R$${converser}`
}
