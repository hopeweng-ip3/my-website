---
{"dg-publish":true,"permalink":"/host-digital-garden-pers-webs/project/two-page-precis/","title":"RTwo-page Precis"}
---


> **Abstract**: Online media users must choose between strategies for governing information sources under cognitive constraints: when is it worth careful long-term thinking versus relying on simple heuristics? Existing models ignore how cognitive costs of strategy evaluation constrain optimal selection. We use a resource-bounded framework to formalize how policy evaluation costs force users toward quick filtering rules.

#### Theory and Project

**The Multi-Armed Bandit Problem**

The multi-armed bandit (MAB) models sequential decision-making where an agent chooses among $K$ options with unknown reward distributions, balancing exploration against exploitation. We apply this to information source selection where each "arm" represents a source with time-varying reliability ("restless dynamics").

**Expected Utility Theory**

Expected utility theory explains how agents maximize $\mathbb{E}[U(a, s)]$ over actions $a$ and states $s$. Standard theory treats policies as computationally "free," ignoring cognitive work. Our framework makes cognitive costs central, predicting individuals rationally select "good enough" policies that conserve mental resources.

**Bounded Rationality and Resource-Rational Analysis**

Cognitive limitations—attention, working memory, processing capacity—constrain decision-making. We formalize this by modeling cognitive costs as: (1) attention for monitoring, (2) working memory for maintaining rules, (3) deliberative processing for probabilistic inference. Complex policies demand more resources than simple heuristics.

#### Setup of A Computational Model

Users select a governance policy $\pi$ to maximize expected utility minus computational costs. The decision state $s$ contains beliefs $b_t$ about source reliabilities and available cognitive resources $R_t$:

$$\pi^* = \arg\max_\pi \mathbb{E}[U(a,s) - C(\pi)]$$

The policy's value follows a resource-rational Bellman equation:

$$V(b_t, R_t | \pi) = \max_{a_t} \left[ u(a_t, b_t) - c(\pi, b_t, R_t) + \beta \mathbb{E}[V(b_{t+1}, R_{t+1} | \pi)] \right]$$

Per-period cognitive cost $c(\pi, b_t, R_t)$ and discount factor $\beta \in (0,1)$ are central to the decision criterion.

Users repeatedly choose which sources to check from a partially observable environment. Source quality $y_k$ evolves as an AR(1) process:
$$y'_k = \eta y_k + \epsilon_k, \quad 0 < \eta < 1, \quad \epsilon_k \sim \text{Normal}(0, \sigma^2)$$

Users observe only noisy signals $z_k$, which they use to update beliefs $b_t$ about reliabilities. When checking source $k$, they receive immediate utility $u(a_t, b_t) = z_a$.  

#### Implications & Implementation
This framework enables a data environment for analyzing efficiency in media consumption: For instance, by quantifying $C(\pi)$ for different governance designs, software engineers and policymakers can identify low-cost interventions that preserve user autonomy rather than ignoring human cognitive limitations.

1) *AI Alignment and Fiduciary Duties*: By measuring cognitive costs, platforms can design governance that avoids exploiting user limitations and supports equitable informational welfare (Caplin & Dean, 2015).

2) *Social Cohesion and Responsible Technology Design*: Quantifying cognitive constraints informs interventions—like defaults and diversity features—to reduce filtering biases and sustain democratic discourse (Bozdag & van den Hoven, 2015).


> **Working title**: How Cognitive Costs Lead to Simple Rules: Bounded Reasoning in Media Source Selection
> **PIs**: Chenziheng Allen Weng (Department of Epidemiology, NYU GPH), Sebastian Benthall (Information Law Institute, NYU Law)