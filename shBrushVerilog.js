/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 * Copyright (C) 2010 Hiroyuki Tanaka
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
  // CommonJS
  typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

  function Brush()
  {
    var statement =  'always and assign automatic buf ' +
            'bufif0 bufif1 cell cmos ' +
            'config deassign defparam design ' +
            'disable edge endconfig ' +
            'endfunction endgenerate endmodule ' +
            'endprimitive endspecify endtable endtask ' +
            'event force function ' +
            'generate genvar highz0 highz1 ifnone ' +
            'incdir include initial inout input ' +
            'instance integer large liblist ' +
            'library localparam macromodule medium ' +
            'module nand negedge nmos nor ' +
            'noshowcancelled not notif0 notif1 or ' +
            'output parameter pmos posedge primitive ' +
            'pull0 pull1 pulldown pullup ' +
            'pulsestyle_onevent pulsestyle_ondetect ' +
            'rcmos real realtime reg release ' +
            'rnmos rpmos rtran rtranif0 rtranif1 ' +
            'scalared showcancelled signed small ' +
            'specify specparam strong0 strong1 ' +
            'supply0 supply1 table task time tran ' +
            'tranif0 tranif1 tri tri0 tri1 triand ' +
            'trior trireg unsigned use vectored wait ' +
            'wand weak0 weak1 wire wor xnor xor';

    var keywords = 'begin end fork join if ' +
            'if else case casex casez dafault endcase ' +
            'forever repeat while for';
          
    var global_keys = '(\`define)|(\`celldefine)|(\`default_nettype)|' +
      '(\`define)|(\`else)|(\`elsif)|(\`endcelldefine)|(\`endif)|(\`ifdef)|' +
      '(\`ifndef)|(\`include)|(\`line)|(\`nounconnected_drive)|(\`resetall)|' +
      '(\`timescale)|(\`unconnected_drive)|(\`undef")';

    this.regexList = [
      { regex: SyntaxHighlighter.regexLib.singleLineCComments, css: 'comments' },      // one line comments
      { regex: SyntaxHighlighter.regexLib.multiLineCComments, css: 'comments' },      // multiline comments
      { regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string' },      // strings
      { regex: SyntaxHighlighter.regexLib.singleQuotedString, css: 'string' },      // strings
      { regex: /(\d+)\'[sS]?[bB][0-1_xXzZ\?]+/gm, css: 'variable' },
      { regex: /(\d+)\'[sS]?[oO][0-7_xXzZ\?]+/gm, css: 'variable' },
      { regex: /(\d+)\'[sS]?[dD][0-9_xXzZ\?]+/gm, css: 'variable' },
      { regex: /(\d+)\'[sS]?[hH][0-9a-fA-F_xXzZ\?]+/gm, css: 'variable' },
      { regex: new RegExp(this.getKeywords(statement), 'gm'), css: 'variable' },
      { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' },
      { regex: new RegExp(global_keys, 'gm'), css: 'color2' }
      ];
  };

  Brush.prototype  = new SyntaxHighlighter.Highlighter();
  Brush.aliases  = ['verilog'];

  SyntaxHighlighter.brushes.verilog = Brush;

  // CommonJS
  typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
