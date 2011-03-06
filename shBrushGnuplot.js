/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/wiki/SyntaxHighlighter:Donate
 *
 * @version
 * 2.0.296 (March 01 2009)
 * 
 * @copyright
 * Copyright (C) 2004-2009 Alex Gorbatchev.
 * Copyright (C) 2010 Hiroyuki Tanaka
 *
 * @license
 * This file is part of SyntaxHighlighter.
 * 
 * SyntaxHighlighter is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * SyntaxHighlighter is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with SyntaxHighlighter.  If not, see <http://www.gnu.org/licenses/>.
 * 
 * 
 * Very simple Latex brush
 * http://www.jorgemarsal.com/blog/
 */
;(function()
{
  // CommonJS
  typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

  function Brush()
  {
    var statements = 'cd call clear exit set unset plot splot help ' +
                  'load pause quit fit rep[lot] if ' +
                  'FIT_LIMIT FIT_MAXITER FIT_START_LAMBDA ' +
                  'FIT_LAMBDA_FACTOR FIT_LOG FIT_SCRIPT ' +
                  'print pwd reread reset save show test ! functions var';

    var types = 'u using t tit title notit notitle w wi with steps fs fsteps ' +
                  'l li lines lp linespoints via xdata timefmt grid noytics ' +
                  'ytics logscale time notime mxtics nomxtics style ' +
                  'mcbtics nologscale axes x1y2 unique acs acsplines ' +
                  'size origin multiplot xtics xr xrange yr yrange ' +
                  'square nosquare ratio noratio binary matrix index every ' +
                  'thru sm smooth all angles degrees radians arrow noarrow ' +
                  'autoscale noautoscale arrowstyle le vs x y z ' +
                  'zcb linear  cubicspline  bspline order level levels auto ' +
                  'dics discrete incr incremental from to head nohead ' +
                  'graph base both nosurface table out output data bar ' +
                  'border noborder boxwidth clabel noclabel clip noclip ' +
                  'cntrp cntrparam contour nocontour dgrid3d nodgrid3d dummy ' +
                  'encoding format function nogrid hidden hidden3d ' +
                  'nohidden nohidden3d isosample isosamples key nokey ' +
                  'historysize nohistorysize defaults offset nooffset ' +
                  'trianglepattern undefined noundefined altdiagonal ' +
                  'bentover noaltdiagonal nobentover left right top ' +
                  'bottom outside below samplen spacing width height box ' +
                  'nobox linestyle ls linetype lt linewidth lw Left Right ' +
                  'autotitles noautotitles enhanced noenhanced label ' +
                  'nolabel nolog missing center font locale ' +
                  'mapping margin bmargin lmargin rmargin tmargin spherical ' +
                  'cylindrical cartesian nolinestyle ' +
                  'pointtype pt pointsize ps mouse nomouse nooffsets ' +
                  'candlesticks financebars vector ' +
                  'term terminal linux aed767 aed512 gpic regis tek410x ' +
                  'tek40 vttek kc-tek40xx km-tek40xx selanar bitgraph xlib ' +
                  'x11 X11 aifm cgm dumb fig gif small large ' +
                  'nofontlist winword6 corel dxf emf hpgl transparent ' +
                  'hp2648 hp500c hp2623a pcl5 ' +
                  'hpljii hpdj hppj imagen mif pbm png svg postscript ' +
                  'enhanced_postscript qms tgif tkcanvas ' +
                  'epson-180dpi epson-60dpi epson-lx800 nec-cp6 okidata ' +
                  'starc tandy-60dpi latex emtex pslatex pstex epslatex ' +
                  'eepic tpic pstricks texdraw mf metafont mpost mp ' +
                  'timestamp notimestamp variables version x2data y2data ' +
                  'ydata zdata reverse writeback noreverse nowriteback ' +
                  'axis mirror autofreq nomirror rotate norotate ' +
                  'update nomultiplot mytics nomytics mztics ' +
                  'nomztics mx2tics nomx2tics my2tics nomy2tics offsets ' +
                  'para parametric nopara noparametric ' +
                  'polar nopolar zrange x2range y2range rrange ' +
                  'cbrange trange urange vrange sample samples bezier ' +
                  'boxerrorbars boxes bargraph bars boxxy boxxyerrorbars ' +
                  'csplines dots histeps impulses line linesp ' +
                  'points poiinttype sbezier splines ' +
                  'onal vectors xerr xerrorbars xyerr xyerrorbars ' +
                  'yerr yerrorbars errorb ' +
                  'errorbars surface filledcurve filledcurves pm3d ' +
                  'x1 x2 y1 y2 xy closed at pi front errorlines xerrorlines ' +
                  'yerrorlines xyerrorlines tics ticslevel ticscale ' +
                  'view xdtics noxdtics ydtics noydtics ' +
                  'zdtics nozdtics x2dtics nox2dtics y2dtics noy2dtics ' +
                  'xlab xlabel ylab ylabel zlab zlabel cblab cblabel ' +
                  'x2label y2label xmtics noxmtics ymtics noymtics ' +
                  'zmtics nozmtics x2mtics nox2mtics y2mtics noy2mtics ' +
                  'cbdtics nocbdtics cbmtics nocbmtics cbtics nocbtics ' +
                  'noxtics ztics noztics x2tics nox2tics ' +
                  'y2tics noy2tics zero nozero zeroaxis nozeroaxis ' +
                  'xzeroaxis noxzeroaxis yzeroaxis noyzeroaxis x2zeroaxis ' +
                  'nox2zeroaxis y2zeroaxis noy2zeroaxis one two fill ' +
                  'empty solid pattern default scansautomatic flush b begin ' +
                  'noftriangles implicit mo palette positive negative ' +
                  'ps_allcF nops_allcF maxcolors push fontfile pop ' +
                  'rgbformulae defined file color model gradient colornames ' +
                  'RGB HSV CMY YIQ XYZ colorbox vertical horizontal user ' +
                  'bdefault loadpath fontpath decimalsign in';

    var functions = 'abs acos acosh arg asin asinh atan atanh atan2 ' +
                  'besj0 besj1 besy0 besy1 ceil column cos cosh erf erfc ' +
                  'exp floor gamma ibeta inverf igamma imag invnorm int ' +
                  'lgamma log log10 norm rand real sgn sin sinh sqrt tan ' +
                  'lambertw tanh valid tm_hour tm_mday tm_min tm_mon tm_sec ' +
                  'tm_wday tm_yday tm_year';

    this.regexList = [
      { regex: SyntaxHighlighter.regexLib.singleLinePerlComments, css: 'comments' },
      { regex: /\".*\"/gm, css: 'string' },
      { regex: new RegExp(this.getKeywords(types), 'gm'), css: 'variable' },
      { regex: new RegExp(this.getKeywords(statements), 'gm'), css: 'keyword' },
      { regex: new RegExp(this.getKeywords(functions), 'gm'), css: 'functions bold' }
    ];
  }

  Brush.prototype  = new SyntaxHighlighter.Highlighter();
  Brush.aliases  = ['gnuplot'];

  SyntaxHighlighter.brushes.gnuplot = Brush;

  // CommonJS
  typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

