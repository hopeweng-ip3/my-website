---
{"dg-publish":true,"permalink":"/host-digital-garden-pers-webs/repo/problem-statement-in-written-text/","title":"Problem statement"}
---


# Title: Media Source Selection Under Cognitive Constraints

The media source selection problem models the optimal allocation of limited attention across multiple dynamic information streams. The user (agent/decision-maker) must balance the utility of acquiring high-value information against the cognitive costs of monitoring sources and switching contexts.

The user faces a trade-off: invest in a high-cost, sophisticated policy (e.g., complex vetting) to reduce future uncertainty, or adopt a low-cost heuristic that may yield lower ongoing utility.

This model draws on the framework of Resource Rationality, treating the governance strategy itself as an optimization target.

## The Model Architecture

Modeling how you repeatedly choose which information sources to check on social media. Each "arm" $k$ represents a different source—maybe a specific Twitter account, a subreddit, a news outlet, or a topic feed. The challenge is that you have limited attention and can only check a few sources at a time, while all sources continue evolving in the background.

## State Transition: The Information Landscape Keeps Moving

The formula $y'_k = \eta y_k + \epsilon_k$ describes how the **true information quality** of source $k$ evolves when you're not actively monitoring it. This captures something fundamental about social media: the feed never stops, and relevance constantly shifts.

The parameter $\eta$ (with $0 < \eta < 1$) creates **mean reversion** in information quality. If an account has been posting exceptionally interesting content lately, that hot streak probably won't last forever—quality tends to drift back toward its average baseline. Similarly, if a news source has been slow recently, it's likely to pick up again. This reflects the natural ebb and flow of content production. The noise term $\epsilon_k \sim Normal(0, \sigma^2)$ captures unpredictable changes in source quality. Maybe a Twitter account you follow shifts focus unexpectedly, an algorithm update changes what appears in a subreddit, or breaking news suddenly makes a previously quiet topic extremely relevant. These shocks happen continuously across all your potential information sources.

The crucial insight here is that this evolution happens for _all_ sources simultaneously, whether you're paying attention to them or not. While you're scrolling through one feed, every other source is accumulating new posts, updating with fresh content, and potentially becoming more or less valuable. This is why we call it "restless"—the information environment doesn't pause while you're looking elsewhere.

## The Observation Process

When you select action $a = \pi(b)$ based on your current beliefs about which sources are valuable, you observe $z_a = y'_a$, which becomes your utility $u(a)$. In practical terms, this means you decide to check a particular source—say, opening a news app or visiting a specific subreddit—and you experience the actual information quality. Maybe you find three highly relevant articles and feel your time was well-spent, or maybe you encounter mostly noise and feel you wasted precious attention.

## POMDP: Why Partial Observability Matters for Social Media

To model this realistically, you need to restrict the standard MDP. Set it up so the agent can only engage with one source at a time. While it’s focused there, the other sources should keep changing in the background, completely hidden from view. You also need to cap the agent's memory, so it can't perfectly recall the history of every source and has to rely on imperfect estimates instead.

The **POMDP structure** formalizes this partial observability by forcing you to maintain **beliefs** $b = {\mu_k, \sigma_k}$ about each source rather than knowing their true current quality. These beliefs represent your mental model: "I think this news source is probably pretty good right now (high $\mu_k$) and I'm fairly confident about that (low $\sigma_k$)" versus "I have no idea what's happening in that subreddit anymore (high $\sigma_k$) because I haven't checked it in weeks."

## The Belief Update: How Your Mental Model Evolves

This is where the cognitive architecture of information seeking becomes explicit. The update rules reveal two fundamentally different processes happening in your mind:

**For sources you didn't check** (the accounts or feeds you ignored this round), you have $\mu'_k = \mu_k$ and $\sigma'_k = \sigma_k + \sigma$. Your best guess about the information quality stays the same, but your uncertainty _increases_ by $\sigma$. This captures something you've probably experienced intuitively: the longer you go without checking a source, the less confident you become about what you'll find there. That Twitter account you haven't visited in a month? Who knows what they've been posting lately. That news site you used to check daily but haven't opened in two weeks? It might have great new coverage or might have shifted focus entirely.

This growing uncertainty isn't just psychological—it reflects the genuine information decay happening in your mental model. While you weren't looking, those $\epsilon_k$ shocks kept hitting in the background, the source kept evolving, and your knowledge became progressively more stale. The model formalizes what your project materials call "cognitive overload": you literally cannot maintain accurate beliefs about all possible information sources simultaneously. Uncertainty accumulates wherever you're not directing attention, creating mounting pressure to check back in before your knowledge becomes completely obsolete.

**For the source you actually checked** (the feed you opened and scrolled through), you reset completely: $\mu'_a = z_a$ (your belief jumps to match what you just experienced) and $\sigma'_a = \sigma$ (uncertainty drops back to just the baseline measurement noise). This is full belief updating conditional on attention allocation. If you open Reddit and find fascinating discussions, your mental model immediately updates: "This source is valuable right now." Your confidence also refreshes because you have recent firsthand experience.

## Connecting to Resource Rationality and Information Seeking

Notice how this model naturally embeds the cognitive constraints your project emphasizes. You face a sharpened exploration-exploitation tradeoff: should you keep checking the sources you know are currently good (exploitation), or should you sample neglected sources before your knowledge about them decays completely (exploration)? But exploration is genuinely costly here—it means spending your limited attention budget on potentially low-value sources just to update your beliefs, forgoing the guaranteed value from sources you know are currently delivering.

The growing uncertainty for unchecked sources ($\sigma'_k = \sigma_k + \sigma$) directly represents the cognitive cost of maintaining stale beliefs about the information landscape. As sources drift and your knowledge decays, the computational burden of making good information-seeking decisions increases because you're acting on increasingly outdated mental models. You might check a source expecting one thing based on week-old memories, only to find it's completely changed character. This creates exactly the decision fatigue and satisficing behavior your literature review documents—eventually, the uncertainty becomes so overwhelming that people fall back on simple heuristics like "just check the same three apps every time" rather than optimizing across their full information ecology.

The restless dynamics also capture something distinctive about social media that makes it particularly demanding: the **volatility** of information quality. A political news account might be essential during election week but mostly noise during quiet periods. A sports subreddit explodes with valuable content during playoffs but goes dormant in the off-season. Unlike more stable information sources, social media sources exhibit high-frequency fluctuations in relevance, which means uncertainty accumulates rapidly if you look away. This creates chronic exploration pressure and prevents you from ever settling into a truly stable routine.

## The Policy Selection Problem in Information Seeking

The policy $\pi(b)$ must solve: given my current beliefs about all my information sources, which one should I check right now? This requires balancing immediate expected value $\mathbb{E}[z_a | \mu_a, \sigma_a]$ (checking sources I think are currently good) against information value (reducing uncertainty about neglected sources) and the opportunity cost of letting other sources drift unmonitored while I'm reading this one.

Optimal policies often follow index rules like Gittins indices or upper confidence bounds, which effectively compute a "bonus" for uncertain sources—you should check them not just because they might be valuable, but because checking them reduces your uncertainty and improves future decisions. But here's where your $C(\pi)$ cost function from the resource-rational framework becomes critical: computing these optimal indices exactly is itself cognitively expensive. It requires maintaining and updating beliefs about dozens of sources, performing probability calculations, and solving dynamic programming problems in your head.

In practice, people adopt simpler heuristics: check the same sources habitually, follow social signals about what's trending, or use algorithmic feeds that do the selection for you. The model predicts this isn't cognitive failure—it's resource-rational adaptation to an impossibly complex information-seeking problem where the computational costs of optimization exceed the benefits.

Does this reframing help clarify how the formal POMDP machinery applies to your social media information-seeking project?