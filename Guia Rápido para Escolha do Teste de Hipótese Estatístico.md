# Guia Rápido para Escolha do Teste de Hipótese Estatístico

Para identificar o teste de hipótese estatístico correto, você deve responder a três perguntas principais sobre seus dados e o objetivo da sua análise.

## 1. O que você está comparando? (Tipo de Variável)

O primeiro passo é determinar a natureza da sua **variável dependente** (a variável que você está medindo, como tempo de resposta, escore de usabilidade, ou status de login).

| Tipo de Variável | Descrição | Testes Apropriados |
| :--- | :--- | :--- |
| **Contínua/Quantitativa** | Valores numéricos que podem assumir qualquer valor dentro de um intervalo (ex: tempo, altura, escore SUS). | Testes **Paramétricos** (T de Student, ANOVA) ou **Não Paramétricos** (Mann-Whitney, Wilcoxon, Kruskal-Wallis). |
| **Categórica** | Valores que se enquadram em categorias (ex: sucesso/falha, tipo de dispositivo, sim/não). | Testes **Não Paramétricos** (Qui-Quadrado). |
| **Ordinal** | Categorias com ordem natural (ex: prioridade 1 a 5, nível de satisfação). | Testes **Não Paramétricos** (Mann-Whitney, Kruskal-Wallis). |

---

## 2. Quantos grupos/amostras você tem e como eles se relacionam?

O segundo passo é definir o **desenho do estudo** (quantas amostras e se são independentes ou dependentes/pareadas).

| Desenho do Estudo | Descrição | Exemplo (Questões da Atividade) |
| :--- | :--- | :--- |
| **Uma Amostra** | Comparar a média da amostra com um valor de referência conhecido. | **Questão 6:** Comparar o tempo de resposta com a meta de 200ms. |
| **Duas Amostras Independentes** | Comparar dois grupos distintos de participantes/observações. | **Questão 1 e 2:** Comparar Versão 1 vs. Versão 2 da API (grupos diferentes). |
| **Duas Amostras Pareadas/Dependentes** | Comparar duas medições feitas nas mesmas unidades (antes/depois, ou pares). | **Questão 7 e 8:** Comparar tempo *antes* e *depois* da implantação do painel (mesmos analistas). |
| **Três ou Mais Amostras Independentes** | Comparar três ou mais grupos distintos de participantes/observações. | **Questão 4 e 5:** Comparar 3 Provedores de Nuvem ou 3 Tipos de Clientes. |
| **Associação entre Categóricas** | Verificar se duas variáveis categóricas estão relacionadas. | **Questão 3 e 10:** Associar Tipo de Dispositivo com Status de Login. |

---

## 3. Os Pressupostos Paramétricos são Atendidos?

Se a variável for **Contínua**, você deve verificar os pressupostos para decidir entre um teste **Paramétrico** (mais potente) ou **Não Paramétrico** (mais robusto).

| Pressuposto | Teste de Verificação | Se Atendido (Paramétrico) | Se Violado (Não Paramétrico) |
| :--- | :--- | :--- | :--- |
| **Normalidade** | Teste de Shapiro-Wilk ($p > 0,05$) | **T de Student** ou **ANOVA** | **Mann-Whitney**, **Wilcoxon** ou **Kruskal-Wallis** |
| **Homogeneidade de Variâncias** | Teste de Levene ($p > 0,05$) | **T de Student** (padrão) ou **ANOVA** (padrão) | **T de Welch** (alternativa ao T de Student) |

---

## Tabela de Decisão para Testes de Hipóteses

Esta tabela resume a escolha do teste com base nas três perguntas.

| Objetivo da Análise | Variável Dependente | Desenho do Estudo | Pressupostos Atendidos? | Teste Paramétrico | Teste Não Paramétrico |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Comparar com Referência** | Contínua | Uma Amostra | Sim | **T de Student (1 Amostra)** | **Wilcoxon (1 Amostra)** |
| **Comparar 2 Grupos** | Contínua | 2 Independentes | Sim | **T de Student (Independentes)** | **U de Mann-Whitney** |
| **Comparar 2 Grupos** | Contínua | 2 Pareadas | Sim (nas diferenças) | **T de Student (Pareado)** | **Wilcoxon (Pareado)** |
| **Comparar $\ge 3$ Grupos** | Contínua | $\ge 3$ Independentes | Sim | **ANOVA (1 Fator)** | **Kruskal-Wallis** |
| **Associação** | Categórica | 2 Variáveis | N/A | N/A | **Qui-Quadrado (Independência)** |

### Exemplos da Atividade (Justificativas Simplificadas)

| Questão | Objetivo/Desenho | Variável | Pressupostos | Teste Escolhido |
| :--- | :--- | :--- | :--- | :--- |
| **1** | Comparar 2 grupos independentes | Contínua (Tempo) | Atendidos (Normalidade e Levene $p>0,05$) | **T de Student (Independentes)** |
| **2** | Comparar 2 grupos independentes | Contínua (Escore SUS) | **Violados** (Normalidade $p<0,001$) | **U de Mann-Whitney** |
| **3** | Associação entre 2 variáveis | Categórica (Dispositivo e Status) | N/A | **Qui-Quadrado (Independência)** |
| **4** | Comparar 3 grupos independentes | Contínua (Tempo) | Atendidos (Normalidade e Levene $p>0,05$) | **ANOVA (1 Fator)** |
| **5** | Comparar 3 grupos independentes | Ordinal (Prioridade) | N/A (Variável Ordinal) | **Kruskal-Wallis** |
| **7** | Comparar 2 medições pareadas | Contínua (Tempo) | Atendidos (Normalidade das diferenças $p>0,05$) | **T de Student (Pareado)** |
| **8** | Comparar 2 medições pareadas | Contínua (Bugs) | **Violados** (Normalidade das diferenças $p<0,01$) | **Wilcoxon (Pareado)** |
| **9** | Conclusão do teste | N/A | N/A | **Interpretação do p-valor** ($p=0,08 > \alpha=0,05 \implies$ Não Rejeita $H_0$) |
| **10** | Associação entre 2 variáveis | Categórica (Área e Certificação) | N/A | **Interpretação do p-valor** ($p=0,004 < \alpha=0,05 \implies$ Rejeita $H_0$) |
