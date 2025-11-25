# Relatório de Análise Estatística: Correlação e Regressão Linear Múltipla

**Objetivo:**
Analisar a relação entre a variável dependente **Satisfação do Usuário** e as variáveis independentes (Tempo de Resposta do Sistema, Facilidade de Uso, Confiabilidade do Sistema e Capacidade de Personalização) através de Correlação Linear e Regressão Linear Múltipla, respondendo às questões propostas.

---

## 1. Análise de Correlação Linear

A matriz de correlação de Pearson mede a força e a direção da associação linear entre as variáveis.

| Variável | Satisfação do Usuário | Tempo de Resposta | Facilidade de Uso | Confiabilidade | Personalização |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Satisfação do Usuário** | 1.000 | 0.828 | 0.181 | 0.323 | -0.046 |
| **Tempo de Resposta** | 0.828 | 1.000 | -0.136 | 0.191 | -0.118 |
| **Facilidade de Uso** | 0.181 | -0.136 | 1.000 | -0.037 | 0.096 |
| **Confiabilidade** | 0.323 | 0.191 | -0.037 | 1.000 | -0.005 |
| **Personalização** | -0.046 | -0.118 | 0.096 | -0.005 | 1.000 |

### Resposta à Questão A) Qual variável melhor explica a Satisfação do Usuário? Justifique e faça a interpretação.

A variável que melhor explica a Satisfação do Usuário, considerando apenas a correlação linear simples, é o **Tempo de Resposta do Sistema**.

*   **Correlação (r):** 0.828
*   **Interpretação:** Existe uma **correlação positiva forte** entre o Tempo de Resposta do Sistema e a Satisfação do Usuário. Isso significa que, à medida que o Tempo de Resposta do Sistema aumenta, a Satisfação do Usuário também tende a aumentar.

---

## 2. Análise de Regressão Linear Múltipla

O modelo de Regressão Linear Múltipla foi ajustado para prever a Satisfação do Usuário (Y) com base em todas as variáveis independentes (X).

| Variável | Coeficiente (b) | Coeficiente Padronizado (Beta) | p-valor |
| :--- | :---: | :---: | :---: |
| **Intercepto (Constante)** | 7.3000 | N/A | 0.366 |
| **Tempo de Resposta** | 1.3992 | **0.8383** | 0.000 |
| **Facilidade de Uso** | 0.3177 | 0.2998 | 0.000 |
| **Confiabilidade** | 0.4861 | 0.1739 | 0.000 |
| **Personalização** | 0.0257 | 0.0254 | 0.582 |

### Resposta à Questão B) Escreva a equação para prever a variável Satisfação do Usuário.

A equação de regressão linear múltipla, utilizando os coeficientes não padronizados (b), é:

$$
\text{Satisfação do Usuário} = 7.3000 + 1.3992 \times (\text{Tempo de Resposta}) + 0.3177 \times (\text{Facilidade de Uso}) + 0.4861 \times (\text{Confiabilidade}) + 0.0257 \times (\text{Personalização})
$$

### Resposta à Questão C) Quais variáveis explicam significativamente a variável Satisfação do Usuário – Variável Dependente?

Considerando um nível de significância de 5% ($\alpha = 0.05$), as variáveis que explicam **significativamente** a Satisfação do Usuário são aquelas cujo p-valor é menor que 0.05.

As variáveis significativas são:
1.  **Tempo de Resposta do Sistema** (p-valor = 0.000)
2.  **Facilidade de Uso** (p-valor = 0.000)
3.  **Confiabilidade do Sistema** (p-valor = 0.000)

A variável **Capacidade de Personalização** (p-valor = 0.582) não é estatisticamente significativa no modelo.

### Resposta à Questão D) Qual é a variável independente mais importante para explicar a variável Y – Satisfação do Usuário?

A importância relativa das variáveis independentes é determinada pelos **Coeficientes Padronizados (Beta)**, pois eles permitem a comparação direta entre variáveis com diferentes escalas de medida.

| Variável | Coeficiente Padronizado (Beta) |
| :--- | :---: |
| **Tempo de Resposta** | **0.8383** |
| **Facilidade de Uso** | 0.2998 |
| **Confiabilidade** | 0.1739 |
| **Personalização** | 0.0254 |

A variável independente mais importante é o **Tempo de Resposta do Sistema**, com o maior coeficiente padronizado ($\beta = 0.8383$). Isso indica que uma mudança de um desvio-padrão no Tempo de Resposta do Sistema resulta em uma mudança de 0.8383 desvios-padrão na Satisfação do Usuário, mantendo as outras variáveis constantes.

### Resposta à Questão E) Qual é o valor do Coeficiente de Determinação? Faça a interpretação do resultado.

O Coeficiente de Determinação é o **R-quadrado** ($R^2$) do modelo de regressão.

*   **Valor do Coeficiente de Determinação ($R^2$):** 0.803
*   **Interpretação:** O modelo de regressão linear múltipla ajustado explica **80.3%** da variação total na Satisfação do Usuário. Este é um valor alto, indicando que o modelo possui um bom poder preditivo para a variável dependente.

---

## Resumo do Modelo de Regressão

| Estatística | Valor |
| :--- | :---: |
| **R-quadrado ($R^2$)** | 0.803 |
| **R-quadrado Ajustado** | 0.795 |
| **F-estatística** | 96.88 |
| **Prob (F-estatística)** | $1.17 \times 10^{-32}$ |

O modelo é estatisticamente significativo como um todo (Prob (F-estatística) $\approx 0.000$), confirmando que pelo menos uma das variáveis independentes tem um efeito significativo sobre a Satisfação do Usuário.
