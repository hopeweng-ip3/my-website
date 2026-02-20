---
{"dg-publish":true,"permalink":"/host-digital-garden-pers-webs/front-page/","title":"The Garden is A View","tags":["gardenEntry"]}
---

<h1 class="homepage-header">Signals and Systems</h1>

<div style="display: flex; flex-wrap: wrap; gap: 40px; align-items: flex-start;">

<div style="flex: 0 0 38.2%; width: 38.2%;">

![we are in Hawaii_9_Original.jpg](/img/user/HOST.%20digital%20garden%20persWebs/Repo/we%20are%20in%20Hawaii_9_Original.jpg)

<p style="margin-top: 0px; font-style: italic; color: #888; font-size: 0.85em; line-height: 1.3;">
Kahana Bay⁩, Hawaiʻi, 
<br>Shot on March 12, 2022
<br>97 mm, ƒ4, 1/4000 s
</p>
</div>

<div style="flex: 1; min-width: 300px;">

Sometimes the most clarifying direction comes not from looking forward, but from examining what we’re already trying to heal.

A digital garden organizes itself by [connectivity](https://maggieappleton.com/garden-history#1-topography-over-timelines) and [criticality](https://www.networkpages.nl/stopping-network-bottlenecks-before-they-stop-you), hosting *a network of evolving notes*—ideas that get [tended](https://publish.obsidian.md/myquantumwell/Knowledge+Management#Inheritance), [expanded](https://zettelkasten.de/introduction/#the-fixed-address-of-each-note), and [linked by directed edges](https://help.obsidian.md/plugins/backlinks) as knowledge deepens. These pages stay perpetually unfinished, echoing the process of their formation and life cycle. This practice signals a move toward internal completion of thoughts, enabling an intentional alternative to external stimulation.

Allen Weng studies [[HOST. digital garden persWebs/Project/Two-page Precis\|computational cognitive science]], focusing on the impacts of technology and [[HOST. digital garden persWebs/Project/Communication Attributes paper_2025\|digital media]]. His work models media consumption from a function space perspective to reach information-seeking goals. He actively studies [[HOST. digital garden persWebs/Garden/Linear Algebra\|mathematics]]. His thing is [[HOST. digital garden persWebs/Garden/Active Practice of Talking to Strangers\|committing to candid social interactions]] in daily lives.

Garden documents how he picks up signals and seeks out systems—a home for easy organizations of [[HOST. digital garden persWebs/Garden/Philosophy Works\|self-examination]], [[HOST. digital garden persWebs/Garden/news and special reports\|creative storytelling]], and [[HOST. digital garden persWebs/Garden/Personal History Statement, PhD\|centering overlooked voices]].

What signals are you noticing? What systems are you building to listen?

</div>
</div>

<style>
/* --- Homepage Layout & Padding --- */
body .content {
    max-width: 1100px !important;
    margin: 0 auto !important;
    padding: 100px 40px !important;
}

/* --- Dynamic Header Alignment --- */
/* Calculated to match the new image ratio: 
   36% (Image width) + 40px (Gap) 
*/

.homepage-header {
    margin-left: calc(38.2% + 40px) !important; 
    margin-bottom: 20px !important;
    font-size: 2.2em !important; /* Forces it to be a large title */
    line-height: 1.1;
    font-weight: 700;
}

/* --- Image Width Force --- */
/* Ensures the image fills the 36% container width */
div[style*="width: 38.2%"] img {
    width: 100% !important;
    height: auto;
}

/* --- Mobile Fix --- */
@media (max-width: 800px) {
    .homepage-header {
        margin-left: 0 !important;
    }
    
    /* Forces columns to stack on small screens */
    div[style*="display: flex"] > div {
        flex: 0 0 100% !important;
        width: 100% !important;
        min-width: 0 !important;
    }

    body .content {
        padding: 80px 20px !important;
    }
}
</style>

<script src="https://cdn.jsdelivr.net/npm/@microlink/vanilla@latest/dist/microlink.min.js"></script>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    // This finds any link with the class "link-preview" and turns it into a card
    microlink('.link-preview', {
      size: 'large',
      rounded: true
    });
  });
</script>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const footnoteLinks = document.querySelectorAll('.footnote-link');
    
    footnoteLinks.forEach(link => {
        // Find the ID of the footnote content (usually something like #fn-1)
        const id = link.getAttribute('href').substring(1);
        const footnoteContent = document.getElementById(id);
        
        if (footnoteContent) {
            // Take the text, remove the "back to text" arrow (↩)
            const text = footnoteContent.innerText.replace('↩', '').trim();
            // Set it as a 'title' attribute for a native browser tooltip
            link.setAttribute('title', text);
        }
    });
});
</script>

