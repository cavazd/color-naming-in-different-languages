$( document ).ready(function() {
	let navBarStr = "";
	
	navBarStr += '<nav class="navbar navbar-expand-lg navbar-light bg-light">';
	navBarStr += '  <a class="navbar-brand" href="index.html">ManyLanguagesManyColors</a>';
	navBarStr += '  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">';
	navBarStr += '    <span class="navbar-toggler-icon"></span>';
	navBarStr += '  </button>';

	navBarStr += '  <div class="collapse navbar-collapse" id="navbarSupportedContent">';
 	navBarStr += '   <ul class="navbar-nav mr-auto">';
	navBarStr += '      <li class="nav-item active">';
 	navBarStr += '       <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>';
	navBarStr += '      </li>';
	navBarStr += '      <li class="nav-item">';
	navBarStr += '        <a class="nav-link" href="http://labinthewild.org/studies/color_perception/">Take the Survey</a>';
	navBarStr += '      </li>';
	navBarStr += '      <li class="nav-item dropdown">';
	navBarStr += '        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
	navBarStr += '         Visualizations';
	navBarStr += '        </a>';
	navBarStr += '        <div class="dropdown-menu" aria-labelledby="navbarDropdown">';
	navBarStr += '          <a class="dropdown-item" href="vis/color_compare.html">Color Comparisons</a>';
	navBarStr += '          <a class="dropdown-item" href="vis/stacked-spectrum.html">Hue Color Comparisons (more languages)</a>';
	navBarStr += '          <a class="dropdown-item" href="vis/full_color_maps.html)">Color Map</a>';
	navBarStr += '          <a class="dropdown-item" href="vis/translation.html)">Korean-English Translation Comparison</a>';
	navBarStr += '          <a class="dropdown-item" href="vis/viridis.html)">Korean-English Viridis Color Spectrum</a>';
	navBarStr += '        </div>';
	navBarStr += '      </li>';
	navBarStr += '      <li class="nav-item">';
	navBarStr += '        <a class="nav-link" href="https://github.com/uwdata/color-naming-in-different-languages/">Dataset</a>';
	navBarStr += '      </li>';
	navBarStr += '    </ul>';
	navBarStr += '  </div>';
	navBarStr += '</nav>';
	
	$("body").prepend(navBarStr);
	
});
