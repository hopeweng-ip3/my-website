---
{"dg-publish":true,"permalink":"/host-digital-garden-pers-webs/garden/linear-algebra/","title":"Notes on Linear Maps and Linear Operators"}
---

# Matrix Representation of Linear Maps

> [!info] **Proposition**
> Let $f,g: U \to V$ be linear maps and $\mu,\lambda \in \mathbb{F}$. Let $\mathcal{B}$ be a basis of $U$ and $\mathcal{C}$ a basis of $V$.
>
> 1. $[\lambda f + \mu g] ^ {\mathcal{B}} _ {\mathcal{C}} = \lambda [f] ^ {\mathcal{B}} _ {\mathcal{C}} + \mu [g]^ {\mathcal{B}} _ {\mathcal{C}}$
> 2. If $f$ is invertible then $[f^{-1}]^ {\mathcal{C}} _ {\mathcal{B}} = ( [f]^ {\mathcal{B}} _ {\mathcal{C}} )^{-1}$.

> [!example]- Proof
> **Part 1**
> Let $\mathcal{B}$ be $\mathbf{b} _1,\ldots, \mathbf{b} _n$. This follows because the $j$-th column of $[ \lambda f + \mu g]_ {\mathcal{C}} ^ {\mathcal{B}}$ is:
> 
> $$[ (\lambda f+\mu g)( \mathbf{b}_j)]_ {\mathcal{C}} = [ \lambda f( \mathbf{b} _j) + \mu g( \mathbf{b} _j)]_ {\mathcal{C}} = \lambda [f( \mathbf{b} _j) ]_ {\mathcal{C}} + \mu [g( \mathbf{b} _j)]_ {\mathcal{C}}$$
> 
> This is the same as the $j$-th column of $\lambda [f] ^ {\mathcal{B}} _ {\mathcal{C}} + \mu [g] ^ {\mathcal{B}} _ {\mathcal{C}}$.
> 
> **Part 2**
> By the previous proposition:
> $$[\text{id}_W] ^ {\mathcal{C}} _ {\mathcal{C}}= [f \circ f^{-1}]^ {\mathcal{C}} _ {\mathcal{C}} = [f]^ {\mathcal{B}} _ {\mathcal{C}} [f^{-1}] ^ {\mathcal{C}} _ {\mathcal{B}}$$
> 
> But $[\text{id}_W] ^ {\mathcal{C}} _ {\mathcal{C}} =I_n$, where $n = \dim W$. So:
> $$[f] ^ {\mathcal{B}} _ {\mathcal{C}} [f^{-1}] ^ {\mathcal{C}} _ {\mathcal{B}}= I_n$$
> which gives the result we want.