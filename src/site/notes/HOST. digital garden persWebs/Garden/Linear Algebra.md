---
{"dg-publish":true,"permalink":"/host-digital-garden-pers-webs/garden/linear-algebra/","title":"Notes on Linear Maps and Linear Operators"}
---


<div class="proposition">
<p><span id="prp:unnamed-chunk-159" class="proposition"><strong>Proposition.  </strong></span>Let <span class="math inline">\(f,g: U \to V\)</span> be linear maps and <span class="math inline">\(\mu,\lambda \in \ff\)</span>. Let <span class="math inline">\(\mathcal{B}\)</span> be a basis of <em>U</em> and <span class="math inline">\(\mathcal{C}\)</span> a basis of <em>V</em>.</p>
<ul>
<li><span class="math inline">\([\lambda f + \mu g] ^ {\mathcal{B}} _ {\mathcal{C}} = \lambda [f] ^ {\mathcal{B}} _ {\mathcal{C}} + \mu [g]^ {\mathcal{B}} _ {\mathcal{C}}\)</span>.</li>
<li>If <em>f</em> is invertible then <span class="math inline">\([f^{-1}]^ {\mathcal{C}} _ {\mathcal{B}} = ( [f]^ {\mathcal{B}} _ {\mathcal{C}} )^{-1}\)</span>.</li>
</ul>
</div>
<div class="proof">
<p> <span class="proof"><em>Proof. </em></span> </p>
<ul>
<li>Let <span class="math inline">\(\mathcal{B}\)</span> be <span class="math inline">\(\mathbf{b} _1,\ldots, \mathbf{b} _n\)</span>. This follows because the <em>j</em>th column of <span class="math inline">\([ \lambda f + \mu g]_ {\mathcal{C}} ^ {\mathcal{B}}\)</span> is <span class="math inline">\([ (\lambda f+\mu g)( \mathbf{b}_j]_ {\mathcal{C}} = [ \lambda f( \mathbf{b} _j) + \mu g( \mathbf{b} _j)]_ {\mathcal{C}} = \lambda [f( \mathbf{b} _j) ]_ {\mathcal{C}} + \mu [g( \mathbf{b} _j)]_ {\mathcal{C}}\)</span>, which is the same as the <em>j</em>th column of <span class="math inline">\(\lambda [f] ^ {\mathcal{B}} _ {\mathcal{C}} + \mu [g] ^ {\mathcal{B}} _ {\mathcal{C}}\)</span>.</li>
<li>By the previous proposition, <span class="math inline">\([\id_W] ^ {\mathcal{C}} _ {\mathcal{C}}= [f \circ f^{-1}]^ {\mathcal{C}} _ {\mathcal{C}} = [f]^ {\mathcal{B}} _ {\mathcal{C}} [f^{-1}] ^ {\mathcal{C}} _ {\mathcal{B}}\)</span>. But <span class="math inline">\([\id_W] ^ {\mathcal{C}} _ {\mathcal{C}} =I_n\)</span>, where <span class="math inline">\(n = \dim W\)</span>. So <span class="math inline">\([f] ^ {\mathcal{B}} _ {\mathcal{C}} [f^{-1}] ^ {\mathcal{C}} _ {\mathcal{B}}= I_n\)</span>, which gives the result we want.</li>
</ul>
</div>