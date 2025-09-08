import pandas as pd
import matplotlib.pyplot as plt

# Exemplo de planilha com dados fictícios
df = pd.DataFrame({
    'Data': pd.date_range(start='2025-01-01', periods=4, freq='W'),
    'Km': [20, 25, 22, 28]
})

df['Semana'] = df['Data'].dt.isocalendar().week
relatorio = df.groupby('Semana').agg({'Km':'sum'})

# Gera gráfico e salva como thumb.png
relatorio.plot(kind='bar', legend=False, color='skyblue')
plt.title('Km por Semana')
plt.ylabel('Km')
plt.tight_layout()
plt.savefig('thumb.png')
plt.close()
print("Miniatura da Automação de Treinos salva em automacao-treinos/thumb.png")
