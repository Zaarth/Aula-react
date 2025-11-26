# Resumo para Estudo: Testes de Hipóteses, Regressão e Distribuições Amostrais

Este resumo abrange os principais tópicos de **Testes de Hipóteses Paramétricos e Não Paramétricos**, **Regressão Linear Simples e Múltipla** e **Distribuições Amostrais e Estimativas**, com base nos materiais fornecidos.

---

## 1. Testes de Hipóteses

Testes de hipóteses são métodos estatísticos para avaliar suposições sobre um parâmetro populacional (média, proporção, etc.) com base em dados de uma amostra.

### 1.1. Etapas de Realização de um Teste de Hipóteses

1.  **Determinar as Hipóteses Nula ($H_0$) e Alternativa ($H_1$):**
    *   $H_0$: Afirma que "não há diferença" ou "não há efeito" (ex: médias iguais, média igual a um valor de referência).
    *   $H_1$: Afirma que existe diferença ou efeito (ex: média diferente, maior ou menor que o valor de referência).
2.  **Selecionar a Estatística de Teste:** Escolher a estatística apropriada (ex: $t$, $Z$, $\chi^2$) com base no tipo de dados e no desenho do estudo.
3.  **Especificar o Nível de Significância ($\alpha$):** A probabilidade máxima aceitável de cometer o **Erro Tipo I** (rejeitar $H_0$ quando ela é verdadeira - falso positivo). Geralmente $\alpha = 0,05$ (5%).
4.  **Coletar os Dados:** Obter a amostra e calcular a estatística de teste.
5.  **Comparar o Valor da Estatística do Teste com o Valor Crítico (ou p-valor):**
    *   **Método do Valor Crítico:** Se a estatística de teste cair na região crítica (região de rejeição), rejeita-se $H_0$.
    *   **Método do p-valor:** Se o **p-valor** (probabilidade de obter o resultado observado, assumindo $H_0$ verdadeira) for $\le \alpha$, rejeita-se $H_0$.

### 1.2. Testes Paramétricos vs. Não Paramétricos

| Característica | Testes Paramétricos | Testes Não Paramétricos |
| :--- | :--- | :--- |
| **Pressupostos** | Exigem que os dados sigam uma distribuição específica (geralmente Normal) e homogeneidade de variâncias (em testes de grupos). | Não exigem distribuição específica. Baseiam-se na ordem (postos) dos dados. |
| **Variável** | Quantitativa contínua. | Ordinal ou quantitativa com distribuição não normal. |
| **Medida Central** | Média. | Mediana. |
| **Potência** | Mais potentes quando os pressupostos são atendidos. | Menos potentes, mas mais robustos a violações de pressupostos. |

#### 1.2.1. Testes de Significância Paramétricos (T de Student)

| Desenho do Estudo | Teste Paramétrico | Objetivo |
| :--- | :--- | :--- |
| **Uma Amostra** | **T de Student para Amostra Única** | Compara a média da amostra com um valor de referência populacional. |
| **Duas Amostras Independentes** | **T de Student para Amostras Independentes** | Compara as médias de dois grupos distintos (ex: Turma A vs. Turma B). |
| **Duas Amostras Emparelhadas** | **T de Student para Amostras Pareadas** | Compara as médias de duas medidas no mesmo grupo (ex: antes vs. depois). |

#### 1.2.2. Testes de Hipóteses Não Paramétricos

| Desenho do Estudo | Teste Não Paramétrico | Equivalente Paramétrico |
| :--- | :--- | :--- |
| **Uma Amostra** | **Wilcoxon para Sinais de Postos** | T de Student para Amostra Única |
| **Duas Amostras Independentes** | **U de Mann–Whitney** | T de Student para Amostras Independentes |
| **Duas Amostras Emparelhadas** | **Wilcoxon para Amostras Pareadas** | T de Student para Amostras Pareadas |
| **Três ou Mais Amostras Independentes** | **Kruskal–Wallis** | ANOVA a um fator |

#### 1.2.3. Qui Quadrado ($\chi^2$)

O teste Qui-Quadrado é um teste não paramétrico fundamental para variáveis categóricas.

*   **Teste de Aderência (ou Bondade do Ajuste):**
    *   **Objetivo:** Avalia se a distribuição de frequências observadas de uma única variável categórica difere significativamente de uma distribuição de frequências esperadas (teórica).
    *   **Exemplo:** Verificar se a proporção de cores de M&Ms em um pacote segue a proporção anunciada pelo fabricante.
*   **Teste de Independência ou Associação:**
    *   **Objetivo:** Avalia se existe associação (dependência) entre duas variáveis categóricas.
    *   **Exemplo:** Verificar se a preferência por um tipo de interface (variável 1) é independente do nível de experiência do usuário (variável 2).

---

## 2. Regressão Linear Simples e Múltipla

A Regressão Linear é uma técnica estatística para modelar a relação entre uma variável dependente ($Y$) e uma ou mais variáveis independentes ($X$).

### 2.1. Modelo de Regressão Linear Simples

O modelo de Regressão Linear Simples (RLS) utiliza uma única variável independente ($X$) para prever a variável dependente ($Y$).

$$
Y = \beta_0 + \beta_1 X + \epsilon
$$

*   $Y$: Variável dependente (resposta).
*   $X$: Variável independente (preditora).
*   $\beta_0$: **Coeficiente Linear** (intercepto) - o valor esperado de $Y$ quando $X=0$.
*   $\beta_1$: **Coeficiente Angular** (inclinação) - a mudança esperada em $Y$ para cada aumento de uma unidade em $X$.
*   $\epsilon$: Erro aleatório (resíduo).

#### Cálculo dos Coeficientes Linear ($\beta_0$) e Angular ($\beta_1$)

Os coeficientes são estimados pelo método dos **Mínimos Quadrados Ordinários (MQO)**, que minimiza a soma dos quadrados dos resíduos (a distância vertical entre os pontos de dados e a linha de regressão).

### 2.2. Regressão Linear Múltipla

A Regressão Linear Múltipla (RLM) utiliza duas ou mais variáveis independentes ($X_1, X_2, \dots, X_k$) para prever a variável dependente ($Y$).

$$
Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \dots + \beta_k X_k + \epsilon
$$

*   **Interpretação dos Coeficientes ($\beta_i$):** Representa a mudança esperada em $Y$ para cada aumento de uma unidade em $X_i$, **mantendo todas as outras variáveis independentes constantes** (*ceteris paribus*).

### 2.3. Pressupostos da Regressão

Para que as inferências do modelo de regressão linear sejam válidas, é necessário que os resíduos ($\epsilon$) satisfaçam os seguintes pressupostos:

1.  **Linearidade:** A relação entre $X$ e $Y$ é linear.
2.  **Normalidade dos Resíduos:** Os resíduos devem seguir uma distribuição normal.
3.  **Homocedasticidade (Variância Constante):** A variância dos resíduos deve ser constante para todos os níveis de $X$.
4.  **Independência dos Resíduos:** Os resíduos devem ser independentes uns dos outros (especialmente importante em dados de séries temporais).
5.  **Ausência de Multicolinearidade (RLM):** As variáveis independentes não devem ser altamente correlacionadas entre si.

### 2.4. Coeficientes de Correlação e Determinação

*   **Coeficiente de Correlação de Pearson ($r$):**
    *   **Mede:** A força e a direção da relação linear entre duas variáveis.
    *   **Variação:** De $-1$ (correlação negativa perfeita) a $+1$ (correlação positiva perfeita). $r=0$ indica ausência de correlação linear.
*   **Coeficiente de Determinação ($R^2$):**
    *   **Mede:** A proporção da variação total na variável dependente ($Y$) que é explicada pelo modelo de regressão.
    *   **Variação:** De $0$ a $1$. Um $R^2$ de $0,75$ significa que $75\%$ da variação em $Y$ é explicada pelo modelo.

---

## 3. Distribuições Amostrais e Estimativas

### 3.1. Teorema Central do Limite (TCL)

O TCL é um dos pilares da inferência estatística.

> **Teorema Central do Limite:** Se o tamanho da amostra ($n$) for suficientemente grande (geralmente $n \ge 30$), a **Distribuição Amostral das Médias** será aproximadamente uma distribuição normal, **independentemente da forma da distribuição da população original**.

*   **Distribuição Amostral de Médias:** A distribuição de todas as médias amostrais possíveis de um determinado tamanho ($n$) que podem ser retiradas de uma população.
    *   Média da distribuição amostral: $\mu_{\bar{x}} = \mu$ (média populacional).
    *   Desvio Padrão da distribuição amostral (Erro Padrão): $\sigma_{\bar{x}} = \sigma / \sqrt{n}$.
*   **Distribuição Amostral para Proporções:** Semelhante ao TCL para médias, para um $n$ grande, a distribuição amostral das proporções ($\hat{p}$) também se aproxima de uma distribuição normal.

### 3.2. Estimação Pontual e Intervalar dos Parâmetros

*   **Estimação Pontual:**
    *   Fornece um **único valor** (o estimador) como a melhor estimativa para o parâmetro populacional.
    *   **Exemplos:** A média amostral ($\bar{x}$) é a estimativa pontual da média populacional ($\mu$). A proporção amostral ($\hat{p}$) é a estimativa pontual da proporção populacional ($p$).
*   **Estimação Intervalar:**
    *   Fornece um **intervalo de valores** que, com um certo nível de confiança, contém o verdadeiro parâmetro populacional.

### 3.3. Intervalos de Confiança (IC)

O Intervalo de Confiança (IC) é a estimativa intervalar.

*   **Fórmula Geral:** Estimativa Pontual $\pm$ Margem de Erro
*   **Nível de Confiança:** A probabilidade (geralmente 90%, 95% ou 99%) de que o intervalo construído contenha o verdadeiro parâmetro populacional.

#### Intervalos de Confiança para Médias ($\mu$)

*   **Quando $\sigma$ é conhecido (ou $n$ é grande):** Usa-se a distribuição $Z$.
*   **Quando $\sigma$ é desconhecido e $n$ é pequeno:** Usa-se a distribuição **T de Student**.

#### Intervalos de Confiança para Proporções ($p$)

*   Usa-se a distribuição $Z$ (aproximação normal), desde que $n \cdot \hat{p} \ge 10$ e $n \cdot (1-\hat{p}) \ge 10$.

### 3.4. Cálculo do Tamanho da Amostra ($n$)

O cálculo do tamanho da amostra é crucial para garantir que o estudo tenha poder estatístico suficiente. É determinado por:

1.  **Nível de Confiança Desejado** (que define o valor $Z$).
2.  **Margem de Erro Máxima Aceitável** ($E$).
3.  **Variabilidade da População** (estimada por $\sigma$ ou $\hat{p}$).

**Fórmula para Média:**
$$
n = \left( \frac{Z \cdot \sigma}{E} \right)^2
$$

**Fórmula para Proporção:**
$$
n = \frac{Z^2 \cdot \hat{p} \cdot (1-\hat{p})}{E^2}
$$

---

## 4. Amostragem (Complemento)

Os materiais fornecidos detalham as técnicas de amostragem, essenciais para a coleta de dados que sustenta a inferência estatística.

### 4.1. Amostragens Probabilísticas

Toda unidade tem probabilidade conhecida e maior que zero de ser selecionada, permitindo generalização e cálculo do erro amostral.

| Tipo | Definição |
| :--- | :--- |
| **Aleatória Simples** | Todas as unidades têm a mesma probabilidade de seleção. Requer lista completa (frame) e sorteio aleatório. |
| **Sistemática** | Seleciona-se uma unidade inicial aleatória e, a partir dela, unidades a cada $k = N/n$. Útil em listas ou percursos ordenados. |
| **Estratificada** | Divide-se a população em subgrupos (estratos) homogêneos (ex: área, tipo) e sorteia-se dentro de cada estrato. Aumenta a precisão. |
| **Conglomerados** | A unidade amostral é um grupo natural (conglomerado). Sorteiam-se os conglomerados e, dentro deles, todos ou alguns elementos. Reduz custos logísticos. |

### 4.2. Amostragens Não Probabilísticas

A seleção não é por sorteio, e as probabilidades de inclusão são desconhecidas. Útil para exploração, mas com generalização limitada.

| Tipo | Definição |
| :--- | :--- |
| **Acidental (Conveniência)** | Seleciona-se o que estiver mais acessível. |
| **Intencional (Julgamento)** | Seleção deliberada de unidades "típicas" ou "críticas" pelo analista. |
| **Por Quotas** | Define-se uma distribuição alvo de subgrupos e recruta-se até completar as quotas. |
| **Bola de Neve** | Participantes indicam novos participantes para populações ocultas ou de difícil acesso. |
