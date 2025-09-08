import pandas as pd

# Importa planilha
try:
    df = pd.read_excel('treinos.xlsx')
except FileNotFoundError:
    print("Arquivo treinos.xlsx não encontrado!")
    exit()

# Calcula total de km e pace médio por semana
df['Semana'] = df['Data'].dt.isocalendar().week
relatorio = df.groupby('Semana').agg({'Km':'sum', 'Pace':'mean'})

# Exporta relatório
relatorio.to_excel('relatorio_semanal.xlsx')
print('Relatório gerado com sucesso!')
