# Solução e Guia de Interpretação de Testes de Hipóteses

## 1. Gabarito e Solução Detalhada

Abaixo estão as respostas corretas para as 10 questões, seguidas da justificativa que explica a escolha do teste estatístico.

| Questão | Resposta Correta | Justificativa |
| :---: | :---: | :--- |
| 1 | **B) Teste t para amostras independentes (Student)** | Duas amostras independentes, variável contínua, pressupostos de normalidade e homogeneidade de variâncias atendidos. |
| 2 | **C) Teste de Mann–Whitney** | Duas amostras independentes, variável contínua, mas o pressuposto de normalidade **violado** (p < 0,001). O Mann–Whitney é o equivalente não paramétrico do Teste t para amostras independentes. |
| 3 | **A) Teste do qui-quadrado de independência** | Duas variáveis **categóricas** (Dispositivo e Status de Login). O objetivo é verificar a associação/independência entre elas. |
| 4 | **B) ANOVA de um fator** | Comparação de **três ou mais** médias (três provedores de nuvem), variável contínua, pressupostos de normalidade e homogeneidade de variâncias atendidos. |
| 5 | **B) Teste de Kruskal–Wallis** | Comparação de **três ou mais** grupos (três tipos de clientes), variável **ordinal** (prioridade 1-5) e pressupostos paramétricos violados. O Kruskal–Wallis é o equivalente não paramétrico da ANOVA. |
| 6 | **A) Teste t para uma amostra** | Comparação da média de uma única amostra (tempo de resposta) com um valor de referência conhecido (200 ms). A variância populacional é desconhecida. |
| 7 | **A) Teste t pareado** | Duas medições (antes e depois) feitas **nas mesmas pessoas** (amostras dependentes/pareadas), variável contínua, e a distribuição das diferenças é normal. |
| 8 | **B) Teste de Wilcoxon para dados pareados** | Duas medições (antes e depois) feitas em condições pareadas (mesmos 15 sprints), mas o pressuposto de normalidade das diferenças **violado**. O Wilcoxon pareado é o equivalente não paramétrico do Teste t pareado. |
| 9 | **B) Como p > 0,05, não há evidência estatística de diferença nas médias de consumo de CPU entre as versões, ao nível de 5 por cento.** | O p-valor (0,08) é maior que o nível de significância ($\alpha = 0,05$). Quando $p > \alpha$, **não se rejeita** a hipótese nula ($H_0$), que afirma que as médias são iguais. |
| 10 | **A) Como p < 0,05, rejeita-se a hipótese de independência, sugerindo associação entre área de atuação e certificação em computação em nuvem.** | O p-valor (0,004) é menor que o nível de significância ($\alpha = 0,05$). Quando $p < \alpha$, **rejeita-se** a hipótese nula ($H_0$), que neste caso era a de independência. |

***

## 2. Guia de Interpretação para a Prova: Como Escolher e Interpretar um Teste de Hipóteses

Para a sua prova, a chave é entender três pontos principais: **Tipo de Variável**, **Pressupostos** e **Interpretação do p-valor**.

### Passo 1: Classificar as Variáveis e o Objetivo

O primeiro passo é identificar o que você está medindo e o que você quer fazer com essa medição.

| Tipo de Variável | Características | Exemplos na Atividade | Testes Comuns |
| :--- | :--- | :--- | :--- |
| **Contínua/Intervalar** | Valores numéricos que podem ser fracionados e têm significado matemático (média, desvio padrão). | Tempo de resposta (ms), Escore SUS (0-100), Consumo de CPU (%). | Teste t, ANOVA, Mann–Whitney, Kruskal–Wallis. |
| **Ordinal** | Categorias que possuem uma ordem natural, mas a distância entre elas não é necessariamente igual. | Prioridade (1 a 5). | Teste de Kruskal–Wallis, Teste de Wilcoxon. |
| **Categórica/Nominal** | Categorias sem ordem. | Tipo de Dispositivo (desktop, celular), Status de Login (sucesso/falha), Certificação (sim/não). | Teste do Qui-quadrado. |

**Objetivo:**
*   **Comparar 2 médias/grupos:** Teste t (paramétrico) ou Mann–Whitney/Wilcoxon (não paramétrico).
*   **Comparar 3+ médias/grupos:** ANOVA (paramétrico) ou Kruskal–Wallis (não paramétrico).
*   **Comparar 1 média com um valor de referência:** Teste t para uma amostra.
*   **Verificar Associação entre Categóricas:** Teste do Qui-quadrado.

### Passo 2: Verificar os Pressupostos (Paramétrico vs. Não Paramétrico)

Testes **paramétricos** (como Teste t e ANOVA) são mais poderosos, mas exigem que os dados atendam a certas condições (pressupostos). Se os pressupostos forem violados, você deve usar um teste **não paramétrico**.

| Pressuposto | O que é | Teste Comum para Verificar | Se Atendido | Se Violado |
| :--- | :--- | :--- | :--- | :--- |
| **Normalidade** | Os dados (ou as diferenças, no caso de pareados) seguem uma distribuição normal (curva de sino). | Teste de Shapiro–Wilk ($p > 0,05$ indica normalidade). | Use Teste t ou ANOVA. | Use Mann–Whitney, Kruskal–Wallis ou Wilcoxon. |
| **Homogeneidade de Variâncias** | As variâncias dos grupos comparados são aproximadamente iguais. | Teste de Levene ($p > 0,05$ indica homogeneidade). | Use Teste t de Student ou ANOVA. | Use Teste t de Welch (ajustado) ou um teste não paramétrico. |
| **Dependência/Pareamento** | As amostras são independentes (grupos diferentes) ou pareadas (mesmas pessoas medidas duas vezes). | Definido pelo desenho do estudo. | Teste t para amostras independentes (se independentes) ou Teste t pareado (se pareadas). | |

### Passo 3: Interpretar o p-valor (A Regra de Ouro)

O **p-valor** é a probabilidade de observar os dados (ou dados mais extremos) se a **Hipótese Nula ($H_0$)** fosse verdadeira.

A **Hipótese Nula ($H_0$)** é sempre a hipótese de **não efeito** ou **não diferença** (ex: as médias são iguais, não há associação).

O **Nível de Significância ($\alpha$)** é o limite que você define para rejeitar $H_0$. Na maioria dos casos, $\alpha = 0,05$ (ou 5%).

| Condição | Decisão Estatística | Conclusão Prática |
| :--- | :--- | :--- |
| **$p < \alpha$** (ex: $p < 0,05$) | **Rejeitar $H_0$** | Há evidência estatística de que existe uma diferença/associação. |
| **$p > \alpha$** (ex: $p > 0,05$) | **Não Rejeitar $H_0$** | Não há evidência estatística de que exista uma diferença/associação. |

**Exemplo da Questão 9:**
*   $p = 0,08$ e $\alpha = 0,05$.
*   $p > \alpha$ ($0,08 > 0,05$).
*   **Decisão:** Não Rejeitar $H_0$.
*   **Conclusão:** Não há evidência de diferença no consumo de CPU entre as versões.

**Exemplo da Questão 10:**
*   $p = 0,004$ e $\alpha = 0,05$.
*   $p < \alpha$ ($0,004 < 0,05$).
*   **Decisão:** Rejeitar $H_0$ (que era a hipótese de independência).
*   **Conclusão:** Há evidência de associação entre área de atuação e certificação.
