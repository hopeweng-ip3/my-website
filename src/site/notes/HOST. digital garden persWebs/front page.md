---
{"dg-publish":true,"permalink":"/host-digital-garden-pers-webs/front-page/","title":"The Garden is A View","tags":["gardenEntry"]}
---

<h1 class="homepage-header">Signals and Systems</h1>

<div class="homepage-grid">

    <div class="hp-image-col">
        ![we are in Hawaii_9_Original.jpg|900](/img/user/HOST.%20digital%20garden%20persWebs/Repo/we%20are%20in%20Hawaii_9_Original.jpg)

        <p class="hp-caption">
        Kahana Bay⁩, Hawaiʻi, 
        <br>Shot on March 12, 2022
        <br>97 mm, ƒ4, 1/4000 s
        </p>
    </div>

    <div class="hp-text-col">
        We often believe that to find our path, we must look forward—strategizing our next move with precision. But sometimes the most clarifying direction comes from examining what we're already trying to heal.

        This website is organized by connection. Rather than a chronology for finished articles, it's a special venue for *a network of evolving notes*–ideas that get tended, expanded, and linked to one another as understanding deepens. You navigate by following threads between related concepts; the graph view reveals hidden patterns. Nothing here claims to be final; everything remains in conversation with old dying emergence and new grown proficiency.

        Allen Weng is a research scientist exploring mathematical psychology and human-centered computing, focusing on the impacts of technology and [[HOST. digital garden persWebs/Project/Communication Attributes paper_2025\|digital media]]. His work examines how algorithmic systems shape perception and choice, and how we might design technologies that preserve dignity rather than diminish it. 

        This garden documents how he picks up signals and seeks out systems—a home for [intentional storytelling](https://mp.weixin.qq.com/s/3MZtjQbdCWXT13ZQCNZ5jg) and [[HOST. digital garden persWebs/Garden/Personal History Statement, PhD\|centering overlooked voices]]. Not as answers, but as an invitation to ask dangerous questions without knowing where they lead.

        Join in the slower work of greater clarity: less accumulation, more humility.
    </div>

</div>


<style>
/* --- Homepage Layout & Padding --- */
body .content {
    max-width: 1100px !important;
    margin: 0 auto !important;
    padding: 100px 40px !important; /* Constrained padding kept constant */
}

/* --- Alignment Logic --- */
.homepage-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    align-items: flex-start;
}

.hp-image-col {
    /* CHANGED: Now takes 41% of width instead of fixed 300px */
    flex: 0 0 41%; 
    max-width: 41%;
}

/* Force image to fill the new wider column */
.hp-image-col img {
    width: 100% !important;
    height: auto;
    object-fit: cover;
}

.hp-text-col {
    flex: 1;
    min-width: 300px; /* Prevents text from getting too squished */
}

/* --- Dynamic Header Alignment --- */
/* This aligns the header with the text column using: Image Width (41%) + Gap (40px) */
.homepage-header {
    margin-left: calc(41% + 40px) !important; 
    margin-bottom: 20px !important;
}

.hp-caption {
    margin-top: 8px;
    font-style: italic;
    color: #888;
    font-size: 0.85em;
    line-height: 1.3;
}

/* --- Mobile Fix --- */
@media (max-width: 800px) {
    .homepage-header {
        margin-left: 0 !important; /* Reset alignment on mobile */
    }
    
    .hp-image-col, .hp-text-col {
        flex: 100%;
        max-width: 100%;
    }

    body .content {
        padding: 80px 20px !important;
    }
}
</style>