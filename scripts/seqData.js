/*This file is used to store the text from the .gb files in a form that's readable by other scripts*/
var sequences = {};
sequences.seq_2x_Res_6x_CoA = {};
sequences.seq_2x_Res_6x_CoA.varName = "seq_2x_Res_6x_CoA";
sequences.seq_2x_Res_6x_CoA.name = "(2x Res 6x CoA)";
sequences.seq_2x_Res_6x_CoA.seqType = "both";
sequences.seq_2x_Res_6x_CoA.comp = true;
sequences.seq_2x_Res_6x_CoA.data = `LOCUS       (2x_Res,_6x_CoA)        3521 bp ds-DNA     circular     14-JUL-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     primer_bind         1833..1852
                         /label="Amp-R"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     misc_binding        2668..2690
                         /label="LacO"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Terminator          107..175
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    3089..3097
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    3078..3086
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    3034..3042
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Scar                2923..2930
                         /label="BioBrick Scar"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     misc_binding        2967..2989
                         /label="LacO"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     gBlock              2501..2625
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     misc_binding        2369..2391
                         /label="LacO"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site    complement(2702..2710)
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    3100..3108
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     HIV-RT Binding Site 2744..2853
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Zinc Finger Site    complement(3410..3418)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Promoter            2931..2965
                         /label="J23100 Anderson Promoter"
                         /ApEinfo_revcolor=#d59687
                         /ApEinfo_fwdcolor=#d59687
     Zinc Finger Site    complement(3421..3429)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     primer_bind         complement(531..550)
                         /label="pBR322ori-F"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     HIV-RT Binding Site join(3518..3521,1..106)
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Zinc Finger Site    complement(3465..3473)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    complement(3443..3451)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    2436..2444
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     Zinc Finger Site    complement(3509..3517)
                         /label="ZFc Site"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
     Backbone            197..2310
                         /label="Mutated pSB1A3"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    3122..3130
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     promoter            complement(2071..2175)
                         /label="AmpR promoter"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Zinc Finger Site    complement(3377..3385)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    2392..2400
                         /label="ZFc Site"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
     rep_origin          complement(451..1039)
                         /label="ori"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     gBlock              3187..3311
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    3023..3031
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    3045..3053
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    complement(3487..3495)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     gBlock              53..196
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Scar                3310..3317
                         /label="BioBrick Scar"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     terminator          2265..2308
                         /label="bacterial terminator"
                         /ApEinfo_revcolor=#ffef86
                         /ApEinfo_fwdcolor=#ffef86
     Zinc Finger Site    complement(2691..2699)
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     CDS                 complement(1210..2070)
                         /label="AmpR"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     Zinc Finger Site    2425..2433
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    2414..2422
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     Zinc Finger Site    3001..3009
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    complement(3498..3506)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    3012..3020
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    complement(3454..3462)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Promoter            3318..3352
                         /label="J23100 Anderson Promoter"
                         /ApEinfo_revcolor=#d59687
                         /ApEinfo_fwdcolor=#d59687
     Promoter            2333..2367
                         /label="J23100 Anderson Promoter"
                         /ApEinfo_revcolor=#d59687
                         /ApEinfo_fwdcolor=#d59687
     Terminator          3241..3309
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    complement(3399..3407)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     primer_bind         complement(280..297)
                         /label="L4440"
                         /ApEinfo_revcolor=#75c6a9
                         /ApEinfo_fwdcolor=#75c6a9
     Terminator          2555..2623
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    complement(3432..3440)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     primer_bind         2243..2261
                         /label="pBRforEco"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    complement(3388..3396)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    3056..3064
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    3067..3075
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Scar                2624..2631
                         /label="BioBrick Scar"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     Biobricking         2311..2332
                         /label="BioBrick Prefix "
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Terminator          2854..2922
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    3111..3119
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    2990..2998
                         /label="ZFc Site"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
     Promoter            2632..2666
                         /label="J23100 Anderson Promoter"
                         /ApEinfo_revcolor=#d59687
                         /ApEinfo_fwdcolor=#d59687
     Zinc Finger Site    complement(2724..2732)
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    complement(2735..2743)
                         /label="ZFc Site"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
     HIV-RT Binding Site 2445..2554
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     HIV-RT Binding Site 3131..3240
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Zinc Finger Site    complement(3476..3484)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Biobricking         176..196
                         /label="BioBrick Suffix"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site    2403..2411
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     misc_binding        3354..3376
                         /label="LacO"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site    complement(2713..2721)
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     misc_feature        1351..1351
                         /label="Point Mutation"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     gBlock              2800..2924
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
ORIGIN
        1 AAAACGTGGC GCCCGAACAG GGACGGATAG CTCAGTCGGT AGAGCATCAG ACTTTTAATC
       61 TGAGGGTCCA GGGTTCAAGT CCCTGTTCGG GCGCCACGTT TTTTTTatta gcagaaagtc
      121 aaaagcctcc gaccggaggc ttttgactaa aacttccctt ggggttatca ttgggtacta
      181 gtagcggccg ctgcagagtc cggcaaaaaa gggcaaggtg tcaccaccct gccctttttc
      241 tttaaaaccg aaaagattac ttcgcgttat gcaggcttcc tcgctcactg actcgctgcg
      301 ctcggtcgtt cggctgcggc gagcggtatc agctcactca aaggcggtaa tacggttatc
      361 cacagaatca ggggataacg caggaaagaa catgtgagca aaaggccagc aaaaggccag
      421 gaaccgtaaa aaggccgcgt tgctggcgtt tttccacagg ctccgccccc ctgacgagca
      481 tcacaaaaat cgacgctcaa gtcagaggtg gcgaaacccg acaggactat aaagatacca
      541 ggcgtttccc cctggaagct ccctcgtgcg ctctcctgtt ccgaccctgc cgcttaccgg
      601 atacctgtcc gcctttctcc cttcgggaag cgtggcgctt tctcatagct cacgctgtag
      661 gtatctcagt tcggtgtagg tcgttcgctc caagctgggc tgtgtgcacg aaccccccgt
      721 tcagcccgac cgctgcgcct tatccggtaa ctatcgtctt gagtccaacc cggtaagaca
      781 cgacttatcg ccactggcag cagccactgg taacaggatt agcagagcga ggtatgtagg
      841 cggtgctaca gagttcttga agtggtggcc taactacggc tacactagaa gaacagtatt
      901 tggtatctgc gctctgctga agccagttac cttcggaaaa agagttggta gctcttgatc
      961 cggcaaacaa accaccgctg gtagcggtgg tttttttgtt tgcaagcagc agattacgcg
     1021 cagaaaaaaa ggatctcaag aagatccttt gatcttttct acggggtctg acgctcagtg
     1081 gaacgaaaac tcacgttaag ggattttggt catgagatta tcaaaaagga tcttcaccta
     1141 gatcctttta aattaaaaat gaagttttaa atcaatctaa agtatatatg agtaaacttg
     1201 gtctgacagt taccaatgct taatcagtga ggcacctatc tcagcgatct gtctatttcg
     1261 ttcatccata gttgcctgac tccccgtcgt gtagataact acgatacggg agggcttacc
     1321 atctggcccc agtgctgcaa tgataccgcg cgacccacgc tcaccggctc cagatttatc
     1381 agcaataaac cagccagccg gaagggccga gcgcagaagt ggtcctgcaa ctttatccgc
     1441 ctccatccag tctattaatt gttgccggga agctagagta agtagttcgc cagttaatag
     1501 tttgcgcaac gttgttgcca ttgctacagg catcgtggtg tcacgctcgt cgtttggtat
     1561 ggcttcattc agctccggtt cccaacgatc aaggcgagtt acatgatccc ccatgttgtg
     1621 caaaaaagcg gttagctcct tcggtcctcc gatcgttgtc agaagtaagt tggccgcagt
     1681 gttatcactc atggttatgg cagcactgca taattctctt actgtcatgc catccgtaag
     1741 atgcttttct gtgactggtg agtactcaac caagtcattc tgagaatagt gtatgcggcg
     1801 accgagttgc tcttgcccgg cgtcaatacg ggataatacc gcgccacata gcagaacttt
     1861 aaaagtgctc atcattggaa aacgttcttc ggggcgaaaa ctctcaagga tcttaccgct
     1921 gttgagatcc agttcgatat aacccactcg tgcacccaac tgatcttcag catcttttac
     1981 tttcaccagc gtttctgggt gagcaaaaac aggaaggcaa aatgccgcaa aaaagggaat
     2041 aagggcgaca cggaaatgtt gaatactcat actcttcctt tttcaatatt attgaagcat
     2101 ttatcagggt tattgtctca tgagcggata catatttgaa tgtatttaga aaaataaaca
     2161 aataggggtt ccgcgcacat ttccccgaaa agtgccacct gacgtctaag aaaccattat
     2221 tatcatgaca ttaacctata aaaataggcg tatcacgagg cagaatttca gataaaaaaa
     2281 atccttagct ttcgctaagg atgatttctg gaattcgcgg ccgcttctag agTTGACGGC
     2341 TAGCTCAGTC CTAGGTACAG TGCTAGCTGG AATTGTGAGC GGATAACAAT TGAGGACGGC
     2401 ATGCGTGGGC GATGTGTGGA AAATGCGTGG GCGATGTGTG GAAAAAAAAA AACGTGGCGC
     2461 CCGAACAGGG ACGGATAGCT CAGTCGGTAG AGCATCAGAC TTTTAATCTG AGGGTCCAGG
     2521 GTTCAAGTCC CTGTTCGGGC GCCACGTTTT TTTTattagc agaaagtcaa aagcctccga
     2581 ccggaggctt ttgactaaaa cttcccttgg ggttatcatt gggtactaga gTTGACGGCT
     2641 AGCTCAGTCC TAGGTACAGT GCTAGCTGGA ATTGTGAGCG GATAACAATT TTTCCACACA
     2701 TCGCCCACGC ATTTTCCACA CATCGCCCAC GCATGCCGTC CTCAAAAAAA ACGTGGCGCC
     2761 CGAACAGGGA CGGATAGCTC AGTCGGTAGA GCATCAGACT TTTAATCTGA GGGTCCAGGG
     2821 TTCAAGTCCC TGTTCGGGCG CCACGTTTTT TTTattagca gaaagtcaaa agcctccgac
     2881 cggaggcttt tgactaaaac ttcccttggg gttatcattg ggtactagag TTGACGGCTA
     2941 GCTCAGTCCT AGGTACAGTG CTAGCTGGAA TTGTGAGCGG ATAACAATTG AGGACGGCAT
     3001 GTCGATGCCA TGCGGCTGGG ATGTCGATGC CATGCGGCTG GGATGTCGAT GCCATGCGGC
     3061 TGGGATGTCG ATGCCATGCG GCTGGGATGT CGATGCCATG CGGCTGGGAT GTCGATGCCA
     3121 TGCGGCTGGG AAAAAAAACG TGGCGCCCGA ACAGGGACGG ATAGCTCAGT CGGTAGAGCA
     3181 TCAGACTTTT AATCTGAGGG TCCAGGGTTC AAGTCCCTGT TCGGGCGCCA CGTTTTTTTT
     3241 attagcagaa agtcaaaagc ctccgaccgg aggcttttga ctaaaacttc ccttggggtt
     3301 atcattgggt actagagTTG ACGGCTAGCT CAGTCCTAGG TACAGTGCTA GCTGGAATTG
     3361 TGAGCGGATA ACAATTCCCA GCCGCATGGC ATCGACATCC CAGCCGCATG GCATCGACAT
     3421 CCCAGCCGCA TGGCATCGAC ATCCCAGCCG CATGGCATCG ACATCCCAGC CGCATGGCAT
     3481 CGACATCCCA GCCGCATGGC ATCGACATGC CGTCCTCAAA A
//`
        
sequences.seq_4x_Res_4x_CoA = {};
sequences.seq_4x_Res_4x_CoA.varName = "seq_4x_Res_4x_CoA";
sequences.seq_4x_Res_4x_CoA.name = "(4x Res 4x CoA)";
sequences.seq_4x_Res_4x_CoA.seqType = "both";
sequences.seq_4x_Res_4x_CoA.comp = true;
sequences.seq_4x_Res_4x_CoA.data = `LOCUS       (4x_Res,_4x_CoA)        3521 bp ds-DNA     circular     14-JUL-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     Zinc Finger Site    3089..3097
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    complement(2779..2787)
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     Zinc Finger Site    complement(3421..3429)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    3122..3130
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Terminator          2599..2667
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    2392..2400
                         /label="ZFc Site"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
     Zinc Finger Site    2447..2455
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    3133..3141
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Terminator          2942..3010
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     primer_bind         complement(280..297)
                         /label="L4440"
                         /ApEinfo_revcolor=#75c6a9
                         /ApEinfo_fwdcolor=#75c6a9
     CDS                 complement(1210..2070)
                         /label="AmpR"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     primer_bind         1833..1852
                         /label="Amp-R"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     Zinc Finger Site    3155..3163
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    complement(3454..3462)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Biobricking         2311..2332
                         /label="BioBrick Prefix "
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site    complement(2757..2765)
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     Zinc Finger Site    complement(3465..3473)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     misc_binding        3055..3077
                         /label="LacO"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Promoter            2333..2367
                         /label="J23100 Anderson Promoter"
                         /ApEinfo_revcolor=#d59687
                         /ApEinfo_fwdcolor=#d59687
     misc_binding        2712..2734
                         /label="LacO"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     gBlock              53..196
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Scar                2668..2675
                         /label="BioBrick Scar"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     Zinc Finger Site    3111..3119
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    complement(3498..3506)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     HIV-RT Binding Site join(3518..3521,1..106)
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Zinc Finger Site    2469..2477
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     primer_bind         complement(531..550)
                         /label="pBR322ori-F"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     Scar                3354..3361
                         /label="BioBrick Scar"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     Zinc Finger Site    complement(2768..2776)
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Promoter            3362..3396
                         /label="J23100 Anderson Promoter"
                         /ApEinfo_revcolor=#d59687
                         /ApEinfo_fwdcolor=#d59687
     Zinc Finger Site    complement(2735..2743)
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     Biobricking         176..196
                         /label="BioBrick Suffix"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site    2414..2422
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     Zinc Finger Site    3144..3152
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    complement(2812..2820)
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Promoter            3019..3053
                         /label="J23100 Anderson Promoter"
                         /ApEinfo_revcolor=#d59687
                         /ApEinfo_fwdcolor=#d59687
     Zinc Finger Site    complement(3509..3517)
                         /label="ZFc Site"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
     HIV-RT Binding Site 3175..3284
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Zinc Finger Site    complement(2790..2798)
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    3078..3086
                         /label="ZFc Site"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
     Terminator          3285..3353
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    complement(3432..3440)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    2403..2411
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     promoter            complement(2071..2175)
                         /label="AmpR promoter"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Terminator          107..175
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     misc_binding        3398..3420
                         /label="LacO"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Scar                3011..3018
                         /label="BioBrick Scar"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     gBlock              3231..3355
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    2436..2444
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     Zinc Finger Site    complement(3443..3451)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     primer_bind         2243..2261
                         /label="pBRforEco"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     rep_origin          complement(451..1039)
                         /label="ori"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     misc_feature        1351..1351
                         /label="Point Mutation"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     Zinc Finger Site    complement(2823..2831)
                         /label="ZFc Site"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
     Zinc Finger Site    complement(3476..3484)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     gBlock              2545..2669
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    2480..2488
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     Backbone            197..2310
                         /label="Mutated pSB1A3"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     terminator          2265..2308
                         /label="bacterial terminator"
                         /ApEinfo_revcolor=#ffef86
                         /ApEinfo_fwdcolor=#ffef86
     Zinc Finger Site    complement(2801..2809)
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     Promoter            2676..2710
                         /label="J23100 Anderson Promoter"
                         /ApEinfo_revcolor=#d59687
                         /ApEinfo_fwdcolor=#d59687
     Zinc Finger Site    complement(3487..3495)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    3100..3108
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     HIV-RT Binding Site 2489..2598
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     gBlock              2888..3012
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     HIV-RT Binding Site 2832..2941
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Zinc Finger Site    complement(2746..2754)
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    2425..2433
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     misc_binding        2369..2391
                         /label="LacO"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site    2458..2466
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     Zinc Finger Site    3166..3174
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
ORIGIN
        1 AAAACGTGGC GCCCGAACAG GGACGGATAG CTCAGTCGGT AGAGCATCAG ACTTTTAATC
       61 TGAGGGTCCA GGGTTCAAGT CCCTGTTCGG GCGCCACGTT TTTTTTatta gcagaaagtc
      121 aaaagcctcc gaccggaggc ttttgactaa aacttccctt ggggttatca ttgggtacta
      181 gtagcggccg ctgcagagtc cggcaaaaaa gggcaaggtg tcaccaccct gccctttttc
      241 tttaaaaccg aaaagattac ttcgcgttat gcaggcttcc tcgctcactg actcgctgcg
      301 ctcggtcgtt cggctgcggc gagcggtatc agctcactca aaggcggtaa tacggttatc
      361 cacagaatca ggggataacg caggaaagaa catgtgagca aaaggccagc aaaaggccag
      421 gaaccgtaaa aaggccgcgt tgctggcgtt tttccacagg ctccgccccc ctgacgagca
      481 tcacaaaaat cgacgctcaa gtcagaggtg gcgaaacccg acaggactat aaagatacca
      541 ggcgtttccc cctggaagct ccctcgtgcg ctctcctgtt ccgaccctgc cgcttaccgg
      601 atacctgtcc gcctttctcc cttcgggaag cgtggcgctt tctcatagct cacgctgtag
      661 gtatctcagt tcggtgtagg tcgttcgctc caagctgggc tgtgtgcacg aaccccccgt
      721 tcagcccgac cgctgcgcct tatccggtaa ctatcgtctt gagtccaacc cggtaagaca
      781 cgacttatcg ccactggcag cagccactgg taacaggatt agcagagcga ggtatgtagg
      841 cggtgctaca gagttcttga agtggtggcc taactacggc tacactagaa gaacagtatt
      901 tggtatctgc gctctgctga agccagttac cttcggaaaa agagttggta gctcttgatc
      961 cggcaaacaa accaccgctg gtagcggtgg tttttttgtt tgcaagcagc agattacgcg
     1021 cagaaaaaaa ggatctcaag aagatccttt gatcttttct acggggtctg acgctcagtg
     1081 gaacgaaaac tcacgttaag ggattttggt catgagatta tcaaaaagga tcttcaccta
     1141 gatcctttta aattaaaaat gaagttttaa atcaatctaa agtatatatg agtaaacttg
     1201 gtctgacagt taccaatgct taatcagtga ggcacctatc tcagcgatct gtctatttcg
     1261 ttcatccata gttgcctgac tccccgtcgt gtagataact acgatacggg agggcttacc
     1321 atctggcccc agtgctgcaa tgataccgcg cgacccacgc tcaccggctc cagatttatc
     1381 agcaataaac cagccagccg gaagggccga gcgcagaagt ggtcctgcaa ctttatccgc
     1441 ctccatccag tctattaatt gttgccggga agctagagta agtagttcgc cagttaatag
     1501 tttgcgcaac gttgttgcca ttgctacagg catcgtggtg tcacgctcgt cgtttggtat
     1561 ggcttcattc agctccggtt cccaacgatc aaggcgagtt acatgatccc ccatgttgtg
     1621 caaaaaagcg gttagctcct tcggtcctcc gatcgttgtc agaagtaagt tggccgcagt
     1681 gttatcactc atggttatgg cagcactgca taattctctt actgtcatgc catccgtaag
     1741 atgcttttct gtgactggtg agtactcaac caagtcattc tgagaatagt gtatgcggcg
     1801 accgagttgc tcttgcccgg cgtcaatacg ggataatacc gcgccacata gcagaacttt
     1861 aaaagtgctc atcattggaa aacgttcttc ggggcgaaaa ctctcaagga tcttaccgct
     1921 gttgagatcc agttcgatat aacccactcg tgcacccaac tgatcttcag catcttttac
     1981 tttcaccagc gtttctgggt gagcaaaaac aggaaggcaa aatgccgcaa aaaagggaat
     2041 aagggcgaca cggaaatgtt gaatactcat actcttcctt tttcaatatt attgaagcat
     2101 ttatcagggt tattgtctca tgagcggata catatttgaa tgtatttaga aaaataaaca
     2161 aataggggtt ccgcgcacat ttccccgaaa agtgccacct gacgtctaag aaaccattat
     2221 tatcatgaca ttaacctata aaaataggcg tatcacgagg cagaatttca gataaaaaaa
     2281 atccttagct ttcgctaagg atgatttctg gaattcgcgg ccgcttctag agTTGACGGC
     2341 TAGCTCAGTC CTAGGTACAG TGCTAGCTGG AATTGTGAGC GGATAACAAT TGAGGACGGC
     2401 ATGCGTGGGC GATGTGTGGA AAATGCGTGG GCGATGTGTG GAAAATGCGT GGGCGATGTG
     2461 TGGAAAATGC GTGGGCGATG TGTGGAAAAA AAAAAACGTG GCGCCCGAAC AGGGACGGAT
     2521 AGCTCAGTCG GTAGAGCATC AGACTTTTAA TCTGAGGGTC CAGGGTTCAA GTCCCTGTTC
     2581 GGGCGCCACG TTTTTTTTat tagcagaaag tcaaaagcct ccgaccggag gcttttgact
     2641 aaaacttccc ttggggttat cattgggtac tagagTTGAC GGCTAGCTCA GTCCTAGGTA
     2701 CAGTGCTAGC TGGAATTGTG AGCGGATAAC AATTTTTCCA CACATCGCCC ACGCATTTTC
     2761 CACACATCGC CCACGCATTT TCCACACATC GCCCACGCAT TTTCCACACA TCGCCCACGC
     2821 ATGCCGTCCT CAAAAAAAAC GTGGCGCCCG AACAGGGACG GATAGCTCAG TCGGTAGAGC
     2881 ATCAGACTTT TAATCTGAGG GTCCAGGGTT CAAGTCCCTG TTCGGGCGCC ACGTTTTTTT
     2941 Tattagcaga aagtcaaaag cctccgaccg gaggcttttg actaaaactt cccttggggt
     3001 tatcattggg tactagagTT GACGGCTAGC TCAGTCCTAG GTACAGTGCT AGCTGGAATT
     3061 GTGAGCGGAT AACAATTGAG GACGGCATGT CGATGCCATG CGGCTGGGAT GTCGATGCCA
     3121 TGCGGCTGGG ATGTCGATGC CATGCGGCTG GGATGTCGAT GCCATGCGGC TGGGAAAAAA
     3181 AACGTGGCGC CCGAACAGGG ACGGATAGCT CAGTCGGTAG AGCATCAGAC TTTTAATCTG
     3241 AGGGTCCAGG GTTCAAGTCC CTGTTCGGGC GCCACGTTTT TTTTattagc agaaagtcaa
     3301 aagcctccga ccggaggctt ttgactaaaa cttcccttgg ggttatcatt gggtactaga
     3361 gTTGACGGCT AGCTCAGTCC TAGGTACAGT GCTAGCTGGA ATTGTGAGCG GATAACAATT
     3421 CCCAGCCGCA TGGCATCGAC ATCCCAGCCG CATGGCATCG ACATCCCAGC CGCATGGCAT
     3481 CGACATCCCA GCCGCATGGC ATCGACATGC CGTCCTCAAA A
//`
        
sequences.seq_Addgene_109383_pSB1C3Lux = {};
sequences.seq_Addgene_109383_pSB1C3Lux.varName = "seq_Addgene_109383_pSB1C3Lux";
sequences.seq_Addgene_109383_pSB1C3Lux.name = "(Addgene 109383) pSB1C3-Lux";
sequences.seq_Addgene_109383_pSB1C3Lux.seqType = "both";
sequences.seq_Addgene_109383_pSB1C3Lux.comp = true;
sequences.seq_Addgene_109383_pSB1C3Lux.data = `LOCUS       (Addgene_#109383)_pSB1C 9707 bp ds-DNA     circular     25-OCT-2020
DEFINITION  .
KEYWORDS    "accession:addgene_109383_206254"                                  
SOURCE      synthetic DNA construct                                            
  ORGANISM  synthetic DNA construct                                            
FEATURES             Location/Qualifiers
     terminator      1..58
                     /label="his operon terminator"
                     /ApEinfo_revcolor=#d59687
                     /ApEinfo_fwdcolor=#d59687
     rep_origin      complement(253..841)
                     /label="ori"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     terminator      1024..1118
                     /label="lambda t0 terminator"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     promoter        2955..3239
                     /label="araBAD promoter"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     terminator      1982..2025
                     /label="bacterial terminator"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     misc_feature    2028..2049
                     /label="BioBrick prefix"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     CDS             complement(1139..1798)
                     /label="CmR"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
     primer_bind     complement(82..99)
                     /label="L4440"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     misc_feature    join(9687..9707,1..2049)
                     /label="pSB1C3 Backbone Region"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     source          1..9707
                     /label="source"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     primer_bind     1960..1978
                     /label="pBRforEco"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     CDS             complement(2050..2928)
                     /label="araC"
                     /ApEinfo_revcolor=#f8d3a9
                     /ApEinfo_fwdcolor=#f8d3a9
     primer_bind     complement(333..352)
                     /label="pBR322ori-F"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     primer_bind     3162..3181
                     /label="pBAD Forward"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     misc_feature    9687..9707
                     /label="BioBrick suffix"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_feature    9647..9650
                     /label="Overhang for end of pduD part"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer_bind     1713..1732
                     /label="CAT-R"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     primer          complement(2062..2093)
                     /label="pSB1C3 Reverse Primer"
                     /note="sequence: ACTGATCGTCTCTgttgtgaagaaaaagtgaatgatgtagccgtc"
                     /ApEinfo_revcolor=#b4abac
                     /ApEinfo_fwdcolor=#b4abac
     primer          9647..9670
                     /label="pSB1C3 Forward Primer"
                     /note="sequence: TATGATCGTCTCAgtcagaacagatgtttgccgatgc"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
ORIGIN
        1 tccggcaaaa aagggcaagg tgtcaccacc ctgccctttt tctttaaaac cgaaaagatt
       61 acttcgcgtt atgcaggctt cctcgctcac tgactcgctg cgctcggtcg ttcggctgcg
      121 gcgagcggta tcagctcact caaaggcggt aatacggtta tccacagaat caggggataa
      181 cgcaggaaag aacatgtgag caaaaggcca gcaaaaggcc aggaaccgta aaaaggccgc
      241 gttgctggcg tttttccaca ggctccgccc ccctgacgag catcacaaaa atcgacgctc
      301 aagtcagagg tggcgaaacc cgacaggact ataaagatac caggcgtttc cccctggaag
      361 ctccctcgtg cgctctcctg ttccgaccct gccgcttacc ggatacctgt ccgcctttct
      421 cccttcggga agcgtggcgc tttctcatag ctcacgctgt aggtatctca gttcggtgta
      481 ggtcgttcgc tccaagctgg gctgtgtgca cgaacccccc gttcagcccg accgctgcgc
      541 cttatccggt aactatcgtc ttgagtccaa cccggtaaga cacgacttat cgccactggc
      601 agcagccact ggtaacagga ttagcagagc gaggtatgta ggcggtgcta cagagttctt
      661 gaagtggtgg cctaactacg gctacactag aagaacagta tttggtatct gcgctctgct
      721 gaagccagtt accttcggaa aaagagttgg tagctcttga tccggcaaac aaaccaccgc
      781 tggtagcggt ggtttttttg tttgcaagca gcagattacg cgcagaaaaa aaggatctca
      841 agaagatcct ttgatctttt ctacggggtc tgacgctcag tggaacgaaa actcacgtta
      901 agggattttg gtcatgagat tatcaaaaag gatcttcacc tagatccttt taaattaaaa
      961 atgaagtttt aaatcaatct aaagtatata tgagtaaact tggtctgaca gctcgaggct
     1021 tggattctca ccaataaaaa acgcccggcg gcaaccgagc gttctgaaca aatccagatg
     1081 gagttctgag gtcattactg gatctatcaa caggagtcca agcgagctcg atatcaaatt
     1141 acgccccgcc ctgccactca tcgcagtact gttgtaattc attaagcatt ctgccgacat
     1201 ggaagccatc acaaacggca tgatgaacct gaatcgccag cggcatcagc accttgtcgc
     1261 cttgcgtata atatttgccc atggtgaaaa cgggggcgaa gaagttgtcc atattggcca
     1321 cgtttaaatc aaaactggtg aaactcaccc agggattggc tgagacgaaa aacatattct
     1381 caataaaccc tttagggaaa taggccaggt tttcaccgta acacgccaca tcttgcgaat
     1441 atatgtgtag aaactgccgg aaatcgtcgt ggtattcact ccagagcgat gaaaacgttt
     1501 cagtttgctc atggaaaacg gtgtaacaag ggtgaacact atcccatatc accagctcac
     1561 cgtctttcat tgccatacga aattccggat gagcattcat caggcgggca agaatgtgaa
     1621 taaaggccgg ataaaacttg tgcttatttt tctttacggt ctttaaaaag gccgtaatat
     1681 ccagctgaac ggtctggtta taggtacatt gagcaactga ctgaaatgcc tcaaaatgtt
     1741 ctttacgatg ccattgggat atatcaacgg tggtatatcc agtgattttt ttctccattt
     1801 tagcttcctt agctcctgaa aatctcgata actcaaaaaa tacgcccggt agtgatctta
     1861 tttcattatg gtgaaagttg gaacctctta cgtgcccgat caactcgagt gccacctgac
     1921 gtctaagaaa ccattattat catgacatta acctataaaa ataggcgtat cacgaggcag
     1981 aatttcagat aaaaaaaatc cttagctttc gctaaggatg atttctggaa ttcgcggccg
     2041 cttctagagt tatgacaact tgacggctac atcattcact ttttcttcac aaccggcacg
     2101 gaactcgctc gggctggccc cggtgcattt tttaaatacc cgcgagaaat agagttgatc
     2161 gtcaaaacca acattgcgac cgacggtggc gataggcatc cgggtggtgc tcaaaagcag
     2221 cttcgcctgg ctgatacgtt ggtcctcgcg ccagcttaag acgctaatcc ctaactgctg
     2281 gcggaaaaga tgtgacagac gcgacggcga caagcaaaca tgctgtgcga cgctggcgat
     2341 atcaaaattg ctgtctgcca ggtgatcgct gatgtactga caagcctcgc gtacccgatt
     2401 atccatcggt ggatggagcg actcgttaat cgcttccatg cgccgcagta acaattgctc
     2461 aagcagattt atcgccagca gctccgaata gcgcccttcc ccttgcccgg cgttaatgat
     2521 ttgcccaaac aggtcgctga aatgcggctg gtgcgcttca tccgggcgaa agaaccccgt
     2581 attggcaaat attgacggcc agttaagcca ttcatgccag taggcgcgcg gacgaaagta
     2641 aacccactgg tgataccatt cgcgagcctc cggatgacga ccgtagtgat gaatctctcc
     2701 tggcgggaac agcaaaatat cacccggtcg gcaaacaaat tctcgtccct gatttttcac
     2761 caccccctga ccgcgaatgg tgagattgag aatataacct ttcattccca gcggtcggtc
     2821 gataaaaaaa tcgagataac cgttggcctc aatcggcgtt aaacccgcca ccagatgggc
     2881 attaaacgag tatcccggca gcaggggatc attttgcgct tcagccatac ttttcatact
     2941 cccgccattc agagaagaaa ccaattgtcc atattgcatc agacattgcc gtcactgcgt
     3001 cttttactgg ctcttctcgc taaccaaacc ggtaaccccg cttattaaaa gcattctgta
     3061 acaaagcggg accaaagcca tgacaaaaac gcgtaacaaa agtgtctata atcacggcag
     3121 aaaagtccac attgattatt tgcacggcgt cacactttgc tatgccatag catttttatc
     3181 cataagatta gcggatccta cctgacgctt tttatcgcaa ctctctactg tttctccata
     3241 cccgtttttt tgggctagca gggaaaataa tgaataaatg tattccaatg ataattaatg
     3301 gaatgattca agattttgat aattatgcat ataaagaagt taaactaaat aatgataata
     3361 gagtaaaatt atctgtcatt actgaaagtt cagtttcaaa aacattaaat atcaaagata
     3421 gaattaatct aaatttaaat cagattgtga attttttata taccgttggt caacgatgga
     3481 aaagtgaaga atataatcgg cgacgaacct atatccgtga gttaaaaaca tatcttggtt
     3541 attctgatga aatggcaaga ttagaagcga attggattgc aatgttattg tgctctaaaa
     3601 gtgctttgta tgacattgtt aattatgatt tgggctctat acacgtatta gatgaatggc
     3661 ttccacgtgg tgattgctat gttaaagcac aaccgaaagg tgtttctgtt cacttgttag
     3721 ctggtaatgt tccattatca ggagtgacat ctattttgcg tgctatttta acaaaaaatg
     3781 agtgcattat taaaacttcg tcttcagatc cttttactgc aaacgcttta gtttccagtt
     3841 ttattgatgt taatgcagac catccaataa ccaaatcaat gtctgttatg tattggccgc
     3901 atgatgaaga tatgactcta tctcaaagaa taatgaatca tgccgacgtg gttattgctt
     3961 ggggtggaga cgaggcgatt aaatgggcgg taaaatattc accaccgcat gtcgatattc
     4021 tgaaatttgg accaaagaaa agcttaagta ttattgaagc tcctaaagat atagaagccg
     4081 cagcaatggg ggttgctcat gatatttgtt tctatgacca gcaagcctgc ttctctactc
     4141 aagacgttta ttatatagga gataatttac ctttattttt aaatgaactt gaaaaacagc
     4201 tagatcgata cgcgaaaatt ttaccaaaag gttcaaatag ttttgatgaa aaagcggcgt
     4261 ttactcttac tgaaaaagaa agtctatttg ctggatatga agtgagaaag ggagataagc
     4321 aagcttggtt aatagtcgta tcacctacaa atagctttgg aaatcaaccg ctatcacgaa
     4381 gtgtgtatgt tcatcaagta tctgatatta aagagataat tccttttgtt aataaaaata
     4441 gaacacaaac tgtttctatt tatccttggg aagcgtcatt aaaatatcga gataaattag
     4501 caagaagtgg agttgaaaga attgttgaat caggcatgaa taatattttc agagttggag
     4561 gggctcatga ttcattatct cctctccagt acctagttag gtttgtatcg catgagagac
     4621 catttaatta tacgacaaaa gatgttgcgg ttgaaatcga acaaacacgt tacttagagg
     4681 aagataagtt tttagttttt gtcccatagt taaaggaaat tatatgaaag atgaaagtgc
     4741 tttttttacg attgatcaca tcatcaagct tgataatggt cagtctatcc gagtttggga
     4801 aacactccct aaaaagaacg taccagagaa aaaacataca atacttattg cttcgggttt
     4861 tgctagaaga atggatcatt ttgcaggtct tgctgagtat ttatctacta acggttttca
     4921 tgtcattcgc tacgattctt tgcatcatgt tggattaagc agtggatgta taaatgaatt
     4981 tacgatgtcg attggaaaaa atagcctgct tacagtcgta gattggctta cagatcatgg
     5041 tgtcgaacga atagggctga ttgctgctag tttgtcagcg agaatcgcct atgaggtagt
     5101 aaataaaatt aaattatcat ttttaattac ggccgtaggt gtcgttaatc ttagagatac
     5161 attagaaaaa gcattggagt atgactattt gcaattacct atttcagagt taccagaaga
     5221 tcttgacttt gaaggtcata atttaggatc ggaggtcttt gttacagatt gctttaaaca
     5281 taattgggac acgttagact cgacacttaa tagtgttaaa ggattagcga ttccatttat
     5341 tgcttttact gcaaacgatg atagttgggt aaagcaaagt gaagttatag agctcattga
     5401 tagcattgaa tctagtaatt gtaagctcta ttcgctaatt ggaagttcac atgatcttgg
     5461 ggaaaatttg gttgtattaa gaaattttta tcaatcagtg acgaaggcag ccttagcatt
     5521 agatgatggt ttattggatt tagagataga cattattgaa cctcgatttg aggacgttac
     5581 aagtattact gttaaggagc gtagattaaa aaatgaaatt gaaaatgaat tattagaatt
     5641 ggcttaaata aacagaatca ccaaaaagga atagagtatg aagtttggaa atatttgttt
     5701 ttcgtatcaa ccaccaggtg aaactcataa gcaagtaatg gatcgctttg ttcggcttgg
     5761 tatcgcctca gaagaggtag ggtttgatac atattggacc ttagaacatc attttacaga
     5821 gtttggtctt acgggaaatt tatttgttgc tgcggctaac ctgttaggaa gaactaaaac
     5881 attaaatgtt ggcactatgg gggttgttat tccgacagca cacccagttc gacagttaga
     5941 agacgtttta ttattagatc aaatgtcgaa aggtcgtttt aattttggaa ccgttcgagg
     6001 gctataccat aaagattttc gagtatttgg tgttgatatg gaagagtctc gagcaattac
     6061 tcaaaatttc taccagatga taatggaaag cttacagaca ggaaccatta gctctgatag
     6121 tgattacatt caatttccta aggttgatgt atatcccaaa gtgtactcaa aaaatgtacc
     6181 aacctgtatg actgctgagt ccgcaagtac gacagaatgg ctagcaatac aagggctacc
     6241 aatggttctt agttggatta ttggtactaa tgaaaaaaaa gcacagatgg aactctataa
     6301 tgaaattgcg acagaatatg gtcatgatat atctaaaata gatcattgta tgacttatat
     6361 ttgttctgtt gatgatgatg cacaaaaggc gcaagatgtt tgtcgggagt ttctgaaaaa
     6421 ttggtatgac tcatatgtaa atgcgaccaa tatctttaat gatagcaatc aaactcgtgg
     6481 ttatgattat cataaaggtc aatggcgtga ttttgtttta caaggacata caaacaccaa
     6541 tcgacgtgtt gattatagca atggtattaa ccctgtaggc actcctgagc agtgtattga
     6601 aatcattcaa cgtgatattg atgcaacggg tattacaaac attacatgcg gatttgaagc
     6661 taatggaact gaagatgaaa taattgcttc catgcgacgc tttatgacac aagtcgctcc
     6721 tttcttaaaa gaacctaaat aaattactta tttgatacta gagataataa ggaacaagtt
     6781 atgaaatttg gattattttt tctaaacttt cagaaagatg gaataacatc tgaagaaacg
     6841 ttggataata tggtaaagac tgtcacgtta attgattcaa ctaaatatca ttttaatact
     6901 gcctttgtta atgaacatca cttttcaaaa aatggtattg ttggagcacc tattaccgca
     6961 gctggttttt tattagggtt aacaaataaa ttacatattg gttcattaaa tcaagtaatt
     7021 accacccatc accctgtacg tgtagcagaa gaagccagtt tattagatca aatgtcagag
     7081 ggacgcttca ttcttggttt tagtgactgc gaaagtgatt tcgaaatgga attttttaga
     7141 cgtcatatct catcaaggca acaacaattt gaagcatgct atgaaataat taatgacgca
     7201 ttaactacag gttattgtca tccccaaaac gacttttatg attttccaaa ggtttcaatt
     7261 aatccacact gttacagtga gaatggacct aagcaatatg tatccgctac atcaaaagaa
     7321 gtcgtcatgt gggcagcgaa aaaggcactg cctttaacat ttaagtggga ggataattta
     7381 gaaaccaaag aacgctatgc aattctatat aataaaacag cacaacaata tggtattgat
     7441 atttcggatg ttgatcatca attaactgta attgcgaact taaatgctga tagaagtacg
     7501 gctcaagaag aagtgagaga atacttaaaa gactatatca ctgaaactta ccctcaaatg
     7561 gacagagatg aaaaaattaa ctgcattatt gaagagaatg cagttgggtc tcatgatgac
     7621 tattatgaat cgacaaaatt agcagtggaa aaaacagggt ctaaaaatat tttattatcc
     7681 tttgaatcaa tgtccgatat taaagatgta aaagatatta ttgatatgtt gaaccaaaaa
     7741 atcgaaatga atttaccata ataaaattaa aggcaatttc tatattagat tgccttttta
     7801 aatttctgtt gatattaggt attactggag agggtatgac tgtccatact gaatataaaa
     7861 gaaatcaaat cattgctagt tcagaaattg atgatcttat ctttatgacg aaaccacaag
     7921 agtggtcatt tgaagagcaa aaagaaatac gggataaatt agttcgtgag gctttttatt
     7981 ttcactacaa tagaaatgaa gaatatagaa attattgtat caatcagcat gtgagtgata
     8041 atttacacac tattgatgaa atacccgtgt ttccaacatc tgtttttaaa tataagaaat
     8101 tacatactgt cacagccgag gacattgaaa attggtatac aagtagtgga actcgtggag
     8161 taaaaagtca tattgcacgt gatcgtctta gcattgaacg cttgcttggt tctgtcaact
     8221 tcggaatgaa atacgttgga gattggtttg agcatcaaat ggaattgata aatttaggac
     8281 cagatagatt caatacaaat aatatttggt ttaaatatgt catgagtttg gtcgagttac
     8341 tttatccgac tgaatttaca gttgataatg acaaaataga ttttgaaaaa acagtaaaac
     8401 atctatttag aattaagaat agtaaaaaag acatttgctt aattgggcca ccattttttg
     8461 tgtatctttt gtgccaatat atgaaagaaa acaatattga atttaaagga ggagatagag
     8521 tacatattat tactggtgga ggatggaaat ctaatcagaa tgactcttta gatcgtgctg
     8581 attttaatca attattaatg gatactttcc aactcgacaa gattaatcaa attagagata
     8641 cctttaatca agttgagctt aatacttgtt tttttgaaga tgaatttcaa agaaaacatg
     8701 ttccaccgtg ggtatatgct cgggctcttg atcctgaaac cttgaaaccc gtagcagatg
     8761 gtgagatcgg gttgttaagt tatatggacg cctcatcaac tgcttaccct gcttttattg
     8821 ttactgatga tatcggtatt gtaaaagaaa ttagagaacc agatccttac ccaggggtaa
     8881 ctgttgagat tgttcggcgc ttaaatacac gtgcgcaaaa aggatgcgcg ctctctatgg
     8941 ctaatgtcat acaaaagaat atcaaggatt aagttatgat tgttgatggt agagtttcaa
     9001 aaatagtatt agcgtcaata agaaataata tatataaggt atttattact gtaaattcac
     9061 caataaagtt catcgctgga caatttgtaa tggtcacgat taatgggaaa aaatgccctt
     9121 tttcaattgc gaattgcccg acaaaaaatt acgaaataga attgcatatt ggtagttcga
     9181 atagagactg ctcattggat attatcgaat attttgtcga tgctcttgtt gaggaagtcg
     9241 caattgagtt agatgctccc catggaaacg cttggttacg gtctgaaagt aataacccat
     9301 tgctattaat tgcgggaggt acaggtttat catatataaa tagcattcta acaaattgct
     9361 taaataggaa tatacctcaa gatatttatc tttactgggg agtaaaagac agttctcttt
     9421 tgtatgaaga tgaagagtta ctaaacttat cactaaacaa caaaaacttt cattatattc
     9481 ctgttattga agataaaagt gaagaatgga tagggagaaa aggcactgtt cttgatgctg
     9541 tcatggaaga ttttactgat cttacttatt ttgatattta tgtttgtgga cccttcatga
     9601 tggctaaaac agcaaaagaa aaattaattg aagagaaaaa agcaaagtca gaacagatgt
     9661 ttgccgatgc ttttgcatac gtataatact agtagcggcc gctgcag
//`
        
sequences.seq_4CL_Intro_gblock = {};
sequences.seq_4CL_Intro_gblock.varName = "seq_4CL_Intro_gblock";
sequences.seq_4CL_Intro_gblock.name = "4CL Intro gblock";
sequences.seq_4CL_Intro_gblock.seqType = "linear";
sequences.seq_4CL_Intro_gblock.comp = true;
sequences.seq_4CL_Intro_gblock.data = `LOCUS       4CL_Intro_gblock         480 bp ds-DNA     linear       25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     misc_feature    437..466
                     /label="Spacer"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     misc_feature    40..73
                     /label="BBa_J23102"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     misc_feature    122..436
                     /label="ZIF268"
                     /ApEinfo_revcolor=#d59687
                     /ApEinfo_fwdcolor=#d59687
     misc_feature    98..111
                     /label="BBa_J61115"
                     /ApEinfo_revcolor=#b4abac
                     /ApEinfo_fwdcolor=#b4abac
     Biobricking     18..39
                     /label="BioBrick Prefix "
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_binding    74..97
                     /label="LacO"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
ORIGIN
        1 CGTCAGGCTC TTCACACgaa ttcgcggccg cttctagagt gacagctagc tcagtcctag
       61 gtactgtgct agcTGGAATT GTGAGCGGAT AACAATTGAA AGAAGGGATA Ctaaatacat
      121 gATGCACCAC CATCACCATC ATCCCGGTGA GAAACCATAT GCGTGCCCGG TGGAAAGCTG
      181 TGATAGACGC TTTAGCCGTA GTGACGAACT GACCCGCCAC ATTCGAATAC ATACGGGGCA
      241 AAAACCGTTT CAGTGCCGCA TTTGTATGCG TAACTTCTCA CGGAGTGATC ATTTAACCAC
      301 TCATATTCGT ACTCATACAG GCGAAAAACC TTTTGCCTGC GACATCTGTG GTCGCAAATT
      361 CGCACGTTCC GATGAGCGCA AGCGTCACAC GAAAATCCAT ACCGGTGGCG GGAGCGGCGG
      421 CGGATCTGGT GGCTCGggtg gaagtggagg tggaagtgga ggtagtAGAA GAGCTGCAAG
//`
        
sequences.seq_4CL_Outro_gblock = {};
sequences.seq_4CL_Outro_gblock.varName = "seq_4CL_Outro_gblock";
sequences.seq_4CL_Outro_gblock.name = "4CL Outro gblock";
sequences.seq_4CL_Outro_gblock.seqType = "linear";
sequences.seq_4CL_Outro_gblock.comp = true;
sequences.seq_4CL_Outro_gblock.data = `LOCUS       4CL_Outro_gblock         137 bp ds-DNA     linear       25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     stem_loop       15..66
                     /label="T0 terminator"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     Biobricking     67..87
                     /label="BioBrick Suffix"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
ORIGIN
        1 TTCCGGGCTC TTCAttgttc agaacgctcg gtcttgcaca ccgggcgttt tttctttgtg
       61 agtccatact agtagcggcc gctgcagGGA AGAAGAGCtc caagagagtg aagggatgtc
      121 aagctgccat gAATTGA
//`
        
sequences.seq_ACC_intro_gblock = {};
sequences.seq_ACC_intro_gblock.varName = "seq_ACC_intro_gblock";
sequences.seq_ACC_intro_gblock.name = "ACC intro gblock";
sequences.seq_ACC_intro_gblock.seqType = "both";
sequences.seq_ACC_intro_gblock.comp = true;
sequences.seq_ACC_intro_gblock.data = `LOCUS       ACC_intro_gblock        2034 bp ds-DNA     circular     25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     misc_feature    99..112
                     /label="RBS"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_feature    40..74
                     /label="Promoter"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     misc_feature    113..1885
                     /label="ACCalpha"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     misc_feature    1889..2017
                     /label="Terminator"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_binding    75..98
                     /label="LacO"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_feature    18..39
                     /label="Prefix"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
ORIGIN
        1 AATGCTGGTC TCACGTTgaa ttcgcggccg cttctagagt tgacggctag ctcagtccta
       61 ggtatagtgc tagcTGGAAT TGTGAGCGGA TAACAATTGA AAGAGGTGAC ATATGAGCGT
      121 GGAAACCCGT AAAATCACTA AAGTTTTGGT CGCGAACCGG GGTGAAATCG CTATTCGCGT
      181 TTTTCGTGCG GCCCGCGATG AGGGTATCGG CAGTGTTGCT GTCTACGCCG AGCCGGATGC
      241 CGATGCGCCA TTCGTGAGCT ATGCGGACGA AGCCTTTGCC CTGGGCGGCC AGACATCGGC
      301 CGAATCGTAT CTGGTAATCG ACAAAATCAT TGACGCCGCT CGTAAGAGCG GGGCTGATGC
      361 AATCCATCCC GGATACGGCT TCCTTGCAGA AAACGCGGAC TTCGCCGAAG CTGTTATAAA
      421 CGAAGGGCTA ATTTGGATTG GCCCGTCCCC AGAGAGCATC AGATCCTTAG GAGACAAAGT
      481 AACAGCGCGG CATATTGCGG ATACCGCAAA GGCGCCGATG GCACCCGGGA CGAAAGAGCC
      541 CGTGAAAGAT GCCGCCGAAG TCGTGGCTTT TGCAGAGGAG TTTGGGCTGC CGATCGCTAT
      601 CAAAGCAGCC TTTGGTGGTG GTGGCCGTGG AATGAAGGTG GCCTACAAAA TGGAAGAAGT
      661 CGCGGATCTG TTTGAGTCTG CGACCCGTGA AGCGACCGCC GCTTTCGGTC GAGGTGAGTG
      721 CTTTGTGGAA CGGTATCTGG ACAAAGCGCG CCACGTGGAA GCGCAAGTCA TCGCAGATAA
      781 ACATGGAAAC GTCGTAGTGG CGGGCACCCG CGACTGCTCG CTTCAGCGCC GTTTTCAAAA
      841 ACTCGTGGAA GAAGCGCCGG CACCGTTTCT CACTGATGAC CAAAGAGAGC GTTTACACTC
      901 AAGTGCAAAG GCGATTTGTA AAGAAGCTGG CTATTATGGT GCTGGCACTG TTGAATACTT
      961 GGTTGGTTCT GATGGACTCA TCTCGTTCCT GGAAGTGAAT ACCCGTCTGC AAGTCGAACA
     1021 CCCTGTGACG GAAGAAACGA CAGGTATCGA CCTGGTTCGC GAAATGTTTC GTATTGCGGA
     1081 AGGTCATGAA CTGTCTATTA AAGAAGATCC AGCACCCCGC GGCCACGCCT TCGAGTTCCG
     1141 TATTAACGGC GAGGATGCCG GCTCAAACTT CATGCCGGCT CCTGGAAAGA TTACTAGCTA
     1201 CCGAGAACCA CAGGGGCCTG GCGTTCGTAT GGACTCCGGC GTCGTGGAGG GGAGCGAAAT
     1261 ATCTGGTCAG TTTGACAGTA TGTTGGCAAA GCTTATTGTC TGGGGCGATA CCCGCGAACA
     1321 GGCCTTACAG CGCAGCCGTC GCGCCCTGGC GGAATATGTA GTGGAGGGTA TGCCGACCGT
     1381 AATCCCGTTC CACCAGCATA TTGTGGAAAA TCCGGCCTTT GTTGGGAATG ATGAAGGTTT
     1441 TGAAATTTAC ACCAAATGGA TAGAGGAAGT ATGGGACAAT CCTATTGCAC CTTATGTGGA
     1501 TGCGTCCGAA CTGGATGAGG ATGAAGATAA AACGCCAGCG CAGAAAGTTG TTGTAGAAAT
     1561 TAATGGCCGC CGCGTTGAGG TGGCGCTGCC GGGCGATCTG GCACTGGGCG GGACAGCGGG
     1621 ACCGAAAAAA AAGGCTAAAA AACGGAGGGC GGGCGGTGCG AAAGCAGGCG TCAGTGGGGA
     1681 TGCGGTAGCG GCACCGATGC AGGGTACGGT GATTAAAGTA AATGTCGAGG AAGGCGCAGA
     1741 GGTGAACGAA GGTGATACCG TGGTTGTACT TGAAGCAATG AAGATGGAAA ACCCGGTGAA
     1801 AGCCCATAAA TCAGGCACGG TGACGGGTTT GACCGTTGCC GCGGGTGAAG GCGTCAATAA
     1861 AGGTGTGGTT CTGTTAGAGA TTAAATAAcc aggcatcaaa taaaacgaaa ggctcagtcg
     1921 aaagactggg cctttcgttt tatctgttgt ttgtcggtga acgctctcta ctagagtcac
     1981 actggctcac cttcgggtgg gcctttctgc gtttatatag tAGAGACCAG GTGC
//`
        
sequences.seq_ACC_outro_gblock = {};
sequences.seq_ACC_outro_gblock.varName = "seq_ACC_outro_gblock";
sequences.seq_ACC_outro_gblock.name = "ACC outro gblock";
sequences.seq_ACC_outro_gblock.seqType = "both";
sequences.seq_ACC_outro_gblock.comp = true;
sequences.seq_ACC_outro_gblock.data = `LOCUS       ACC_outro_gblock        2216 bp ds-DNA     circular     25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     misc_feature    2179..2199
                     /label="Suffix"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     misc_feature    388..417
                     /label="Spacer"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     misc_feature    18..52
                     /label="Promoter"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     misc_feature    2050..2178
                     /label="Terminator"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_feature    418..2049
                     /label="ACCbeta"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     misc_feature    77..90
                     /label="RBS"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_feature    94..387
                     /label="ZFA"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     misc_binding    53..76
                     /label="LacO"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
ORIGIN
        1 CCAGCCGGTC TCATAGTttg acggctagct cagtcctagg tatagtgcta gcTGGAATTG
       61 TGAGCGGATA ACAATTGAAA GAGGTGACAT ATGACATCTG CAGCGGCCCC GGGGGAACGG
      121 CCATTCCAGT GTCGGATTTG CATGAGAAAC TTTAGCGATT CACCGACCCT GCGTCGTCAC
      181 ACCCGCACGC ATACTGGCGA AAAGCCTTTC CAGTGTCGCA TTTGCATGCG CAATTTTTCC
      241 GTTCGTCATA ATTTAACGCG CCACCTTCGC ACGCACACCG GTGAGAAACC GTTCCAATGC
      301 CGTATCTGTA TGCGTAACTT TTCGGACCGC ACTAGTCTGG CGCGACATTT GAAAACCCAT
      361 TATCCCTATG ATGTGCCGGA TTACGCTggt ggaagtggag gtggaagtgg aggtagtATG
      421 ACGATCAGTT CCCCGCTGAT CGATGTTGCT AACCTGCCGG ATATTAACAC CACGGCGGGA
      481 AAAATAGCTG ATCTCAAAGC GCGCCGCGCG GAAGCCCATT TCCCTATGGG CGAAAAGGCG
      541 GTTGAGAAAG TGCACGCCGC AGGTCGTCTG ACAGCACGGG AACGTCTGGA TTATCTCTTA
      601 GATGAAGGCT CTTTCATCGA AACCGATCAA CTTGCCCGCC ACCGGACGAC GGCGTTTGGC
      661 CTGGGCGCCA AACGTCCGGC AACCGATGGG ATCGTGACCG GGTGGGGTAC CATTGATGGC
      721 CGCGAAGTCT GTATTTTCAG CCAGGATGGA ACTGTTTTTG GCGGCGCGCT GGGCGAGGTT
      781 TACGGGGAAA AAATGATAAA AATTATGGAA TTAGCGATCG ATACGGGGCG TCCGCTGATT
      841 GGCCTGTACG AGGGAGCGGG CGCCCGAATC CAGGATGGTG CAGTCTCGCT AGATTTCATT
      901 AGTCAAACAT TTTACCAGAA TATCCAGGCC AGCGGAGTAA TTCCCCAGAT TAGTGTGATC
      961 ATGGGCGCGT GCGCCGGTGG GAATGCTTAT GGCCCAGCGT TGACAGACTT CGTGGTGATG
     1021 GTCGATAAGA CGTCTAAAAT GTTTGTGACG GGTCCAGATG TGATTAAGAC CGTGACTGGC
     1081 GAGGAAATTA CCCAGGAGGA GCTTGGTGGT GCAACGACAC ACATGGTAAC TGCGGGAAAC
     1141 TCCCATTATA CTGCGGCTAC CGACGAGGAA GCCTTGGATT GGGTTCAAGA TCTGGTTAGC
     1201 TTTCTGCCTT CCAACAACCG GTCTTACACT CCCCTGGAAG ATTTTGACGA AGAAGAAGGT
     1261 GGGGTTGAAG AAAATATCAC CGCAGACGAC CTTAAACTCG ACGAAATCAT TCCGGATTCA
     1321 GCTACCGTAC CATACGACGT TCGTGACGTC ATCGAATGTC TTACCGATGA CGGTGAGTAT
     1381 TTGGAGATTC AGGCGGACCG CGCCGAAAAC GTCGTGATTG CGTTTGGGCG CATTGAAGGT
     1441 CAAAGCGTTG GCTTTGTGGC AAATCAGCCG ACTCAGTTCG CGGGTTGTCT GGATATTGAT
     1501 TCATCGGAAA AAGCAGCACG TTTCGTGCGT ACGTGCGATG CGTTTAACAT CCCGATTGTA
     1561 ATGCTGGTCG ACGTGCCGGG ATTTCTGCCG GGAGCCGGTC AAGAATATGG TGGTATTCTG
     1621 AGACGCGGCG CTAAATTATT ATATGCATAT GGCGAAGCAA CAGTACCGAA AATCACCGTT
     1681 ACCATGCGTA AGGCATACGG GGGTGCGTAC TGCGTCATGG GCTCAAAAGG CTTGGGCAGT
     1741 GACATCAATC TAGCGTGGCC GACCGCTCAG ATTGCCGTGA TGGGTGCCGC GGGCGCAGTC
     1801 GGCTTCATAT ATCGCAAAGA ACTGATGGCG GCCGATGCCA AAGGTCTGGA TACGGTGGCT
     1861 CTGGCTAAAA GCTTTGAGCG CGAGTATGAA GACCACATGC TGAATCCTTA TCATGCTGCC
     1921 GAGCGTGGGC TCATAGACGC GGTAATCTTA CCCTCGGAAA CCAGGGGCCA GATTAGCCGA
     1981 AATCTGCGTC TTCTGAAGCA TAAAAATGTG ACACGCCCAG CCAGAAAACA TGGTAACATG
     2041 CCTTTGTAAc caggcatcaa ataaaacgaa aggctcagtc gaaagactgg gcctttcgtt
     2101 ttatctgttg tttgtcggtg aacgctctct actagagtca cactggctca ccttcgggtg
     2161 ggcctttctg cgtttatata ctagtagcgg ccgctgcagT GCCAGAGACC CCATTA
//`
        
sequences.seq_ACS_intro_gblock = {};
sequences.seq_ACS_intro_gblock.varName = "seq_ACS_intro_gblock";
sequences.seq_ACS_intro_gblock.name = "ACS intro gblock";
sequences.seq_ACS_intro_gblock.seqType = "linear";
sequences.seq_ACS_intro_gblock.comp = true;
sequences.seq_ACS_intro_gblock.data = `LOCUS       ACS_intro_gblock         458 bp ds-DNA     linear       25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     misc_feature    18..39
                     /label="Prefix"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
     misc_feature    40..74
                     /label="promoter"
                     /ApEinfo_revcolor=#d59687
                     /ApEinfo_fwdcolor=#d59687
     misc_feature    122..415
                     /label="ZFB"
                     /ApEinfo_revcolor=#f8d3a9
                     /ApEinfo_fwdcolor=#f8d3a9
     misc_binding    75..98
                     /label="LacO"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_feature    99..118
                     /label="RBS"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
     misc_feature    416..445
                     /label="Spacer"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
ORIGIN
        1 GTTTCAGGTC TCACGTTgaa ttcgcggccg cttctagagt tgacggctag ctcagtccta
       61 ggtacagtgc tagcTGGAAT TGTGAGCGGA TAACAATTTC GACTCGTTCG ATTAAAGAAT
      121 GACCAGTGCG GCTGCCCCTG GTGAACGCCC GTTTCAGTGT CGGATTTGCA TGCGAAATTT
      181 CAGCAAAAAA GATCATCTCC ACCGTCATAC TCGCACACAC ACTGGGGAAA AACCGTTCCA
      241 GTGTCGCATT TGCATGCGTA ACTTTTCCTT GTCACAAACC CTGAAACGTC ACCTTCGCAC
      301 GCATACGGGC GAGAAGCCCT TCCAGTGTAG AATCTGCATG CGCAACTTTT CGCGTTTAGA
      361 TATGCTGGCG CGTCATCTGA AAACCCATTA TCCATACGAT GTGCCGGACT ATGCAggtgg
      421 aagtggaggt ggaagtggag gtagtAGAGA CCGGACTA
//`
        
sequences.seq_ACS_outro_gblock = {};
sequences.seq_ACS_outro_gblock.varName = "seq_ACS_outro_gblock";
sequences.seq_ACS_outro_gblock.name = "ACS outro gblock";
sequences.seq_ACS_outro_gblock.seqType = "linear";
sequences.seq_ACS_outro_gblock.comp = true;
sequences.seq_ACS_outro_gblock.data = `LOCUS       ACS_outro_gblock        2143 bp ds-DNA     linear       25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     misc_feature    2106..2126
                     /label="Suffix"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     misc_feature    18..1973
                     /label="ACS"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     misc_feature    1977..2105
                     /label="Terminator"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
ORIGIN
        1 GTTTCAGGTC TCATAGTATG TCTCAGATTC ACAAACATAC TATCCCTGCA AACATTGCTG
       61 ACCGTTGCCT GATTAATCCT CAACAGTATG AAGCCATGTA CCAGCAGTCG ATTAATGTGC
      121 CGGATACATT TTGGGGCGAA CAGGGGAAGA TTCTGGACTG GATCAAACCG TACCAAAAAG
      181 TGAAAAATAC CAGTTTCGCA CCGGGTAATG TTAGCATCAA ATGGTACGAA GACGGCACTC
      241 TTAACCTTGC GGCGAATTGT CTGGATCGTC ATCTACAAGA AAACGGCGAT CGTACAGCGA
      301 TTATATGGGA GGGTGATGAT GCTAGCCAGT CGAAGCATAT CAGCTATAAA GAACTTCATC
      361 GCGACGTATG CCGCTTCGCA AACACGTTGT TAGAATTAGG CATCAAGAAA GGTGATGTGG
      421 TCGCCATTTA TATGCCAATG GTTCCGGAAG CGGCCGTGGC TATGCTCGCA TGCGCCCGTA
      481 TTGGAGCGGT CCATTCGGTT ATTTTTGGGG GGTTTTCCCC GGAGGCAGTC GCCGGCCGCA
      541 TTATTGATTC CAATAGCCGT CTCGTCATCA CCTCTGATGA AGGAGTTCGG GCGGGCCGCA
      601 GCATTCCTCT GAAAAAGAAT GTAGACGATG CTCTGAAAAA CCCTAACGTC ACGAGTGTCG
      661 AGCACGTTGT TGTGTTAAAA CGCACCGGTG GTAAAATTGA CTGGCAGGAA GGGCGTGACT
      721 TGTGGTGGCA TGACCTTGTA GAACAAGCGT CCGATCAGCA TCAGGCTGAA GAGATGAACG
      781 CAGAGGACCC GCTGTTCATC TTATATACCA GCGGATCTAC AGGTAAACCC AAAGGGGTGC
      841 TGCATACTAC GGGCGGTTAT TTGGTGTACG CCGCCCTGAC TTTTAAATAC GTCTTTGATT
      901 ACCACCCCGG TGACATCTAT TGGTGTACCG CTGATGTCGG TTGGGTTACC GGACATAGCT
      961 ATCTGCTGTA TGGCCCCTTG GCATGTGGGG CCACAACGTT GATGTTTGAA GGAGTGCCGA
     1021 ATTGGCCGAC CCCAGCCCGC ATGGCGCAGG TAGTTGATAA GCATCAGGTG AACATCCTGT
     1081 ACACGGCTCC GACGGCCATT CGAGCTCTGA TGGCGGAAGG CGATAAAGCG ATAGAAGGCA
     1141 CGGATCGCTC TTCTCTCCGC ATCCTGGGTT CAGTTGGCGA GCCAATCAAC CCAGAGGCGT
     1201 GGGAGTGGTA CTGGAAAAAA ATTGGTAATG AAAAATGCCC GGTCGTGGAC ACCTGGTGGC
     1261 AGACCGAAAC GGGAGGCTTT ATGATTACCC CGCTGCCAGG CGCGACGGAG CTAAAGGCAG
     1321 GGAGCGCAAC AAGGCCTTTT TTCGGTGTGC AACCGGCCTT AGTGGACAAT GAGGGTAATC
     1381 CGCTGGAAGG GGCGACCGAG GGATCACTGG TGATTACTGA CAGTTGGCCG GGCCAGGCAC
     1441 GAACCCTGTT CGGTGATCAC GAAAGATTCG AACAAACGTA TTTCTCCACA TTTAAAAACA
     1501 TGTATTTTTC AGGTGACGGC GCGCGTAGAG ATGAAGATGG TTATTATTGG ATCACCGGCC
     1561 GGGTCGATGA TGTGCTCAAC GTTAGCGGTC ACCGTCTTGG CACGGCGGAA ATCGAATCGG
     1621 CTCTGGTGGC CCACCCTAAG ATCGCGGAGG CAGCCGTGGT AGGCATTCCG CATAACATAA
     1681 AAGGCCAGGC CATTTACGCG TATGTGACTT TGAATCACGG CGAAGAACCA TCGCCGGAAT
     1741 TATACGCGGA AGTACGCAAC TGGGTTCGGA AAGAAATCGG TCCACTGGCA ACCCCGGATG
     1801 TACTGCACTG GACCGATTCA CTGCCCAAAA CGCGCAGTGG GAAGATCATG CGTCGCATAC
     1861 TGCGTAAAAT TGCGGCCGGT GATACTTCAA ACCTCGGCGA TACCTCCACC CTTGCAGATC
     1921 CCGGCGTAGT TGAAAAACTG CTGGAAGAGA AACAAGCCAT TGCGATGCCG AGTTGAccag
     1981 gcatcaaata aaacgaaagg ctcagtcgaa agactgggcc tttcgtttta tctgttgttt
     2041 gtcggtgaac gctctctact agagtcacac tggctcacct tcgggtgggc ctttctgcgt
     2101 ttatatacta gtagcggccg ctgcagTGCC AGAGACCGGA CTA
//`
        
sequences.seq_BsaI_FWD_primer = {};
sequences.seq_BsaI_FWD_primer.varName = "seq_BsaI_FWD_primer";
sequences.seq_BsaI_FWD_primer.name = "BsaI FWD primer";
sequences.seq_BsaI_FWD_primer.seqType = "linear";
sequences.seq_BsaI_FWD_primer.comp = false;
sequences.seq_BsaI_FWD_primer.data = `LOCUS       BsaI_FWD_primer           35 bp ds-DNA     linear       25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 CTCTCAGGTC TCATGCCagt ccggcaaaaa agggc
//`
        
sequences.seq_BsaI_REV_primer = {};
sequences.seq_BsaI_REV_primer.varName = "seq_BsaI_REV_primer";
sequences.seq_BsaI_REV_primer.name = "BsaI REV primer";
sequences.seq_BsaI_REV_primer.seqType = "linear";
sequences.seq_BsaI_REV_primer.comp = false;
sequences.seq_BsaI_REV_primer.data = `LOCUS       BsaI_REV_primer           40 bp ds-DNA     linear       25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 ATCTTAGGTC TCTCTCCcag aaatcatcct tagcgaaagc
//`
        
sequences.seq_CoA_4x_Assembly = {};
sequences.seq_CoA_4x_Assembly.varName = "seq_CoA_4x_Assembly";
sequences.seq_CoA_4x_Assembly.name = "CoA 4x Assembly";
sequences.seq_CoA_4x_Assembly.seqType = "both";
sequences.seq_CoA_4x_Assembly.comp = true;
sequences.seq_CoA_4x_Assembly.data = `LOCUS       CoA_4x_Assembly         2492 bp ds-DNA     circular     25-JUN-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     Backbone            197..2310
                         /label="Mutated pSB1A3"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     CDS                 complement(1210..2070)
                         /label="AmpR"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     Biobricking         176..196
                         /label="BioBrick Suffix"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site    2480..2488
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Biobricking         2311..2332
                         /label="BioBrick Prefix "
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site    2469..2477
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     terminator          2265..2308
                         /label="bacterial terminator"
                         /ApEinfo_revcolor=#ffef86
                         /ApEinfo_fwdcolor=#ffef86
     Zinc Finger Site    2458..2466
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     primer_bind         1833..1852
                         /label="Amp-R"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     Zinc Finger Site    2447..2455
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    2436..2444
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     primer_bind         complement(531..550)
                         /label="pBR322ori-F"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     misc_feature        1351..1351
                         /label="Point Mutation"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     Zinc Finger Site    2414..2422
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     primer_bind         2243..2261
                         /label="pBRforEco"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    2403..2411
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    2392..2400
                         /label="ZFc Site"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
     primer_bind         complement(280..297)
                         /label="L4440"
                         /ApEinfo_revcolor=#75c6a9
                         /ApEinfo_fwdcolor=#75c6a9
     Zinc Finger Site    2425..2433
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     misc_binding        2369..2391
                         /label="LacO"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Promoter            2333..2367
                         /label="J23100 Anderson Promoter"
                         /ApEinfo_revcolor=#d59687
                         /ApEinfo_fwdcolor=#d59687
     rep_origin          complement(451..1039)
                         /label="ori"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     HIV-RT Binding Site join(2489..2492,1..106)
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Terminator          107..175
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     promoter            complement(2071..2175)
                         /label="AmpR promoter"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     gBlock              53..196
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
ORIGIN
        1 AAAACGTGGC GCCCGAACAG GGACGGATAG CTCAGTCGGT AGAGCATCAG ACTTTTAATC
       61 TGAGGGTCCA GGGTTCAAGT CCCTGTTCGG GCGCCACGTT TTTTTTatta gcagaaagtc
      121 aaaagcctcc gaccggaggc ttttgactaa aacttccctt ggggttatca ttgggtacta
      181 gtagcggccg ctgcagagtc cggcaaaaaa gggcaaggtg tcaccaccct gccctttttc
      241 tttaaaaccg aaaagattac ttcgcgttat gcaggcttcc tcgctcactg actcgctgcg
      301 ctcggtcgtt cggctgcggc gagcggtatc agctcactca aaggcggtaa tacggttatc
      361 cacagaatca ggggataacg caggaaagaa catgtgagca aaaggccagc aaaaggccag
      421 gaaccgtaaa aaggccgcgt tgctggcgtt tttccacagg ctccgccccc ctgacgagca
      481 tcacaaaaat cgacgctcaa gtcagaggtg gcgaaacccg acaggactat aaagatacca
      541 ggcgtttccc cctggaagct ccctcgtgcg ctctcctgtt ccgaccctgc cgcttaccgg
      601 atacctgtcc gcctttctcc cttcgggaag cgtggcgctt tctcatagct cacgctgtag
      661 gtatctcagt tcggtgtagg tcgttcgctc caagctgggc tgtgtgcacg aaccccccgt
      721 tcagcccgac cgctgcgcct tatccggtaa ctatcgtctt gagtccaacc cggtaagaca
      781 cgacttatcg ccactggcag cagccactgg taacaggatt agcagagcga ggtatgtagg
      841 cggtgctaca gagttcttga agtggtggcc taactacggc tacactagaa gaacagtatt
      901 tggtatctgc gctctgctga agccagttac cttcggaaaa agagttggta gctcttgatc
      961 cggcaaacaa accaccgctg gtagcggtgg tttttttgtt tgcaagcagc agattacgcg
     1021 cagaaaaaaa ggatctcaag aagatccttt gatcttttct acggggtctg acgctcagtg
     1081 gaacgaaaac tcacgttaag ggattttggt catgagatta tcaaaaagga tcttcaccta
     1141 gatcctttta aattaaaaat gaagttttaa atcaatctaa agtatatatg agtaaacttg
     1201 gtctgacagt taccaatgct taatcagtga ggcacctatc tcagcgatct gtctatttcg
     1261 ttcatccata gttgcctgac tccccgtcgt gtagataact acgatacggg agggcttacc
     1321 atctggcccc agtgctgcaa tgataccgcg cgacccacgc tcaccggctc cagatttatc
     1381 agcaataaac cagccagccg gaagggccga gcgcagaagt ggtcctgcaa ctttatccgc
     1441 ctccatccag tctattaatt gttgccggga agctagagta agtagttcgc cagttaatag
     1501 tttgcgcaac gttgttgcca ttgctacagg catcgtggtg tcacgctcgt cgtttggtat
     1561 ggcttcattc agctccggtt cccaacgatc aaggcgagtt acatgatccc ccatgttgtg
     1621 caaaaaagcg gttagctcct tcggtcctcc gatcgttgtc agaagtaagt tggccgcagt
     1681 gttatcactc atggttatgg cagcactgca taattctctt actgtcatgc catccgtaag
     1741 atgcttttct gtgactggtg agtactcaac caagtcattc tgagaatagt gtatgcggcg
     1801 accgagttgc tcttgcccgg cgtcaatacg ggataatacc gcgccacata gcagaacttt
     1861 aaaagtgctc atcattggaa aacgttcttc ggggcgaaaa ctctcaagga tcttaccgct
     1921 gttgagatcc agttcgatat aacccactcg tgcacccaac tgatcttcag catcttttac
     1981 tttcaccagc gtttctgggt gagcaaaaac aggaaggcaa aatgccgcaa aaaagggaat
     2041 aagggcgaca cggaaatgtt gaatactcat actcttcctt tttcaatatt attgaagcat
     2101 ttatcagggt tattgtctca tgagcggata catatttgaa tgtatttaga aaaataaaca
     2161 aataggggtt ccgcgcacat ttccccgaaa agtgccacct gacgtctaag aaaccattat
     2221 tatcatgaca ttaacctata aaaataggcg tatcacgagg cagaatttca gataaaaaaa
     2281 atccttagct ttcgctaagg atgatttctg gaattcgcgg ccgcttctag agTTGACGGC
     2341 TAGCTCAGTC CTAGGTACAG TGCTAGCTGG AATTGTGAGC GGATAACAAT TGAGGACGGC
     2401 ATGTCGATGC CATGCGGCTG GGATGTCGAT GCCATGCGGC TGGGATGTCG ATGCCATGCG
     2461 GCTGGGATGT CGATGCCATG CGGCTGGGAA AA
//`
        
sequences.seq_CoA_4x_Comp_Assembly = {};
sequences.seq_CoA_4x_Comp_Assembly.varName = "seq_CoA_4x_Comp_Assembly";
sequences.seq_CoA_4x_Comp_Assembly.name = "CoA 4x Comp Assembly";
sequences.seq_CoA_4x_Comp_Assembly.seqType = "both";
sequences.seq_CoA_4x_Comp_Assembly.comp = true;
sequences.seq_CoA_4x_Comp_Assembly.data = `LOCUS       CoA_4x_Comp_Assembly    2492 bp ds-DNA     circular     25-JUN-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     gBlock              53..196
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    complement(2425..2433)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Backbone            197..2310
                         /label="Mutated pSB1A3"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Biobricking         176..196
                         /label="BioBrick Suffix"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site    complement(2480..2488)
                         /label="ZFc Site"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
     rep_origin          complement(451..1039)
                         /label="ori"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     Biobricking         2311..2332
                         /label="BioBrick Prefix "
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site    complement(2469..2477)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     primer_bind         complement(280..297)
                         /label="L4440"
                         /ApEinfo_revcolor=#75c6a9
                         /ApEinfo_fwdcolor=#75c6a9
     Zinc Finger Site    complement(2447..2455)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     primer_bind         2243..2261
                         /label="pBRforEco"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     promoter            complement(2071..2175)
                         /label="AmpR promoter"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     CDS                 complement(1210..2070)
                         /label="AmpR"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     primer_bind         1833..1852
                         /label="Amp-R"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     misc_feature        1351..1351
                         /label="Point Mutation"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     terminator          2265..2308
                         /label="bacterial terminator"
                         /ApEinfo_revcolor=#ffef86
                         /ApEinfo_fwdcolor=#ffef86
     Zinc Finger Site    complement(2414..2422)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    complement(2403..2411)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    complement(2436..2444)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    complement(2392..2400)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     misc_binding        2369..2391
                         /label="LacO"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     primer_bind         complement(531..550)
                         /label="pBR322ori-F"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     Promoter            2333..2367
                         /label="J23100 Anderson Promoter"
                         /ApEinfo_revcolor=#d59687
                         /ApEinfo_fwdcolor=#d59687
     HIV-RT Binding Site join(2489..2492,1..106)
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Zinc Finger Site    complement(2458..2466)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Terminator          107..175
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
ORIGIN
        1 AAAACGTGGC GCCCGAACAG GGACGGATAG CTCAGTCGGT AGAGCATCAG ACTTTTAATC
       61 TGAGGGTCCA GGGTTCAAGT CCCTGTTCGG GCGCCACGTT TTTTTTatta gcagaaagtc
      121 aaaagcctcc gaccggaggc ttttgactaa aacttccctt ggggttatca ttgggtacta
      181 gtagcggccg ctgcagagtc cggcaaaaaa gggcaaggtg tcaccaccct gccctttttc
      241 tttaaaaccg aaaagattac ttcgcgttat gcaggcttcc tcgctcactg actcgctgcg
      301 ctcggtcgtt cggctgcggc gagcggtatc agctcactca aaggcggtaa tacggttatc
      361 cacagaatca ggggataacg caggaaagaa catgtgagca aaaggccagc aaaaggccag
      421 gaaccgtaaa aaggccgcgt tgctggcgtt tttccacagg ctccgccccc ctgacgagca
      481 tcacaaaaat cgacgctcaa gtcagaggtg gcgaaacccg acaggactat aaagatacca
      541 ggcgtttccc cctggaagct ccctcgtgcg ctctcctgtt ccgaccctgc cgcttaccgg
      601 atacctgtcc gcctttctcc cttcgggaag cgtggcgctt tctcatagct cacgctgtag
      661 gtatctcagt tcggtgtagg tcgttcgctc caagctgggc tgtgtgcacg aaccccccgt
      721 tcagcccgac cgctgcgcct tatccggtaa ctatcgtctt gagtccaacc cggtaagaca
      781 cgacttatcg ccactggcag cagccactgg taacaggatt agcagagcga ggtatgtagg
      841 cggtgctaca gagttcttga agtggtggcc taactacggc tacactagaa gaacagtatt
      901 tggtatctgc gctctgctga agccagttac cttcggaaaa agagttggta gctcttgatc
      961 cggcaaacaa accaccgctg gtagcggtgg tttttttgtt tgcaagcagc agattacgcg
     1021 cagaaaaaaa ggatctcaag aagatccttt gatcttttct acggggtctg acgctcagtg
     1081 gaacgaaaac tcacgttaag ggattttggt catgagatta tcaaaaagga tcttcaccta
     1141 gatcctttta aattaaaaat gaagttttaa atcaatctaa agtatatatg agtaaacttg
     1201 gtctgacagt taccaatgct taatcagtga ggcacctatc tcagcgatct gtctatttcg
     1261 ttcatccata gttgcctgac tccccgtcgt gtagataact acgatacggg agggcttacc
     1321 atctggcccc agtgctgcaa tgataccgcg cgacccacgc tcaccggctc cagatttatc
     1381 agcaataaac cagccagccg gaagggccga gcgcagaagt ggtcctgcaa ctttatccgc
     1441 ctccatccag tctattaatt gttgccggga agctagagta agtagttcgc cagttaatag
     1501 tttgcgcaac gttgttgcca ttgctacagg catcgtggtg tcacgctcgt cgtttggtat
     1561 ggcttcattc agctccggtt cccaacgatc aaggcgagtt acatgatccc ccatgttgtg
     1621 caaaaaagcg gttagctcct tcggtcctcc gatcgttgtc agaagtaagt tggccgcagt
     1681 gttatcactc atggttatgg cagcactgca taattctctt actgtcatgc catccgtaag
     1741 atgcttttct gtgactggtg agtactcaac caagtcattc tgagaatagt gtatgcggcg
     1801 accgagttgc tcttgcccgg cgtcaatacg ggataatacc gcgccacata gcagaacttt
     1861 aaaagtgctc atcattggaa aacgttcttc ggggcgaaaa ctctcaagga tcttaccgct
     1921 gttgagatcc agttcgatat aacccactcg tgcacccaac tgatcttcag catcttttac
     1981 tttcaccagc gtttctgggt gagcaaaaac aggaaggcaa aatgccgcaa aaaagggaat
     2041 aagggcgaca cggaaatgtt gaatactcat actcttcctt tttcaatatt attgaagcat
     2101 ttatcagggt tattgtctca tgagcggata catatttgaa tgtatttaga aaaataaaca
     2161 aataggggtt ccgcgcacat ttccccgaaa agtgccacct gacgtctaag aaaccattat
     2221 tatcatgaca ttaacctata aaaataggcg tatcacgagg cagaatttca gataaaaaaa
     2281 atccttagct ttcgctaagg atgatttctg gaattcgcgg ccgcttctag agTTGACGGC
     2341 TAGCTCAGTC CTAGGTACAG TGCTAGCTGG AATTGTGAGC GGATAACAAT TCCCAGCCGC
     2401 ATGGCATCGA CATCCCAGCC GCATGGCATC GACATCCCAG CCGCATGGCA TCGACATCCC
     2461 AGCCGCATGG CATCGACATG CCGTCCTCAA AA
//`
        
sequences.seq_CoA_4x_Full_Part = {};
sequences.seq_CoA_4x_Full_Part.varName = "seq_CoA_4x_Full_Part";
sequences.seq_CoA_4x_Full_Part.name = "CoA 4x Full Part";
sequences.seq_CoA_4x_Full_Part.seqType = "both";
sequences.seq_CoA_4x_Full_Part.comp = true;
sequences.seq_CoA_4x_Full_Part.data = `LOCUS       CoA_4x_Full_Part        2835 bp ds-DNA     circular     14-JUL-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     CDS                 complement(1210..2070)
                         /label="AmpR"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     Zinc Finger Site    complement(2779..2787)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    2425..2433
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     misc_feature        1351..1351
                         /label="Point Mutation"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     Zinc Finger Site    2447..2455
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     promoter            complement(2071..2175)
                         /label="AmpR promoter"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Zinc Finger Site    2392..2400
                         /label="ZFc Site"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
     gBlock              53..196
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     terminator          2265..2308
                         /label="bacterial terminator"
                         /ApEinfo_revcolor=#ffef86
                         /ApEinfo_fwdcolor=#ffef86
     HIV-RT Binding Site 2489..2598
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     primer_bind         complement(280..297)
                         /label="L4440"
                         /ApEinfo_revcolor=#75c6a9
                         /ApEinfo_fwdcolor=#75c6a9
     Zinc Finger Site    2436..2444
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Biobricking         2311..2332
                         /label="BioBrick Prefix "
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     primer_bind         complement(531..550)
                         /label="pBR322ori-F"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     Zinc Finger Site    2414..2422
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Terminator          107..175
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    complement(2746..2754)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Backbone            197..2310
                         /label="Mutated pSB1A3"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Scar                2668..2675
                         /label="BioBrick Scar"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     Zinc Finger Site    2458..2466
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     HIV-RT Binding Site join(2832..2835,1..106)
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Zinc Finger Site    complement(2735..2743)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    complement(2768..2776)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    complement(2790..2798)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    complement(2801..2809)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Promoter            2676..2710
                         /label="J23100 Anderson Promoter"
                         /ApEinfo_revcolor=#d59687
                         /ApEinfo_fwdcolor=#d59687
     Biobricking         176..196
                         /label="BioBrick Suffix"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site    complement(2812..2820)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    2403..2411
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     misc_binding        2369..2391
                         /label="LacO"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site    2480..2488
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     primer_bind         1833..1852
                         /label="Amp-R"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     gBlock              2545..2669
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     primer_bind         2243..2261
                         /label="pBRforEco"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Promoter            2333..2367
                         /label="J23100 Anderson Promoter"
                         /ApEinfo_revcolor=#d59687
                         /ApEinfo_fwdcolor=#d59687
     Zinc Finger Site    2469..2477
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     rep_origin          complement(451..1039)
                         /label="ori"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     Zinc Finger Site    complement(2757..2765)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Terminator          2599..2667
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     misc_binding        2712..2734
                         /label="LacO"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site    complement(2823..2831)
                         /label="ZFc Site"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
ORIGIN
        1 AAAACGTGGC GCCCGAACAG GGACGGATAG CTCAGTCGGT AGAGCATCAG ACTTTTAATC
       61 TGAGGGTCCA GGGTTCAAGT CCCTGTTCGG GCGCCACGTT TTTTTTatta gcagaaagtc
      121 aaaagcctcc gaccggaggc ttttgactaa aacttccctt ggggttatca ttgggtacta
      181 gtagcggccg ctgcagagtc cggcaaaaaa gggcaaggtg tcaccaccct gccctttttc
      241 tttaaaaccg aaaagattac ttcgcgttat gcaggcttcc tcgctcactg actcgctgcg
      301 ctcggtcgtt cggctgcggc gagcggtatc agctcactca aaggcggtaa tacggttatc
      361 cacagaatca ggggataacg caggaaagaa catgtgagca aaaggccagc aaaaggccag
      421 gaaccgtaaa aaggccgcgt tgctggcgtt tttccacagg ctccgccccc ctgacgagca
      481 tcacaaaaat cgacgctcaa gtcagaggtg gcgaaacccg acaggactat aaagatacca
      541 ggcgtttccc cctggaagct ccctcgtgcg ctctcctgtt ccgaccctgc cgcttaccgg
      601 atacctgtcc gcctttctcc cttcgggaag cgtggcgctt tctcatagct cacgctgtag
      661 gtatctcagt tcggtgtagg tcgttcgctc caagctgggc tgtgtgcacg aaccccccgt
      721 tcagcccgac cgctgcgcct tatccggtaa ctatcgtctt gagtccaacc cggtaagaca
      781 cgacttatcg ccactggcag cagccactgg taacaggatt agcagagcga ggtatgtagg
      841 cggtgctaca gagttcttga agtggtggcc taactacggc tacactagaa gaacagtatt
      901 tggtatctgc gctctgctga agccagttac cttcggaaaa agagttggta gctcttgatc
      961 cggcaaacaa accaccgctg gtagcggtgg tttttttgtt tgcaagcagc agattacgcg
     1021 cagaaaaaaa ggatctcaag aagatccttt gatcttttct acggggtctg acgctcagtg
     1081 gaacgaaaac tcacgttaag ggattttggt catgagatta tcaaaaagga tcttcaccta
     1141 gatcctttta aattaaaaat gaagttttaa atcaatctaa agtatatatg agtaaacttg
     1201 gtctgacagt taccaatgct taatcagtga ggcacctatc tcagcgatct gtctatttcg
     1261 ttcatccata gttgcctgac tccccgtcgt gtagataact acgatacggg agggcttacc
     1321 atctggcccc agtgctgcaa tgataccgcg cgacccacgc tcaccggctc cagatttatc
     1381 agcaataaac cagccagccg gaagggccga gcgcagaagt ggtcctgcaa ctttatccgc
     1441 ctccatccag tctattaatt gttgccggga agctagagta agtagttcgc cagttaatag
     1501 tttgcgcaac gttgttgcca ttgctacagg catcgtggtg tcacgctcgt cgtttggtat
     1561 ggcttcattc agctccggtt cccaacgatc aaggcgagtt acatgatccc ccatgttgtg
     1621 caaaaaagcg gttagctcct tcggtcctcc gatcgttgtc agaagtaagt tggccgcagt
     1681 gttatcactc atggttatgg cagcactgca taattctctt actgtcatgc catccgtaag
     1741 atgcttttct gtgactggtg agtactcaac caagtcattc tgagaatagt gtatgcggcg
     1801 accgagttgc tcttgcccgg cgtcaatacg ggataatacc gcgccacata gcagaacttt
     1861 aaaagtgctc atcattggaa aacgttcttc ggggcgaaaa ctctcaagga tcttaccgct
     1921 gttgagatcc agttcgatat aacccactcg tgcacccaac tgatcttcag catcttttac
     1981 tttcaccagc gtttctgggt gagcaaaaac aggaaggcaa aatgccgcaa aaaagggaat
     2041 aagggcgaca cggaaatgtt gaatactcat actcttcctt tttcaatatt attgaagcat
     2101 ttatcagggt tattgtctca tgagcggata catatttgaa tgtatttaga aaaataaaca
     2161 aataggggtt ccgcgcacat ttccccgaaa agtgccacct gacgtctaag aaaccattat
     2221 tatcatgaca ttaacctata aaaataggcg tatcacgagg cagaatttca gataaaaaaa
     2281 atccttagct ttcgctaagg atgatttctg gaattcgcgg ccgcttctag agTTGACGGC
     2341 TAGCTCAGTC CTAGGTACAG TGCTAGCTGG AATTGTGAGC GGATAACAAT TGAGGACGGC
     2401 ATGTCGATGC CATGCGGCTG GGATGTCGAT GCCATGCGGC TGGGATGTCG ATGCCATGCG
     2461 GCTGGGATGT CGATGCCATG CGGCTGGGAA AAAAAACGTG GCGCCCGAAC AGGGACGGAT
     2521 AGCTCAGTCG GTAGAGCATC AGACTTTTAA TCTGAGGGTC CAGGGTTCAA GTCCCTGTTC
     2581 GGGCGCCACG TTTTTTTTat tagcagaaag tcaaaagcct ccgaccggag gcttttgact
     2641 aaaacttccc ttggggttat cattgggtac tagagTTGAC GGCTAGCTCA GTCCTAGGTA
     2701 CAGTGCTAGC TGGAATTGTG AGCGGATAAC AATTCCCAGC CGCATGGCAT CGACATCCCA
     2761 GCCGCATGGC ATCGACATCC CAGCCGCATG GCATCGACAT CCCAGCCGCA TGGCATCGAC
     2821 ATGCCGTCCT CAAAA
//`
        
sequences.seq_CoA_4x_r_oligo_Complement_Duplex = {};
sequences.seq_CoA_4x_r_oligo_Complement_Duplex.varName = "seq_CoA_4x_r_oligo_Complement_Duplex";
sequences.seq_CoA_4x_r_oligo_Complement_Duplex.name = "CoA 4x r_oligo Complement Duplex";
sequences.seq_CoA_4x_r_oligo_Complement_Duplex.seqType = "linear";
sequences.seq_CoA_4x_r_oligo_Complement_Duplex.comp = true;
sequences.seq_CoA_4x_r_oligo_Complement_Duplex.data = `LOCUS       CoA_4x_r_oligo_Complemen 155 bp ds-DNA     linear       25-JUN-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     misc_binding    19..41
                     /label="LacO"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site complement(42..50)
                     /label="ZFb Site"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site complement(53..61)
                     /label="ZFa Site"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site complement(64..72)
                     /label="ZFb Site"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site complement(75..83)
                     /label="ZFa Site"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site complement(86..94)
                     /label="ZFb Site"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site complement(97..105)
                     /label="ZFa Site"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site complement(108..116)
                     /label="ZFb Site"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site complement(119..127)
                     /label="ZFa Site"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site complement(130..138)
                     /label="ZFc Site"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     primer          complement(42..138)
                     /label="Temp2"
                     /note="sequence: GAGGACGGCATGTCGATGCCATGCGGCTGGGATGTCGATGCCATGCGGCTGGGATGTCGATGCCATGCGGCTGGGATGTCGATGCCATGCGGCTGGG"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     primer          42..138
                     /label="Temp"
                     /note="sequence: CCCAGCCGCATGGCATCGACATCCCAGCCGCATGGCATCGACATCCCAGCCGCATGGCATCGACATCCCAGCCGCATGGCATCGACATGCCGTCCTC"
                     /ApEinfo_revcolor=#f8d3a9
                     /ApEinfo_fwdcolor=#f8d3a9
ORIGIN
        1 GAACAGGGTC TCCTAGCTGG AATTGTGAGC GGATAACAAT TCCCAGCCGC ATGGCATCGA
       61 CATCCCAGCC GCATGGCATC GACATCCCAG CCGCATGGCA TCGACATCCC AGCCGCATGG
      121 CATCGACATG CCGTCCTCAA AACGAGACCA ACCTG
//`
        
sequences.seq_CoA_4x_r_oligo_Duplex_126145_REV_1 = {};
sequences.seq_CoA_4x_r_oligo_Duplex_126145_REV_1.varName = "seq_CoA_4x_r_oligo_Duplex_126145_REV_1";
sequences.seq_CoA_4x_r_oligo_Duplex_126145_REV_1.name = "CoA 4x r_oligo Duplex 126-145 REV 1";
sequences.seq_CoA_4x_r_oligo_Duplex_126145_REV_1.seqType = "linear";
sequences.seq_CoA_4x_r_oligo_Duplex_126145_REV_1.comp = false;
sequences.seq_CoA_4x_r_oligo_Duplex_126145_REV_1.data = `LOCUS       CoA_4x_r_oligo_Duplex_126 20 bp ds-DNA     linear       07-JUL-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 TCGTTTTCCC AGCCGCATGG
//`
        
sequences.seq_CoA_4x_r_oligo_Duplex_6988_FWD_1 = {};
sequences.seq_CoA_4x_r_oligo_Duplex_6988_FWD_1.varName = "seq_CoA_4x_r_oligo_Duplex_6988_FWD_1";
sequences.seq_CoA_4x_r_oligo_Duplex_6988_FWD_1.name = "CoA 4x r_oligo Duplex 69-88 FWD 1";
sequences.seq_CoA_4x_r_oligo_Duplex_6988_FWD_1.seqType = "linear";
sequences.seq_CoA_4x_r_oligo_Duplex_6988_FWD_1.comp = false;
sequences.seq_CoA_4x_r_oligo_Duplex_6988_FWD_1.data = `LOCUS       CoA_4x_r_oligo_Duplex_69- 20 bp ds-DNA     linear       07-JUL-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 TGGGATGTCG ATGCCATGCG
//`
        
sequences.seq_CoA_4x_r_oligo_Duplex = {};
sequences.seq_CoA_4x_r_oligo_Duplex.varName = "seq_CoA_4x_r_oligo_Duplex";
sequences.seq_CoA_4x_r_oligo_Duplex.name = "CoA 4x r_oligo Duplex";
sequences.seq_CoA_4x_r_oligo_Duplex.seqType = "linear";
sequences.seq_CoA_4x_r_oligo_Duplex.comp = true;
sequences.seq_CoA_4x_r_oligo_Duplex.data = `LOCUS       CoA_4x_r_oligo_Duplex    155 bp ds-DNA     linear       07-JUL-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     misc_binding    19..41
                     /label="LacO"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site 42..50
                     /label="ZFc Site"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     Zinc Finger Site 53..61
                     /label="ZFa Site"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site 64..72
                     /label="ZFb Site"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site 75..83
                     /label="ZFa Site"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site 86..94
                     /label="ZFb Site"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site 97..105
                     /label="ZFa Site"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site 108..116
                     /label="ZFb Site"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site 119..127
                     /label="ZFa Site"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site 130..138
                     /label="ZFb Site"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     primer          complement(126..145)
                     /label="CoA 4x r_oligo Duplex 126-145 REV 1"
                     /note="sequence: TCGTTTTCCCAGCCGCATGG"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     primer          18..138
                     /label="Temp Fwd"
                     /note="sequence: TGGAATTGTGAGCGGATAACAATTGAGGACGGCATGTCGATGCCATGCGGCTGGGATGTCGATGCCATGCGGCTGGGATGTCGATGCCATGCGGCTGGGATGTCGATGCCATGCGGCTGGG"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     primer          complement(20..140)
                     /label="Temp Rev"
                     /note="sequence: CCCAGCCGCATGGCATCGACATCCCAGCCGCATGGCATCGACATCCCAGCCGCATGGCATCGACATCCCAGCCGCATGGCATCGACATGCCGTCCTCAATTGTTATCCGCTCACAATTCCA"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     primer          69..88
                     /label="CoA 4x r_oligo Duplex 69-88 FWD 1"
                     /note="sequence: TGGGATGTCGATGCCATGCG"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
ORIGIN
        1 GAACAGGGTC TCCTAGCTGG AATTGTGAGC GGATAACAAT TGAGGACGGC ATGTCGATGC
       61 CATGCGGCTG GGATGTCGAT GCCATGCGGC TGGGATGTCG ATGCCATGCG GCTGGGATGT
      121 CGATGCCATG CGGCTGGGAA AACGAGACCA ACCTG
//`
        
sequences.seq_CoA_6x_Assembly = {};
sequences.seq_CoA_6x_Assembly.varName = "seq_CoA_6x_Assembly";
sequences.seq_CoA_6x_Assembly.name = "CoA 6x Assembly";
sequences.seq_CoA_6x_Assembly.seqType = "both";
sequences.seq_CoA_6x_Assembly.comp = true;
sequences.seq_CoA_6x_Assembly.data = `LOCUS       CoA_6x_Assembly         2536 bp ds-DNA     circular     25-JUN-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     Terminator          107..175
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     primer_bind         complement(531..550)
                         /label="pBR322ori-F"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     primer_bind         1833..1852
                         /label="Amp-R"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     gBlock              53..196
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    2502..2510
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     CDS                 complement(1210..2070)
                         /label="AmpR"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     Zinc Finger Site    2491..2499
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Biobricking         176..196
                         /label="BioBrick Suffix"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site    2480..2488
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     misc_feature        1351..1351
                         /label="Point Mutation"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     Zinc Finger Site    2524..2532
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     primer_bind         2243..2261
                         /label="pBRforEco"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    2469..2477
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    2458..2466
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    2513..2521
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    2447..2455
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    2436..2444
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Biobricking         2311..2332
                         /label="BioBrick Prefix "
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site    2425..2433
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    2414..2422
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     promoter            complement(2071..2175)
                         /label="AmpR promoter"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Zinc Finger Site    2403..2411
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    2392..2400
                         /label="ZFc Site"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
     primer_bind         complement(280..297)
                         /label="L4440"
                         /ApEinfo_revcolor=#75c6a9
                         /ApEinfo_fwdcolor=#75c6a9
     Backbone            197..2310
                         /label="Mutated pSB1A3"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     misc_binding        2369..2391
                         /label="LacO"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Promoter            2333..2367
                         /label="J23100 Anderson Promoter"
                         /ApEinfo_revcolor=#d59687
                         /ApEinfo_fwdcolor=#d59687
     rep_origin          complement(451..1039)
                         /label="ori"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     terminator          2265..2308
                         /label="bacterial terminator"
                         /ApEinfo_revcolor=#ffef86
                         /ApEinfo_fwdcolor=#ffef86
     HIV-RT Binding Site join(2533..2536,1..106)
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
ORIGIN
        1 AAAACGTGGC GCCCGAACAG GGACGGATAG CTCAGTCGGT AGAGCATCAG ACTTTTAATC
       61 TGAGGGTCCA GGGTTCAAGT CCCTGTTCGG GCGCCACGTT TTTTTTatta gcagaaagtc
      121 aaaagcctcc gaccggaggc ttttgactaa aacttccctt ggggttatca ttgggtacta
      181 gtagcggccg ctgcagagtc cggcaaaaaa gggcaaggtg tcaccaccct gccctttttc
      241 tttaaaaccg aaaagattac ttcgcgttat gcaggcttcc tcgctcactg actcgctgcg
      301 ctcggtcgtt cggctgcggc gagcggtatc agctcactca aaggcggtaa tacggttatc
      361 cacagaatca ggggataacg caggaaagaa catgtgagca aaaggccagc aaaaggccag
      421 gaaccgtaaa aaggccgcgt tgctggcgtt tttccacagg ctccgccccc ctgacgagca
      481 tcacaaaaat cgacgctcaa gtcagaggtg gcgaaacccg acaggactat aaagatacca
      541 ggcgtttccc cctggaagct ccctcgtgcg ctctcctgtt ccgaccctgc cgcttaccgg
      601 atacctgtcc gcctttctcc cttcgggaag cgtggcgctt tctcatagct cacgctgtag
      661 gtatctcagt tcggtgtagg tcgttcgctc caagctgggc tgtgtgcacg aaccccccgt
      721 tcagcccgac cgctgcgcct tatccggtaa ctatcgtctt gagtccaacc cggtaagaca
      781 cgacttatcg ccactggcag cagccactgg taacaggatt agcagagcga ggtatgtagg
      841 cggtgctaca gagttcttga agtggtggcc taactacggc tacactagaa gaacagtatt
      901 tggtatctgc gctctgctga agccagttac cttcggaaaa agagttggta gctcttgatc
      961 cggcaaacaa accaccgctg gtagcggtgg tttttttgtt tgcaagcagc agattacgcg
     1021 cagaaaaaaa ggatctcaag aagatccttt gatcttttct acggggtctg acgctcagtg
     1081 gaacgaaaac tcacgttaag ggattttggt catgagatta tcaaaaagga tcttcaccta
     1141 gatcctttta aattaaaaat gaagttttaa atcaatctaa agtatatatg agtaaacttg
     1201 gtctgacagt taccaatgct taatcagtga ggcacctatc tcagcgatct gtctatttcg
     1261 ttcatccata gttgcctgac tccccgtcgt gtagataact acgatacggg agggcttacc
     1321 atctggcccc agtgctgcaa tgataccgcg cgacccacgc tcaccggctc cagatttatc
     1381 agcaataaac cagccagccg gaagggccga gcgcagaagt ggtcctgcaa ctttatccgc
     1441 ctccatccag tctattaatt gttgccggga agctagagta agtagttcgc cagttaatag
     1501 tttgcgcaac gttgttgcca ttgctacagg catcgtggtg tcacgctcgt cgtttggtat
     1561 ggcttcattc agctccggtt cccaacgatc aaggcgagtt acatgatccc ccatgttgtg
     1621 caaaaaagcg gttagctcct tcggtcctcc gatcgttgtc agaagtaagt tggccgcagt
     1681 gttatcactc atggttatgg cagcactgca taattctctt actgtcatgc catccgtaag
     1741 atgcttttct gtgactggtg agtactcaac caagtcattc tgagaatagt gtatgcggcg
     1801 accgagttgc tcttgcccgg cgtcaatacg ggataatacc gcgccacata gcagaacttt
     1861 aaaagtgctc atcattggaa aacgttcttc ggggcgaaaa ctctcaagga tcttaccgct
     1921 gttgagatcc agttcgatat aacccactcg tgcacccaac tgatcttcag catcttttac
     1981 tttcaccagc gtttctgggt gagcaaaaac aggaaggcaa aatgccgcaa aaaagggaat
     2041 aagggcgaca cggaaatgtt gaatactcat actcttcctt tttcaatatt attgaagcat
     2101 ttatcagggt tattgtctca tgagcggata catatttgaa tgtatttaga aaaataaaca
     2161 aataggggtt ccgcgcacat ttccccgaaa agtgccacct gacgtctaag aaaccattat
     2221 tatcatgaca ttaacctata aaaataggcg tatcacgagg cagaatttca gataaaaaaa
     2281 atccttagct ttcgctaagg atgatttctg gaattcgcgg ccgcttctag agTTGACGGC
     2341 TAGCTCAGTC CTAGGTACAG TGCTAGCTGG AATTGTGAGC GGATAACAAT TGAGGACGGC
     2401 ATGTCGATGC CATGCGGCTG GGATGTCGAT GCCATGCGGC TGGGATGTCG ATGCCATGCG
     2461 GCTGGGATGT CGATGCCATG CGGCTGGGAT GTCGATGCCA TGCGGCTGGG ATGTCGATGC
     2521 CATGCGGCTG GGAAAA
//`
        
sequences.seq_CoA_6x_Comp_Assembly = {};
sequences.seq_CoA_6x_Comp_Assembly.varName = "seq_CoA_6x_Comp_Assembly";
sequences.seq_CoA_6x_Comp_Assembly.name = "CoA 6x Comp Assembly";
sequences.seq_CoA_6x_Comp_Assembly.seqType = "both";
sequences.seq_CoA_6x_Comp_Assembly.comp = true;
sequences.seq_CoA_6x_Comp_Assembly.data = `LOCUS       CoA_6x_Comp_Assembly    2536 bp ds-DNA     circular     25-JUN-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     Biobricking         176..196
                         /label="BioBrick Suffix"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     primer_bind         complement(531..550)
                         /label="pBR322ori-F"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     Zinc Finger Site    complement(2491..2499)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    complement(2502..2510)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    complement(2480..2488)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     terminator          2265..2308
                         /label="bacterial terminator"
                         /ApEinfo_revcolor=#ffef86
                         /ApEinfo_fwdcolor=#ffef86
     primer_bind         2243..2261
                         /label="pBRforEco"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    complement(2458..2466)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    complement(2447..2455)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     misc_feature        1351..1351
                         /label="Point Mutation"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     Zinc Finger Site    complement(2436..2444)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    complement(2425..2433)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Biobricking         2311..2332
                         /label="BioBrick Prefix "
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     CDS                 complement(1210..2070)
                         /label="AmpR"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     Zinc Finger Site    complement(2414..2422)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    complement(2403..2411)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     promoter            complement(2071..2175)
                         /label="AmpR promoter"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Zinc Finger Site    complement(2392..2400)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    complement(2513..2521)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     misc_binding        2369..2391
                         /label="LacO"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site    complement(2524..2532)
                         /label="ZFc Site"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
     Promoter            2333..2367
                         /label="J23100 Anderson Promoter"
                         /ApEinfo_revcolor=#d59687
                         /ApEinfo_fwdcolor=#d59687
     HIV-RT Binding Site join(2533..2536,1..106)
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     primer_bind         complement(280..297)
                         /label="L4440"
                         /ApEinfo_revcolor=#75c6a9
                         /ApEinfo_fwdcolor=#75c6a9
     Zinc Finger Site    complement(2469..2477)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Terminator          107..175
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     gBlock              53..196
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     rep_origin          complement(451..1039)
                         /label="ori"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     primer_bind         1833..1852
                         /label="Amp-R"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     Backbone            197..2310
                         /label="Mutated pSB1A3"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
ORIGIN
        1 AAAACGTGGC GCCCGAACAG GGACGGATAG CTCAGTCGGT AGAGCATCAG ACTTTTAATC
       61 TGAGGGTCCA GGGTTCAAGT CCCTGTTCGG GCGCCACGTT TTTTTTatta gcagaaagtc
      121 aaaagcctcc gaccggaggc ttttgactaa aacttccctt ggggttatca ttgggtacta
      181 gtagcggccg ctgcagagtc cggcaaaaaa gggcaaggtg tcaccaccct gccctttttc
      241 tttaaaaccg aaaagattac ttcgcgttat gcaggcttcc tcgctcactg actcgctgcg
      301 ctcggtcgtt cggctgcggc gagcggtatc agctcactca aaggcggtaa tacggttatc
      361 cacagaatca ggggataacg caggaaagaa catgtgagca aaaggccagc aaaaggccag
      421 gaaccgtaaa aaggccgcgt tgctggcgtt tttccacagg ctccgccccc ctgacgagca
      481 tcacaaaaat cgacgctcaa gtcagaggtg gcgaaacccg acaggactat aaagatacca
      541 ggcgtttccc cctggaagct ccctcgtgcg ctctcctgtt ccgaccctgc cgcttaccgg
      601 atacctgtcc gcctttctcc cttcgggaag cgtggcgctt tctcatagct cacgctgtag
      661 gtatctcagt tcggtgtagg tcgttcgctc caagctgggc tgtgtgcacg aaccccccgt
      721 tcagcccgac cgctgcgcct tatccggtaa ctatcgtctt gagtccaacc cggtaagaca
      781 cgacttatcg ccactggcag cagccactgg taacaggatt agcagagcga ggtatgtagg
      841 cggtgctaca gagttcttga agtggtggcc taactacggc tacactagaa gaacagtatt
      901 tggtatctgc gctctgctga agccagttac cttcggaaaa agagttggta gctcttgatc
      961 cggcaaacaa accaccgctg gtagcggtgg tttttttgtt tgcaagcagc agattacgcg
     1021 cagaaaaaaa ggatctcaag aagatccttt gatcttttct acggggtctg acgctcagtg
     1081 gaacgaaaac tcacgttaag ggattttggt catgagatta tcaaaaagga tcttcaccta
     1141 gatcctttta aattaaaaat gaagttttaa atcaatctaa agtatatatg agtaaacttg
     1201 gtctgacagt taccaatgct taatcagtga ggcacctatc tcagcgatct gtctatttcg
     1261 ttcatccata gttgcctgac tccccgtcgt gtagataact acgatacggg agggcttacc
     1321 atctggcccc agtgctgcaa tgataccgcg cgacccacgc tcaccggctc cagatttatc
     1381 agcaataaac cagccagccg gaagggccga gcgcagaagt ggtcctgcaa ctttatccgc
     1441 ctccatccag tctattaatt gttgccggga agctagagta agtagttcgc cagttaatag
     1501 tttgcgcaac gttgttgcca ttgctacagg catcgtggtg tcacgctcgt cgtttggtat
     1561 ggcttcattc agctccggtt cccaacgatc aaggcgagtt acatgatccc ccatgttgtg
     1621 caaaaaagcg gttagctcct tcggtcctcc gatcgttgtc agaagtaagt tggccgcagt
     1681 gttatcactc atggttatgg cagcactgca taattctctt actgtcatgc catccgtaag
     1741 atgcttttct gtgactggtg agtactcaac caagtcattc tgagaatagt gtatgcggcg
     1801 accgagttgc tcttgcccgg cgtcaatacg ggataatacc gcgccacata gcagaacttt
     1861 aaaagtgctc atcattggaa aacgttcttc ggggcgaaaa ctctcaagga tcttaccgct
     1921 gttgagatcc agttcgatat aacccactcg tgcacccaac tgatcttcag catcttttac
     1981 tttcaccagc gtttctgggt gagcaaaaac aggaaggcaa aatgccgcaa aaaagggaat
     2041 aagggcgaca cggaaatgtt gaatactcat actcttcctt tttcaatatt attgaagcat
     2101 ttatcagggt tattgtctca tgagcggata catatttgaa tgtatttaga aaaataaaca
     2161 aataggggtt ccgcgcacat ttccccgaaa agtgccacct gacgtctaag aaaccattat
     2221 tatcatgaca ttaacctata aaaataggcg tatcacgagg cagaatttca gataaaaaaa
     2281 atccttagct ttcgctaagg atgatttctg gaattcgcgg ccgcttctag agTTGACGGC
     2341 TAGCTCAGTC CTAGGTACAG TGCTAGCTGG AATTGTGAGC GGATAACAAT TCCCAGCCGC
     2401 ATGGCATCGA CATCCCAGCC GCATGGCATC GACATCCCAG CCGCATGGCA TCGACATCCC
     2461 AGCCGCATGG CATCGACATC CCAGCCGCAT GGCATCGACA TCCCAGCCGC ATGGCATCGA
     2521 CATGCCGTCC TCAAAA
//`
        
sequences.seq_CoA_6x_Full_Part = {};
sequences.seq_CoA_6x_Full_Part.varName = "seq_CoA_6x_Full_Part";
sequences.seq_CoA_6x_Full_Part.name = "CoA 6x Full Part";
sequences.seq_CoA_6x_Full_Part.seqType = "both";
sequences.seq_CoA_6x_Full_Part.comp = true;
sequences.seq_CoA_6x_Full_Part.data = `LOCUS       CoA_6x_Full_Part        2923 bp ds-DNA     circular     14-JUL-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     Zinc Finger Site    2425..2433
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     misc_binding        2756..2778
                         /label="LacO"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site    complement(2790..2798)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Backbone            197..2310
                         /label="Mutated pSB1A3"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    2469..2477
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Biobricking         176..196
                         /label="BioBrick Suffix"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     CDS                 complement(1210..2070)
                         /label="AmpR"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     Zinc Finger Site    complement(2900..2908)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    2480..2488
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Terminator          107..175
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     primer_bind         2243..2261
                         /label="pBRforEco"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    2447..2455
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     misc_feature        1351..1351
                         /label="Point Mutation"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     promoter            complement(2071..2175)
                         /label="AmpR promoter"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     misc_binding        2369..2391
                         /label="LacO"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Promoter            2333..2367
                         /label="J23100 Anderson Promoter"
                         /ApEinfo_revcolor=#d59687
                         /ApEinfo_fwdcolor=#d59687
     Zinc Finger Site    complement(2867..2875)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     HIV-RT Binding Site 2533..2642
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Zinc Finger Site    2524..2532
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     primer_bind         1833..1852
                         /label="Amp-R"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     Zinc Finger Site    complement(2823..2831)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    2458..2466
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    complement(2812..2820)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    2436..2444
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     primer_bind         complement(280..297)
                         /label="L4440"
                         /ApEinfo_revcolor=#75c6a9
                         /ApEinfo_fwdcolor=#75c6a9
     Zinc Finger Site    complement(2878..2886)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     rep_origin          complement(451..1039)
                         /label="ori"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     Zinc Finger Site    2491..2499
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    complement(2856..2864)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    2502..2510
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     gBlock              53..196
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Biobricking         2311..2332
                         /label="BioBrick Prefix "
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     primer_bind         complement(531..550)
                         /label="pBR322ori-F"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     Zinc Finger Site    2392..2400
                         /label="ZFc Site"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
     Terminator          2643..2711
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    complement(2834..2842)
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    2513..2521
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    complement(2779..2787)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     terminator          2265..2308
                         /label="bacterial terminator"
                         /ApEinfo_revcolor=#ffef86
                         /ApEinfo_fwdcolor=#ffef86
     Zinc Finger Site    2403..2411
                         /label="ZFa Site"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Promoter            2720..2754
                         /label="J23100 Anderson Promoter"
                         /ApEinfo_revcolor=#d59687
                         /ApEinfo_fwdcolor=#d59687
     Zinc Finger Site    complement(2845..2853)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Scar                2712..2719
                         /label="BioBrick Scar"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     Zinc Finger Site    2414..2422
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     gBlock              2589..2713
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    complement(2889..2897)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    complement(2801..2809)
                         /label="ZFb Site"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     HIV-RT Binding Site join(2920..2923,1..106)
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Zinc Finger Site    complement(2911..2919)
                         /label="ZFc Site"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
ORIGIN
        1 AAAACGTGGC GCCCGAACAG GGACGGATAG CTCAGTCGGT AGAGCATCAG ACTTTTAATC
       61 TGAGGGTCCA GGGTTCAAGT CCCTGTTCGG GCGCCACGTT TTTTTTatta gcagaaagtc
      121 aaaagcctcc gaccggaggc ttttgactaa aacttccctt ggggttatca ttgggtacta
      181 gtagcggccg ctgcagagtc cggcaaaaaa gggcaaggtg tcaccaccct gccctttttc
      241 tttaaaaccg aaaagattac ttcgcgttat gcaggcttcc tcgctcactg actcgctgcg
      301 ctcggtcgtt cggctgcggc gagcggtatc agctcactca aaggcggtaa tacggttatc
      361 cacagaatca ggggataacg caggaaagaa catgtgagca aaaggccagc aaaaggccag
      421 gaaccgtaaa aaggccgcgt tgctggcgtt tttccacagg ctccgccccc ctgacgagca
      481 tcacaaaaat cgacgctcaa gtcagaggtg gcgaaacccg acaggactat aaagatacca
      541 ggcgtttccc cctggaagct ccctcgtgcg ctctcctgtt ccgaccctgc cgcttaccgg
      601 atacctgtcc gcctttctcc cttcgggaag cgtggcgctt tctcatagct cacgctgtag
      661 gtatctcagt tcggtgtagg tcgttcgctc caagctgggc tgtgtgcacg aaccccccgt
      721 tcagcccgac cgctgcgcct tatccggtaa ctatcgtctt gagtccaacc cggtaagaca
      781 cgacttatcg ccactggcag cagccactgg taacaggatt agcagagcga ggtatgtagg
      841 cggtgctaca gagttcttga agtggtggcc taactacggc tacactagaa gaacagtatt
      901 tggtatctgc gctctgctga agccagttac cttcggaaaa agagttggta gctcttgatc
      961 cggcaaacaa accaccgctg gtagcggtgg tttttttgtt tgcaagcagc agattacgcg
     1021 cagaaaaaaa ggatctcaag aagatccttt gatcttttct acggggtctg acgctcagtg
     1081 gaacgaaaac tcacgttaag ggattttggt catgagatta tcaaaaagga tcttcaccta
     1141 gatcctttta aattaaaaat gaagttttaa atcaatctaa agtatatatg agtaaacttg
     1201 gtctgacagt taccaatgct taatcagtga ggcacctatc tcagcgatct gtctatttcg
     1261 ttcatccata gttgcctgac tccccgtcgt gtagataact acgatacggg agggcttacc
     1321 atctggcccc agtgctgcaa tgataccgcg cgacccacgc tcaccggctc cagatttatc
     1381 agcaataaac cagccagccg gaagggccga gcgcagaagt ggtcctgcaa ctttatccgc
     1441 ctccatccag tctattaatt gttgccggga agctagagta agtagttcgc cagttaatag
     1501 tttgcgcaac gttgttgcca ttgctacagg catcgtggtg tcacgctcgt cgtttggtat
     1561 ggcttcattc agctccggtt cccaacgatc aaggcgagtt acatgatccc ccatgttgtg
     1621 caaaaaagcg gttagctcct tcggtcctcc gatcgttgtc agaagtaagt tggccgcagt
     1681 gttatcactc atggttatgg cagcactgca taattctctt actgtcatgc catccgtaag
     1741 atgcttttct gtgactggtg agtactcaac caagtcattc tgagaatagt gtatgcggcg
     1801 accgagttgc tcttgcccgg cgtcaatacg ggataatacc gcgccacata gcagaacttt
     1861 aaaagtgctc atcattggaa aacgttcttc ggggcgaaaa ctctcaagga tcttaccgct
     1921 gttgagatcc agttcgatat aacccactcg tgcacccaac tgatcttcag catcttttac
     1981 tttcaccagc gtttctgggt gagcaaaaac aggaaggcaa aatgccgcaa aaaagggaat
     2041 aagggcgaca cggaaatgtt gaatactcat actcttcctt tttcaatatt attgaagcat
     2101 ttatcagggt tattgtctca tgagcggata catatttgaa tgtatttaga aaaataaaca
     2161 aataggggtt ccgcgcacat ttccccgaaa agtgccacct gacgtctaag aaaccattat
     2221 tatcatgaca ttaacctata aaaataggcg tatcacgagg cagaatttca gataaaaaaa
     2281 atccttagct ttcgctaagg atgatttctg gaattcgcgg ccgcttctag agTTGACGGC
     2341 TAGCTCAGTC CTAGGTACAG TGCTAGCTGG AATTGTGAGC GGATAACAAT TGAGGACGGC
     2401 ATGTCGATGC CATGCGGCTG GGATGTCGAT GCCATGCGGC TGGGATGTCG ATGCCATGCG
     2461 GCTGGGATGT CGATGCCATG CGGCTGGGAT GTCGATGCCA TGCGGCTGGG ATGTCGATGC
     2521 CATGCGGCTG GGAAAAAAAA CGTGGCGCCC GAACAGGGAC GGATAGCTCA GTCGGTAGAG
     2581 CATCAGACTT TTAATCTGAG GGTCCAGGGT TCAAGTCCCT GTTCGGGCGC CACGTTTTTT
     2641 TTattagcag aaagtcaaaa gcctccgacc ggaggctttt gactaaaact tcccttgggg
     2701 ttatcattgg gtactagagT TGACGGCTAG CTCAGTCCTA GGTACAGTGC TAGCTGGAAT
     2761 TGTGAGCGGA TAACAATTCC CAGCCGCATG GCATCGACAT CCCAGCCGCA TGGCATCGAC
     2821 ATCCCAGCCG CATGGCATCG ACATCCCAGC CGCATGGCAT CGACATCCCA GCCGCATGGC
     2881 ATCGACATCC CAGCCGCATG GCATCGACAT GCCGTCCTCA AAA
//`
        
sequences.seq_CoA_6x_r_oligo_Complement_Duplex = {};
sequences.seq_CoA_6x_r_oligo_Complement_Duplex.varName = "seq_CoA_6x_r_oligo_Complement_Duplex";
sequences.seq_CoA_6x_r_oligo_Complement_Duplex.name = "CoA 6x r_oligo Complement Duplex";
sequences.seq_CoA_6x_r_oligo_Complement_Duplex.seqType = "linear";
sequences.seq_CoA_6x_r_oligo_Complement_Duplex.comp = true;
sequences.seq_CoA_6x_r_oligo_Complement_Duplex.data = `LOCUS       CoA_6x_r_oligo_Complemen 199 bp ds-DNA     linear       25-JUN-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     misc_binding    19..41
                     /label="LacO"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site complement(42..50)
                     /label="ZFb Site"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site complement(53..61)
                     /label="ZFa Site"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site complement(64..72)
                     /label="ZFb Site"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site complement(75..83)
                     /label="ZFa Site"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site complement(86..94)
                     /label="ZFb Site"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site complement(97..105)
                     /label="ZFa Site"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site complement(108..116)
                     /label="ZFb Site"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site complement(119..127)
                     /label="ZFa Site"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site complement(130..138)
                     /label="ZFb Site"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site complement(141..149)
                     /label="ZFa Site"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site complement(152..160)
                     /label="ZFb Site"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site complement(163..171)
                     /label="ZFa Site"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site complement(174..182)
                     /label="ZFc Site"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
ORIGIN
        1 GAACAGGGTC TCCTAGCTGG AATTGTGAGC GGATAACAAT TCCCAGCCGC ATGGCATCGA
       61 CATCCCAGCC GCATGGCATC GACATCCCAG CCGCATGGCA TCGACATCCC AGCCGCATGG
      121 CATCGACATC CCAGCCGCAT GGCATCGACA TCCCAGCCGC ATGGCATCGA CATGCCGTCC
      181 TCAAAACGAG ACCAACCTG
//`
        
sequences.seq_CoA_6x_r_oligo_Duplex_113132_FWD_1 = {};
sequences.seq_CoA_6x_r_oligo_Duplex_113132_FWD_1.varName = "seq_CoA_6x_r_oligo_Duplex_113132_FWD_1";
sequences.seq_CoA_6x_r_oligo_Duplex_113132_FWD_1.name = "CoA 6x r_oligo Duplex 113-132 FWD 1";
sequences.seq_CoA_6x_r_oligo_Duplex_113132_FWD_1.seqType = "linear";
sequences.seq_CoA_6x_r_oligo_Duplex_113132_FWD_1.comp = false;
sequences.seq_CoA_6x_r_oligo_Duplex_113132_FWD_1.data = `LOCUS       CoA_6x_r_oligo_Duplex_113 20 bp ds-DNA     linear       07-JUL-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 TGGGATGTCG ATGCCATGCG
//`
        
sequences.seq_CoA_6x_r_oligo_Duplex_170189_REV_1 = {};
sequences.seq_CoA_6x_r_oligo_Duplex_170189_REV_1.varName = "seq_CoA_6x_r_oligo_Duplex_170189_REV_1";
sequences.seq_CoA_6x_r_oligo_Duplex_170189_REV_1.name = "CoA 6x r_oligo Duplex 170-189 REV 1";
sequences.seq_CoA_6x_r_oligo_Duplex_170189_REV_1.seqType = "linear";
sequences.seq_CoA_6x_r_oligo_Duplex_170189_REV_1.comp = false;
sequences.seq_CoA_6x_r_oligo_Duplex_170189_REV_1.data = `LOCUS       CoA_6x_r_oligo_Duplex_170 20 bp ds-DNA     linear       07-JUL-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 TCGTTTTCCC AGCCGCATGG
//`
        
sequences.seq_CoA_6x_r_oligo_Duplex = {};
sequences.seq_CoA_6x_r_oligo_Duplex.varName = "seq_CoA_6x_r_oligo_Duplex";
sequences.seq_CoA_6x_r_oligo_Duplex.name = "CoA 6x r_oligo Duplex";
sequences.seq_CoA_6x_r_oligo_Duplex.seqType = "linear";
sequences.seq_CoA_6x_r_oligo_Duplex.comp = true;
sequences.seq_CoA_6x_r_oligo_Duplex.data = `LOCUS       CoA_6x_r_oligo_Duplex    199 bp ds-DNA     linear       07-JUL-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     misc_binding    19..41
                     /label="LacO"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site 42..50
                     /label="ZFc Site"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     Zinc Finger Site 53..61
                     /label="ZFa Site"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site 64..72
                     /label="ZFb Site"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site 75..83
                     /label="ZFa Site"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site 86..94
                     /label="ZFb Site"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site 97..105
                     /label="ZFa Site"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site 108..116
                     /label="ZFb Site"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site 119..127
                     /label="ZFa Site"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site 130..138
                     /label="ZFb Site"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site 141..149
                     /label="ZFa Site"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site 152..160
                     /label="ZFb Site"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site 163..171
                     /label="ZFa Site"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site 174..182
                     /label="ZFb Site"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     primer          113..132
                     /label="CoA 6x r_oligo Duplex 113-132 FWD 1"
                     /note="sequence: TGGGATGTCGATGCCATGCG"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     primer          complement(170..189)
                     /label="CoA 6x r_oligo Duplex 170-189 REV 1"
                     /note="sequence: TCGTTTTCCCAGCCGCATGG"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
ORIGIN
        1 GAACAGGGTC TCCTAGCTGG AATTGTGAGC GGATAACAAT TGAGGACGGC ATGTCGATGC
       61 CATGCGGCTG GGATGTCGAT GCCATGCGGC TGGGATGTCG ATGCCATGCG GCTGGGATGT
      121 CGATGCCATG CGGCTGGGAT GTCGATGCCA TGCGGCTGGG ATGTCGATGC CATGCGGCTG
      181 GGAAAACGAG ACCAACCTG
//`
        
sequences.seq_gblock_1 = {};
sequences.seq_gblock_1.varName = "seq_gblock_1";
sequences.seq_gblock_1.name = "g-block 1";
sequences.seq_gblock_1.seqType = "linear";
sequences.seq_gblock_1.comp = true;
sequences.seq_gblock_1.data = `LOCUS       g-block_1                300 bp ds-DNA     linear       07-SEP-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     misc_feature    164..213
                     /label="sTRSV HHRz"
                     /ApEinfo_revcolor=#f8d3a9
                     /ApEinfo_fwdcolor=#f8d3a9
     Biobricking     68..89
                     /label="BioBrick Prefix "
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_binding    126..148
                     /label="LacO"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_feature    90..124
                     /label="BBa_J23109'"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
     RBS             222..233
                     /label="strong bacterial ribosome binding site (Elowitz and Leibler, 2000)"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
ORIGIN
        1 TGTTGATTGG TGGCACATAA GTAATACCAT GGTCCCTGAA ATTCGGCTCA ACGGTCCGTC
       61 TCATCTGGAA TTCGCGGCCG CTTCTAGAGt ttacagctag ctcagtccta gggactgtgc
      121 tagcTGGAAT TGTGAGCGGA TAACAATTct atggactatg tttCTGTCAC CGGATGTGCT
      181 TTCCGGTCTG ATGAGTCCGT GAGGACGAAA CAGtaccagt gaaagaggag aaaGGATTGA
      241 GACGGTAACA GTTACTTCGA GCGTAATGTC TCAAATGGCG TAGAACGGCA ATGACTGTTc
//`
        
sequences.seq_gblock_3 = {};
sequences.seq_gblock_3.varName = "seq_gblock_3";
sequences.seq_gblock_3.name = "g-block 3";
sequences.seq_gblock_3.seqType = "linear";
sequences.seq_gblock_3.comp = true;
sequences.seq_gblock_3.data = `LOCUS       g-block_3                300 bp ds-DNA     linear       07-SEP-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     Biobricking     199..219
                     /label="BioBrick Suffix"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     terminator      112..198
                     /label="rrnB T1 terminator"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     primer          complement(177..198)
                     /label="pMLRT REV"
                     /note="sequence: CTCACGCGTCTCAGCTACTGCAGCGGCCGCTACTAGTAatttgtcctactcaggagagcg"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          complement(177..198)
                     /label="pMLRT REV"
                     /note="sequence: CTCACGCGTCTCAGCTAatttgtcctactcaggagagcg"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          complement(170..198)
                     /label="pMLRT REV"
                     /note="sequence: atttgtcctactcaggagagcgttcaccg"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
ORIGIN
        1 GGGAGGTGGA ATAGTTTCGA ACGATGGTTA TTAATCGTAA TAACGGAACG CTGTCTGGAG
       61 GATGATTCTC ACGTCTCAAG GGccttcagg catgcaagcc tctggaggca tcaaataaaa
      121 cgaaaggctc agtcgaaaga ctgggccttt cgttttatct gttgtttgtc ggtgaacgct
      181 ctcctgagta ggacaaatTA CTAGTAGCGG CCGCTGCAGA GTCAGAGACG GTAACATCGA
      241 AGGGGAACTA TTTCGTGGGG CGAGCCCACA CCGTCTCTTC TGCGGAAGAC TTAACACGTT
//`
        
sequences.seq_gBlock_A = {};
sequences.seq_gBlock_A.varName = "seq_gBlock_A";
sequences.seq_gBlock_A.name = "gBlock A";
sequences.seq_gBlock_A.seqType = "linear";
sequences.seq_gBlock_A.comp = true;
sequences.seq_gBlock_A.data = `LOCUS       gBlock_A                 995 bp ds-DNA     linear       02-SEP-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     misc_feature    863..870
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     misc_feature    785..790
                     /label="double stop codon"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     misc_feature    18..979
                     /label="gBlock A"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     stem_loop       883..905
                     /label="stem loop"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
     misc_feature    110..815
                     /label="RFP"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     misc_feature    82..89
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     misc_feature    97..101
                     /label="strong RBS"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     misc_feature    110..815
                     /label="BBa_E1010 (RFP)"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     misc_feature    110..112
                     /label="start codon"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_feature    90..104
                     /label="BBa_B0030 (strong RBS)"
                     /ApEinfo_revcolor=#b4abac
                     /ApEinfo_fwdcolor=#b4abac
     misc_feature    822..862
                     /label="BBa_B0012"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     misc_feature    822..916
                     /label="BBa_B0014 (double terminator)"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     misc_feature    871..916
                     /label="BBa_B0011"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     misc_feature    18..39
                     /label="BioBrick Prefix "
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_feature    90..916
                     /label="From BBa_K3114015"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     misc_feature    794..799
                     /label="double stop codon"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     misc_feature    40..74
                     /label="BBa_J23105"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
ORIGIN
        1 GACTTACGTC TCGtctggaa ttcgcggccg cttctagagt ttacggctag ctcagtccta
       61 ggtactatgc tagcCGAGAC Ctactagaga ttaaagagga gaaatactaa tggcttcctc
      121 cgaagacgtt atcaaagagt tcatgcgttt caaagttcgt atggaaggtt ccgttaacgg
      181 tcacgagttc gaaatcgaag gtgaaggtga aggtcgtccg tacgaaggta cccagaccgc
      241 taaactgaaa gttaccaaag gtggtccgct gccgttcgct tgggacatcc tgtccccgca
      301 gttccagtac ggttccaaag cttacgttaa acacccggct gacatcccgg actacctgaa
      361 actgtccttc ccggaaggtt tcaaatggga acgtgttatg aacttcgaag acggtggtgt
      421 tgttaccgtt acccaggact cctccctgca agacggtgag ttcatctaca aagttaaact
      481 gcgtggtacc aacttcccgt ccgacggtcc ggttatgcag aaaaaaacca tgggttggga
      541 agcttccacc gaacgtatgt acccggaaga cggtgctctg aaaggtgaaa tcaaaatgcg
      601 tctgaaactg aaagacggtg gtcactacga cgctgaagtt aaaaccacct acatggctaa
      661 aaaaccggtt cagctgccgg gtgcttacaa aaccgacatc aaactggaca tcacctccca
      721 caacgaagac tacaccatcg ttgaacagta cgaacgtgct gaaggtcgtc actccaccgg
      781 tgcttaataa cgctgatagt gctagtgtag atcgctaata atcacactgg ctcaccttcg
      841 ggtgggcctt tctgcgttta tatactagag agagaatata aaaagccaga ttattaatcc
      901 ggctttttta ttatttGGTC TCGAAAAAAA ACGTGGCGCC CGAACAGGGA CGGATAGCTC
      961 AGTCGGTAGA GCATCAGACT TTCGAGACGC TTGTG
//`
        
sequences.seq_gBlock_B = {};
sequences.seq_gBlock_B.varName = "seq_gBlock_B";
sequences.seq_gBlock_B.name = "gBlock B";
sequences.seq_gBlock_B.seqType = "linear";
sequences.seq_gBlock_B.comp = true;
sequences.seq_gBlock_B.data = `LOCUS       gBlock_B                 175 bp ds-DNA     linear       20-JUN-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     Biobricking     138..158
                     /label="BioBrick Suffix"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_feature    15..158
                     /label="gBlock B"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     misc            72..111
                     /label="identical to E. coli MG1655 between tonB and yciA"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     misc_feature    69..137
                     /label="B0054"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     stem_loop       79..110
                     /label="stem loop"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
ORIGIN
        1 GATCGTCGTC TCCCTTTTAA TCTGAGGGTC CAGGGTTCAA GTCCCTGTTC GGGCGCCACG
       61 TTTTTTTTat tagcagaaag tcaaaagcct ccgaccggag gcttttgact aaaacttccc
      121 ttggggttat cattgggtac tagtagcggc cgctgcagag tcCGAGACGT TCCAT
//`
        
sequences.seq_GFP_final_synthesized_for_pSB1T3_linear = {};
sequences.seq_GFP_final_synthesized_for_pSB1T3_linear.varName = "seq_GFP_final_synthesized_for_pSB1T3_linear";
sequences.seq_GFP_final_synthesized_for_pSB1T3_linear.name = "GFP final synthesized for pSB1T3 linear";
sequences.seq_GFP_final_synthesized_for_pSB1T3_linear.seqType = "linear";
sequences.seq_GFP_final_synthesized_for_pSB1T3_linear.comp = true;
sequences.seq_GFP_final_synthesized_for_pSB1T3_linear.data = `LOCUS       GFP_final_synthesized_f 1240 bp ds-DNA     linear       25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     misc_feature         91..405
                          /label="Zif268 + linker"
                          /ApEinfo_revcolor=#84b0dc
                          /ApEinfo_fwdcolor=#84b0dc
     Recognition Sequence 7..12
                          /label="BsaI 5' site"
                          /ApEinfo_revcolor=#f58a5e
                          /ApEinfo_fwdcolor=#f58a5e
     misc_feature         1..6
                          /label="rando bases"
                          /ApEinfo_revcolor=#b7e6d7
                          /ApEinfo_fwdcolor=#b7e6d7
     misc_feature         1235..1240
                          /label="rando bases"
                          /ApEinfo_revcolor=#d6b295
                          /ApEinfo_fwdcolor=#d6b295
     misc_feature         18..52
                          /label="new promoter"
                          /ApEinfo_revcolor=#faac61
                          /ApEinfo_fwdcolor=#faac61
     misc_feature         406..1122
                          /label="GFP"
                          /ApEinfo_revcolor=#b1ff67
                          /ApEinfo_fwdcolor=#b1ff67
     Recognition Sequence 1229..1234
                          /label="BsaI 3' site"
                          /ApEinfo_revcolor=#f58a5e
                          /ApEinfo_fwdcolor=#f58a5e
     Scar                 1170..1177
                          /label="BioBrick Scar"
                          /ApEinfo_revcolor=#9eafd2
                          /ApEinfo_fwdcolor=#9eafd2
     misc_feature         1129..1223
                          /label="BBa_B0014 Double Terminator"
                          /ApEinfo_revcolor=#9eafd2
                          /ApEinfo_fwdcolor=#9eafd2
     misc_feature         77..90
                          /label="RBS - J61111"
                          /ApEinfo_revcolor=#ff9ccd
                          /ApEinfo_fwdcolor=#ff9ccd
     misc_binding         54..76
                          /label="LacO"
                          /ApEinfo_revcolor=#84b0dc
                          /ApEinfo_fwdcolor=#84b0dc
ORIGIN
        1 GATACGGGTC TCACGTTttt acggctagct cagtcctagg tatagtgcta gcTGGAATTG
       61 TGAGCGGATA ACAATTGAAA GAGGCGATAC ATGCACCATC ACCATCATCA CCCGGGTGAG
      121 AAGCCATATG CCTGCCCCGT GGAAAGCTGC GATCGTCGTT TCAGTCGCTC TGATGAACTG
      181 ACACGCCACA TCAGAATACA TACCGGGCAG AAACCGTTTC AATGTCGCAT TTGTATGCGC
      241 AACTTTTCGC GCAGCGACCA TTTAACTACG CATATCCGTA CCCACACTGG TGAAAAACCT
      301 TTCGCGTGTG ATATTTGCGG ACGAAAATTT GCACGGTCAG ACGAGCGTAA ACGTCATACC
      361 AAAATTCATA CGGGCGGCGG CAGCGGCGGC GGTAGTGGTG GGTCCcgtaa aggagaagaa
      421 cttttcactg gagttgtccc aattcttgtt gaattagatg gtgatgttaa tgggcacaaa
      481 ttttctgtca gtggagaggg tgaaggtgat gcaacatacg gaaaacttac ccttaaattt
      541 atttgcacta ctggaaaact acctgttcca tggccaacac ttgtcactac tttcggttat
      601 ggtgttcaat gctttgcgag atacccagat catatgaaac agcatgactt tttcaagagt
      661 gccatgcccg aaggttatgt acaggaaaga actatatttt tcaaagatga cgggaactac
      721 aagacacgtg ctgaagtcaa gtttgaaggt gatacccttg ttaatagaat cgagttaaaa
      781 ggtattgatt ttaaagaaga tggaaacatt cttggacaca aattggaata caactataac
      841 tcacacaatg tatacatcat ggcagacaaa caaaagaatg gaatcaaagt taacttcaaa
      901 attagacaca acattgaaga tggaagcgtt caactagcag accattatca acaaaatact
      961 ccaattggcg atggccctgt ccttttacca gacaaccatt acctgtccac acaatctgcc
     1021 ctttcgaaag atcccaacga aaagAGGgac cacatggtcc ttcttgagtt tgtaacagct
     1081 gctgggatta cacatggcat ggatgaacta tacaaataat aatggctgtc acactggctc
     1141 accttcgggt gggcctttct gcgtttatat actagagaga gaatataaaa agccagatta
     1201 ttaatccggc ttttttatta tttTGCCaGA GACCAGGCTT
//`
        
sequences.seq_GFP_Fusion_in_TetR = {};
sequences.seq_GFP_Fusion_in_TetR.varName = "seq_GFP_Fusion_in_TetR";
sequences.seq_GFP_Fusion_in_TetR.name = "GFP Fusion in TetR";
sequences.seq_GFP_Fusion_in_TetR.seqType = "both";
sequences.seq_GFP_Fusion_in_TetR.comp = true;
sequences.seq_GFP_Fusion_in_TetR.data = `LOCUS       GFP_Fusion_in_TetR      3675 bp ds-DNA     circular     25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     misc_feature    2539..2853
                     /label="Zif268 + linker"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_feature    2466..2500
                     /label="new promoter"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     terminator      2394..2437
                     /label="bacterial terminator"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     misc_feature    2525..2538
                     /label="RBS - J61111"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
     primer_bind     complement(103..120)
                     /label="L4440"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     Biobricking     2440..2461
                     /label="BioBrick Prefix "
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_feature    3672..3675
                     /label="3' overhang"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     Scar            3618..3625
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     terminator      22..79
                     /label="his operon terminator"
                     /ApEinfo_revcolor=#d59687
                     /ApEinfo_fwdcolor=#d59687
     misc_feature    3577..3671
                     /label="BBa_B0014 Double Terminator"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     Biobricking     1..21
                     /label="BioBrick Suffix"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_feature    2854..3570
                     /label="GFP"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     misc_feature    1..21
                     /label="BioBrick suffix"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     primer_bind     2372..2390
                     /label="pBRforEco"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     rep_origin      complement(274..862)
                     /label="ori"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     misc_feature    2462..2465
                     /label="5' overhang"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     primer_bind     complement(354..373)
                     /label="pBR322ori-F"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     CDS             1128..2312
                     /label="TetR"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     misc_feature    2440..2461
                     /label="BioBrick prefix"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     primer          complement(2444..2461)
                     /label="Copy of pSB1T3 REV"
                     /note="sequence: AAGGTCGGTCTCCCTCTctctagaagcggccgcga"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          1..18
                     /label="Copy of pSB1T3 FWD"
                     /note="sequence: AAGGTCGGTCTCCTACTtactagtagcggccgctg"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
ORIGIN
        1 tactagtagc ggccgctgca gtccggcaaa aaagggcaag gtgtcaccac cctgcccttt
       61 ttctttaaaa ccgaaaagat tacttcgcgt tatgcaggct tcctcgctca ctgactcgct
      121 gcgctcggtc gttcggctgc ggcgagcggt atcagctcac tcaaaggcgg taatacggtt
      181 atccacagaa tcaggggata acgcaggaaa gaacatgtga gcaaaaggcc agcaaaaggc
      241 caggaaccgt aaaaaggccg cgttgctggc gtttttccac aggctccgcc cccctgacga
      301 gcatcacaaa aatcgacgct caagtcagag gtggcgaaac ccgacaggac tataaagata
      361 ccaggcgttt ccccctggaa gctccctcgt gcgctctcct gttccgaccc tgccgcttac
      421 cggatacctg tccgcctttc tcccttcggg aagcgtggcg ctttctcata gctcacgctg
      481 taggtatctc agttcggtgt aggtcgttcg ctccaagctg ggctgtgtgc acgaaccccc
      541 cgttcagccc gaccgctgcg ccttatccgg taactatcgt cttgagtcca acccggtaag
      601 acacgactta tcgccactgg cagcagccac tggtaacagg attagcagag cgaggtatgt
      661 aggcggtgct acagagttct tgaagtggtg gcctaactac ggctacacta gaagaacagt
      721 atttggtatc tgcgctctgc tgaagccagt taccttcgga aaaagagttg gtagctcttg
      781 atccggcaaa caaaccaccg ctggtagcgg tggttttttt gtttgcaagc agcagattac
      841 gcgcagaaaa aaaggatctc aagaagatcc tttgatcttt tctacggggt ctgacgctca
      901 gtggaacgaa aactcacgtt aagggatttt ggtcatgaga ttatcaaaaa ggatcttcac
      961 ctagatcctt ttaaattaaa aatgaagttt taaatcaatc taaagtatat atgagtaaac
     1021 ttggtctgac agctcgagat tctcatgttt gacagcttat catcgataag ctttaatgcg
     1081 gtagtttatc acagttaaat tgctaacgca gtcaggcacc gtgtatgaaa tctaacaatg
     1141 cgctcatcgt catcctcggc accgtcaccc tggatgctgt aggcataggc ttggttatgc
     1201 cggtactgcc gggcctcttg cgggatatcg tccattccga cagcatcgcc agtcactatg
     1261 gcgtgctgct agcgctatat gcgttgatgc aatttctatg cgcacccgtt ctcggagcac
     1321 tgtccgaccg ctttggccgc cgcccagtcc tgctcgcttc gctacttgga gccactatcg
     1381 actacgcgat catggcgacc acacccgtcc tgtggatcct ctacgccgga cgcatcgtgg
     1441 ccggcatcac cggcgccaca ggtgcggttg ctggcgccta tatcgccgac atcaccgatg
     1501 gggaagatcg ggctcgccac ttcgggctca tgagcgcttg tttcggcgtg ggtatggtgg
     1561 caggccccgt ggccggggga ctgttgggcg ccatctcctt gcatgcacca ttccttgcgg
     1621 cggcggtgct caacggcctc aacctactac tgggctgctt cctaatgcag gagtcgcata
     1681 agggagagcg tcgaccgatg cccttgagag ccttcaaccc agtcagctcc ttccggtggg
     1741 cgcggggcat gactatcgtc gccgcactta tgactgtctt ctttatcatg caactcgtag
     1801 gacaggtgcc ggcagcgctc tgggtcattt tcggcgagga ccgctttcgc tggagcgcga
     1861 cgatgatcgg cctgtcgctt gcggtattcg gaatcttgca cgccctcgct caagccttcg
     1921 tcactggtcc cgccaccaaa cgtttcggcg agaagcaggc cattatcgcc ggcatggcgg
     1981 ccgacgcgct gggctacgtc ttgctggcgt tcgcgacgcg aggctggatg gccttcccca
     2041 ttatgattct tctcgcttcc ggcggcatcg ggatgcccgc gttgcaggcc atgctgtcca
     2101 ggcaggtaga tgacgaccat cagggacagc ttcaaggatc gctcgcggct cttaccagcc
     2161 taacttcgat cactggaccg ctgatcgtca cggcgattta tgccgcctcg gcgagcacat
     2221 ggaacgggtt ggcatggatt gtaggcgccg ccctatacct tgtctgcctc cccgcgttgc
     2281 gtcgcggtgc atggagccgg gccacctcga cctaactcga gtgccacctg acgtctaaga
     2341 aaccattatt atcatgacat taacctataa aaataggcgt atcacgaggc agaatttcag
     2401 ataaaaaaaa tccttagctt tcgctaagga tgatttctgg aattcgcggc cgcttctaga
     2461 gAGAGtttac ggctagctca gtcctaggta tagtgctagc TGGAATTGTG AGCGGATAAC
     2521 AATTGAAAGA GGCGATACAT GCACCATCAC CATCATCACC CGGGTGAGAA GCCATATGCC
     2581 TGCCCCGTGG AAAGCTGCGA TCGTCGTTTC AGTCGCTCTG ATGAACTGAC ACGCCACATC
     2641 AGAATACATA CCGGGCAGAA ACCGTTTCAA TGTCGCATTT GTATGCGCAA CTTTTCGCGC
     2701 AGCGACCATT TAACTACGCA TATCCGTACC CACACTGGTG AAAAACCTTT CGCGTGTGAT
     2761 ATTTGCGGAC GAAAATTTGC ACGGTCAGAC GAGCGTAAAC GTCATACCAA AATTCATACG
     2821 GGCGGCGGCA GCGGCGGCGG TAGTGGTGGG TCCcgtaaag gagaagaact tttcactgga
     2881 gttgtcccaa ttcttgttga attagatggt gatgttaatg ggcacaaatt ttctgtcagt
     2941 ggagagggtg aaggtgatgc aacatacgga aaacttaccc ttaaatttat ttgcactact
     3001 ggaaaactac ctgttccatg gccaacactt gtcactactt tcggttatgg tgttcaatgc
     3061 tttgcgagat acccagatca tatgaaacag catgactttt tcaagagtgc catgcccgaa
     3121 ggttatgtac aggaaagaac tatatttttc aaagatgacg ggaactacaa gacacgtgct
     3181 gaagtcaagt ttgaaggtga tacccttgtt aatagaatcg agttaaaagg tattgatttt
     3241 aaagaagatg gaaacattct tggacacaaa ttggaataca actataactc acacaatgta
     3301 tacatcatgg cagacaaaca aaagaatgga atcaaagtta acttcaaaat tagacacaac
     3361 attgaagatg gaagcgttca actagcagac cattatcaac aaaatactcc aattggcgat
     3421 ggccctgtcc ttttaccaga caaccattac ctgtccacac aatctgccct ttcgaaagat
     3481 cccaacgaaa agAGGgacca catggtcctt cttgagtttg taacagctgc tgggattaca
     3541 catggcatgg atgaactata caaataataa tggctgtcac actggctcac cttcgggtgg
     3601 gcctttctgc gtttatatac tagagagaga atataaaaag ccagattatt aatccggctt
     3661 ttttattatt tTACT
//`
        
sequences.seq_GGE114 = {};
sequences.seq_GGE114.varName = "seq_GGE114";
sequences.seq_GGE114.name = "GGE114";
sequences.seq_GGE114.seqType = "both";
sequences.seq_GGE114.comp = true;
sequences.seq_GGE114.data = `LOCUS       (Addgene_#120731_)_GGE1 5268 bp ds-DNA     circular     06-OCT-2020
DEFINITION  .
KEYWORDS    "accession:addgene_120731_229341"                                  
SOURCE      synthetic DNA construct                                            
  ORGANISM  synthetic DNA construct                                            
FEATURES             Location/Qualifiers
     terminator      4070..4113
                     /label="bacterial terminator"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     misc_feature    2002..4115
                     /label="pSB1A3 Region"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     protein_bind    4452..4485
                     /label="loxP"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     source          1..5268
                     /label="source"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     primer_bind     3638..3657
                     /label="Amp-R"
                     /ApEinfo_revcolor=#b4abac
                     /ApEinfo_fwdcolor=#b4abac
     promoter        complement(3876..3980)
                     /label="AmpR promoter"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     CDS             722..1399
                     /label="mRFP1"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     CDS             complement(3015..3875)
                     /label="AmpR"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     rep_origin      complement(2256..2844)
                     /label="ori"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     promoter        632..662
                     /label="lac promoter"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     primer_bind     complement(2085..2102)
                     /label="L4440"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     terminator      2004..2061
                     /label="his operon terminator"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     protein_bind    670..686
                     /label="lac operator"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     protein_bind    596..617
                     /label="CAP binding site"
                     /ApEinfo_revcolor=#d59687
                     /ApEinfo_fwdcolor=#d59687
     terminator      1444..1515
                     /label="rrnB T1 terminator"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     primer_bind     4048..4066
                     /label="pBRforEco"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     primer_bind     complement(2336..2355)
                     /label="pBR322ori-F"
                     /ApEinfo_revcolor=#b4abac
                     /ApEinfo_fwdcolor=#b4abac
     misc_feature    3156..3156
                     /label="Point Mutation"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     terminator      1531..1558
                     /label="T7Te terminator"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     RBS             704..715
                     /label="strong bacterial ribosome binding site (Elowitz and Leibler, 2000)"
                     /ApEinfo_revcolor=#d59687
                     /ApEinfo_fwdcolor=#d59687
     primer          2002..2019
                     /label="Linear pSB1A3 BsmBI Fwd"
                     /note="sequence: CTATTTCGTCTCCagtccggcaaaaaagggc"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     primer          complement(4088..4115)
                     /label="BBa_Prefix & Promoter SDM Rev"
                     /note="sequence: cagaaatcatccttagcgaaagctaagg"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          complement(4093..4115)
                     /label="BsaI pSB1A3 Rev"
                     /note="sequence: ATCTTAGGTCTCTCTCCcagaaatcatccttagcgaaagc"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     primer          4116..4135
                     /label="BBa_Prefix & Promoter SDM Fwd"
                     /note="sequence: GAATTCGCGGCCGCTTCTAGTTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGCgaattcgaagagcctgcggc"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     primer          2002..2019
                     /label="BsaI pSB1A3 Fwd"
                     /note="sequence: CTCTCAGGTCTCATGCCagtccggcaaaaaagggc"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     primer          complement(4093..4115)
                     /label="Linear pSB1A3 BsmBI Rev"
                     /note="sequence: ATTCCCCGTCTCCcagaaatcatccttagcgaaagc"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     primer          complement(4093..4115)
                     /label="pSB1A3 SapI rev"
                     /note="sequence: CCCGCTCTTCAGTGcagaaatcatccttagcgaaagc"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     primer          2002..2019
                     /label="pSB1A3 fwd SapI"
                     /note="sequence: AAAGCTCTTCAGGAagtccggcaaaaaagggc"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     primer          2002..2023
                     /label="Linear pSB1A3 BsmBI Fwd"
                     /note="sequence: CTATTTCGTCTCGTTACagtccggcaaaaaagggcaagg"
                     /ApEinfo_revcolor=#d6b295
                     /ApEinfo_fwdcolor=#d6b295
ORIGIN
        1 gaaaccgtgc ttaagagcaa gttccttgag ggggagcaca gtgccggcgt aggtgaagtc
       61 gtcaatgatg tcgatatggg tcttgatcat gcacacataa ggtccgacct tatcggcaag
      121 ctcaatgagc tccttggtgg tggtaacatc cagagaagca cacaggttgg ttttcttggc
      181 tgccacgagc ttgagcactc gagcggcaaa ggcggacttg tggacgttag ctcgagcttc
      241 gtaggagggc attttggtgg tgaagaggag actgaaataa atttagtctg cagaactttt
      301 tatcggaacc ttatctgggg cagtgaagta tatgttatgg taatagttac gagttagttg
      361 aacttataga tagactggac tatacggcta tcggtccaaa ttagaaagaa cgtcaatggc
      421 tctctgggcg cgaattcgta taacttcgta tagcaggagt tatccgaagc gaacggtgag
      481 accggatccc tagagcaata cgcaaaccgc ctctccccgc gcgttggccg attcattaat
      541 gcagctggca cgacaggttt cccgactgga aagcgggcag tgagcgcaac gcaattaatg
      601 tgagttagct cactcattag gcaccccagg ctttacactt tatgcttccg gctcgtatgt
      661 tgtgtggaat tgtgagcgga taacaatttc acacatacta gagaaagagg agaaatacta
      721 gatggcttcc tccgaagacg ttatcaaaga gttcatgcgt ttcaaagttc gtatggaagg
      781 ttccgttaac ggtcacgagt tcgaaatcga aggtgaaggt gaaggtcgtc cgtacgaagg
      841 tacccagacc gctaaactga aagttaccaa aggtggtccg ctgccgttcg cttgggacat
      901 cctgtccccg cagttccagt acggttccaa agcttacgtt aaacacccgg ctgacatccc
      961 ggactacctg aaactgtcct tcccggaagg tttcaaatgg gaacgtgtta tgaacttcga
     1021 agacggtggt gttgttaccg ttacccagga ctcctccctg caagacggtg agttcatcta
     1081 caaagttaaa ctgcgtggta ccaacttccc gtccgacggt ccggttatgc agaaaaaaac
     1141 catgggttgg gaagcttcca ccgaacgtat gtacccggaa gacggtgctc tgaaaggtga
     1201 aatcaaaatg cgtctgaaac tgaaagacgg tggtcactac gacgctgaag ttaaaaccac
     1261 ctacatggct aaaaaaccgg ttcagctgcc gggtgcttac aaaaccgaca tcaaactgga
     1321 catcacctcc cacaacgaag actacaccat cgttgaacag tacgaacgtg ctgaaggtcg
     1381 tcactccacc ggtgcttaat aacgctgata gtgctagtgt agatcgctac tagagccagg
     1441 catcaaataa aacgaaaggc tcagtcgaaa gactgggcct ttcgttttat ctgttgtttg
     1501 tcggtgaacg ctctctacta gagtcacact ggctcacctt cgggtgggcc tttctgcgtt
     1561 tatatatgta cagcggtctc tgagtcatgt gtaacactcg ctctggagag ttagtcatcc
     1621 gacagggtaa ctctaatctc ccaacacctt attaactctg cgtaactgta actcttcttg
     1681 ccacgtcgat cttactcaat tttcctgctc atcatctgct ggattgttgt ctatcgtctg
     1741 gctctaatac atttattgtt tattgcccaa acaactttca ttgcacgtaa gtgaattgtt
     1801 ttataacagc gttcgccaat tgctgcgcca tcgtcgtccg gctgtcctac cgttaggggt
     1861 agtgtgtctc acactaccga ggttactaga gttgggaaag cgatactgcc tcggacacac
     1921 cacctgggtc ttacgactgc agagagaatc ggcgttacct ctctcacaaa gcccttcagt
     1981 gcggccgctg cgtcttcctg cagtccggca aaaaagggca aggtgtcacc accctgccct
     2041 ttttctttaa aaccgaaaag attacttcgc gttatgcagg cttcctcgct cactgactcg
     2101 ctgcgctcgg tcgttcggct gcggcgagcg gtatcagctc actcaaaggc ggtaatacgg
     2161 ttatccacag aatcagggga taacgcagga aagaacatgt gagcaaaagg ccagcaaaag
     2221 gccaggaacc gtaaaaaggc cgcgttgctg gcgtttttcc acaggctccg cccccctgac
     2281 gagcatcaca aaaatcgacg ctcaagtcag aggtggcgaa acccgacagg actataaaga
     2341 taccaggcgt ttccccctgg aagctccctc gtgcgctctc ctgttccgac cctgccgctt
     2401 accggatacc tgtccgcctt tctcccttcg ggaagcgtgg cgctttctca tagctcacgc
     2461 tgtaggtatc tcagttcggt gtaggtcgtt cgctccaagc tgggctgtgt gcacgaaccc
     2521 cccgttcagc ccgaccgctg cgccttatcc ggtaactatc gtcttgagtc caacccggta
     2581 agacacgact tatcgccact ggcagcagcc actggtaaca ggattagcag agcgaggtat
     2641 gtaggcggtg ctacagagtt cttgaagtgg tggcctaact acggctacac tagaagaaca
     2701 gtatttggta tctgcgctct gctgaagcca gttaccttcg gaaaaagagt tggtagctct
     2761 tgatccggca aacaaaccac cgctggtagc ggtggttttt ttgtttgcaa gcagcagatt
     2821 acgcgcagaa aaaaaggatc tcaagaagat cctttgatct tttctacggg gtctgacgct
     2881 cagtggaacg aaaactcacg ttaagggatt ttggtcatga gattatcaaa aaggatcttc
     2941 acctagatcc ttttaaatta aaaatgaagt tttaaatcaa tctaaagtat atatgagtaa
     3001 acttggtctg acagttacca atgcttaatc agtgaggcac ctatctcagc gatctgtcta
     3061 tttcgttcat ccatagttgc ctgactcccc gtcgtgtaga taactacgat acgggagggc
     3121 ttaccatctg gccccagtgc tgcaatgata ccgcgcgacc cacgctcacc ggctccagat
     3181 ttatcagcaa taaaccagcc agccggaagg gccgagcgca gaagtggtcc tgcaacttta
     3241 tccgcctcca tccagtctat taattgttgc cgggaagcta gagtaagtag ttcgccagtt
     3301 aatagtttgc gcaacgttgt tgccattgct acaggcatcg tggtgtcacg ctcgtcgttt
     3361 ggtatggctt cattcagctc cggttcccaa cgatcaaggc gagttacatg atcccccatg
     3421 ttgtgcaaaa aagcggttag ctccttcggt cctccgatcg ttgtcagaag taagttggcc
     3481 gcagtgttat cactcatggt tatggcagca ctgcataatt ctcttactgt catgccatcc
     3541 gtaagatgct tttctgtgac tggtgagtac tcaaccaagt cattctgaga atagtgtatg
     3601 cggcgaccga gttgctcttg cccggcgtca atacgggata ataccgcgcc acatagcaga
     3661 actttaaaag tgctcatcat tggaaaacgt tcttcggggc gaaaactctc aaggatctta
     3721 ccgctgttga gatccagttc gatataaccc actcgtgcac ccaactgatc ttcagcatct
     3781 tttactttca ccagcgtttc tgggtgagca aaaacaggaa ggcaaaatgc cgcaaaaaag
     3841 ggaataaggg cgacacggaa atgttgaata ctcatactct tcctttttca atattattga
     3901 agcatttatc agggttattg tctcatgagc ggatacatat ttgaatgtat ttagaaaaat
     3961 aaacaaatag gggttccgcg cacatttccc cgaaaagtgc cacctgacgt ctaagaaacc
     4021 attattatca tgacattaac ctataaaaat aggcgtatca cgaggcagaa tttcagataa
     4081 aaaaaatcct tagctttcgc taaggatgat ttctggaatt cgaagagcct gcggccgctg
     4141 tcgggaaccg cgttcaggtg gaacaggacc acctcccttg cacttcttgg tatatcagta
     4201 taggctgatg tattcatagt ggggtttttc ataataaatt tactaacggc aggcaacatt
     4261 cactcggctt aaacgcaaaa cggaccgtct tgatatcttc tgacgcattg accaccgaga
     4321 aatagtgtta gttaccgggt gagttattgt tcttctacac aggcgacgcc catcgtctag
     4381 agttgatgta ctaactcaga tttcactacc taccctatcc ctggtacgca caaagcactt
     4441 tgctagaagg tataacttcg tatagcatac attatacgaa gttattctga attccgagaa
     4501 acacaacaac atgccccatt ggacagacca tgcggataca caggttgtgc agtaccatac
     4561 atactcgatc agacaggtcg tctgaccatc atacaagctg aacagcgctc catacttgca
     4621 cgctctctat atacacagtt aaattacata tccatagtct aacctctaac agttaatctt
     4681 ctggtaagcc tcccagccag ccttctggta tcgcttggcc tcctcaatag gatctcggtt
     4741 ctggccgtac agacctcggc cgacaattat gatatccgtt ccggtagaca tgacatcctc
     4801 aacagttcgg tactgctgtc cgagagcgtc tcccttgtcg tcaagaccca ccccgggggt
     4861 cagaataagc cagtcctcag agtcgccctt aggtcggttc tgggcaatga agccaaccac
     4921 aaactcgggg tcggatcggg caagctcaat ggtctgcttg gagtactcgc cagtggccag
     4981 agagcccttg caagacagct cggccagcat gagcagacct ctggccagct tctcgttggg
     5041 agaggggact aggaactcct tgtactggga gttctcgtag tcagagacgt cctccttctt
     5101 ctgttcagag acagtttcct cggcaccagc tcgcaggcca gcaatgattc cggttccggg
     5161 tacaccgtgg gcgttggtga tatcggacca ctcggcgatt cggtgacacc ggtactggtg
     5221 cttgacagtg ttgccaatat ctgcgaactt tctgtcctcg aacaggaa
//`
        
sequences.seq_Linear_pSB1A3_BsmBI_Fwd = {};
sequences.seq_Linear_pSB1A3_BsmBI_Fwd.varName = "seq_Linear_pSB1A3_BsmBI_Fwd";
sequences.seq_Linear_pSB1A3_BsmBI_Fwd.name = "Linear pSB1A3 BsmBI Fwd";
sequences.seq_Linear_pSB1A3_BsmBI_Fwd.seqType = "linear";
sequences.seq_Linear_pSB1A3_BsmBI_Fwd.comp = false;
sequences.seq_Linear_pSB1A3_BsmBI_Fwd.data = `LOCUS       Linear_pSB1A3_BsmBI_Fwd   31 bp ds-DNA     linear       20-JUN-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 CTATTTCGTC TCCagtccgg caaaaaaggg c
//`
        
sequences.seq_Linear_pSB1A3_BsmBI_Rev = {};
sequences.seq_Linear_pSB1A3_BsmBI_Rev.varName = "seq_Linear_pSB1A3_BsmBI_Rev";
sequences.seq_Linear_pSB1A3_BsmBI_Rev.name = "Linear pSB1A3 BsmBI Rev";
sequences.seq_Linear_pSB1A3_BsmBI_Rev.seqType = "linear";
sequences.seq_Linear_pSB1A3_BsmBI_Rev.comp = false;
sequences.seq_Linear_pSB1A3_BsmBI_Rev.data = `LOCUS       Linear_pSB1A3_BsmBI_Rev   36 bp ds-DNA     linear       20-JUN-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 ATTCCCCGTC TCCcagaaat catccttagc gaaagc
//`
        
sequences.seq_Linear_pSB1A3_with_BsmBI_Sites = {};
sequences.seq_Linear_pSB1A3_with_BsmBI_Sites.varName = "seq_Linear_pSB1A3_with_BsmBI_Sites";
sequences.seq_Linear_pSB1A3_with_BsmBI_Sites.name = "Linear pSB1A3 with BsmBI Sites";
sequences.seq_Linear_pSB1A3_with_BsmBI_Sites.seqType = "linear";
sequences.seq_Linear_pSB1A3_with_BsmBI_Sites.comp = true;
sequences.seq_Linear_pSB1A3_with_BsmBI_Sites.data = `LOCUS       Linearized_pSB1A3_w/_Bs 2140 bp ds-DNA     linear       24-JUN-2020
DEFINITION  .
KEYWORDS    "accession:addgene_120731_229341"                                  
SOURCE      synthetic DNA construct                                            
  ORGANISM  synthetic DNA construct                                            
FEATURES             Location/Qualifiers
     CDS             complement(1027..1887)
                     /label="AmpR"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer_bind     1650..1669
                     /label="Amp-R"
                     /ApEinfo_revcolor=#b4abac
                     /ApEinfo_fwdcolor=#b4abac
     primer_bind     complement(97..114)
                     /label="L4440"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     primer_bind     2060..2078
                     /label="pBRforEco"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     primer_bind     complement(348..367)
                     /label="pBR322ori-F"
                     /ApEinfo_revcolor=#b4abac
                     /ApEinfo_fwdcolor=#b4abac
     misc_feature    14..2127
                     /label="pSB1A3 Region"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     misc_feature    1168..1168
                     /label="Point Mutation"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     terminator      2082..2125
                     /label="bacterial terminator"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     terminator      16..73
                     /label="his operon terminator"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     promoter        complement(1888..1992)
                     /label="AmpR promoter"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     rep_origin      complement(268..856)
                     /label="ori"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer          complement(2100..2127)
                     /label="BBa_Prefix & Promoter SDM Rev"
                     /note="sequence: cagaaatcatccttagcgaaagctaagg"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          14..35
                     /label="Linear pSB1A3 BsmBI Fwd"
                     /note="sequence: CTATTTCGTCTCGTTACagtccggcaaaaaagggcaagg"
                     /ApEinfo_revcolor=#d6b295
                     /ApEinfo_fwdcolor=#d6b295
ORIGIN
        1 CTATTTCGTC TCCagtccgg caaaaaaggg caaggtgtca ccaccctgcc ctttttcttt
       61 aaaaccgaaa agattacttc gcgttatgca ggcttcctcg ctcactgact cgctgcgctc
      121 ggtcgttcgg ctgcggcgag cggtatcagc tcactcaaag gcggtaatac ggttatccac
      181 agaatcaggg gataacgcag gaaagaacat gtgagcaaaa ggccagcaaa aggccaggaa
      241 ccgtaaaaag gccgcgttgc tggcgttttt ccacaggctc cgcccccctg acgagcatca
      301 caaaaatcga cgctcaagtc agaggtggcg aaacccgaca ggactataaa gataccaggc
      361 gtttccccct ggaagctccc tcgtgcgctc tcctgttccg accctgccgc ttaccggata
      421 cctgtccgcc tttctccctt cgggaagcgt ggcgctttct catagctcac gctgtaggta
      481 tctcagttcg gtgtaggtcg ttcgctccaa gctgggctgt gtgcacgaac cccccgttca
      541 gcccgaccgc tgcgccttat ccggtaacta tcgtcttgag tccaacccgg taagacacga
      601 cttatcgcca ctggcagcag ccactggtaa caggattagc agagcgaggt atgtaggcgg
      661 tgctacagag ttcttgaagt ggtggcctaa ctacggctac actagaagaa cagtatttgg
      721 tatctgcgct ctgctgaagc cagttacctt cggaaaaaga gttggtagct cttgatccgg
      781 caaacaaacc accgctggta gcggtggttt ttttgtttgc aagcagcaga ttacgcgcag
      841 aaaaaaagga tctcaagaag atcctttgat cttttctacg gggtctgacg ctcagtggaa
      901 cgaaaactca cgttaaggga ttttggtcat gagattatca aaaaggatct tcacctagat
      961 ccttttaaat taaaaatgaa gttttaaatc aatctaaagt atatatgagt aaacttggtc
     1021 tgacagttac caatgcttaa tcagtgaggc acctatctca gcgatctgtc tatttcgttc
     1081 atccatagtt gcctgactcc ccgtcgtgta gataactacg atacgggagg gcttaccatc
     1141 tggccccagt gctgcaatga taccgcgcga cccacgctca ccggctccag atttatcagc
     1201 aataaaccag ccagccggaa gggccgagcg cagaagtggt cctgcaactt tatccgcctc
     1261 catccagtct attaattgtt gccgggaagc tagagtaagt agttcgccag ttaatagttt
     1321 gcgcaacgtt gttgccattg ctacaggcat cgtggtgtca cgctcgtcgt ttggtatggc
     1381 ttcattcagc tccggttccc aacgatcaag gcgagttaca tgatccccca tgttgtgcaa
     1441 aaaagcggtt agctccttcg gtcctccgat cgttgtcaga agtaagttgg ccgcagtgtt
     1501 atcactcatg gttatggcag cactgcataa ttctcttact gtcatgccat ccgtaagatg
     1561 cttttctgtg actggtgagt actcaaccaa gtcattctga gaatagtgta tgcggcgacc
     1621 gagttgctct tgcccggcgt caatacggga taataccgcg ccacatagca gaactttaaa
     1681 agtgctcatc attggaaaac gttcttcggg gcgaaaactc tcaaggatct taccgctgtt
     1741 gagatccagt tcgatataac ccactcgtgc acccaactga tcttcagcat cttttacttt
     1801 caccagcgtt tctgggtgag caaaaacagg aaggcaaaat gccgcaaaaa agggaataag
     1861 ggcgacacgg aaatgttgaa tactcatact cttccttttt caatattatt gaagcattta
     1921 tcagggttat tgtctcatga gcggatacat atttgaatgt atttagaaaa ataaacaaat
     1981 aggggttccg cgcacatttc cccgaaaagt gccacctgac gtctaagaaa ccattattat
     2041 catgacatta acctataaaa ataggcgtat cacgaggcag aatttcagat aaaaaaaatc
     2101 cttagctttc gctaaggatg atttctgGGA GACGGGGAAT
//`
        
sequences.seq_pAC4CL1_FWD = {};
sequences.seq_pAC4CL1_FWD.varName = "seq_pAC4CL1_FWD";
sequences.seq_pAC4CL1_FWD.name = "pAC-4CL1 FWD";
sequences.seq_pAC4CL1_FWD.seqType = "linear";
sequences.seq_pAC4CL1_FWD.comp = false;
sequences.seq_pAC4CL1_FWD.data = `LOCUS       pAC-4CL1_FWD              39 bp ds-DNA     linear       25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 TTCCCAGCTC TTCCagtatg gaggaggatt acaaaatgg
//`
        
sequences.seq_pAC4CL1_REV = {};
sequences.seq_pAC4CL1_REV.varName = "seq_pAC4CL1_REV";
sequences.seq_pAC4CL1_REV.name = "pAC-4CL1 REV";
sequences.seq_pAC4CL1_REV.seqType = "linear";
sequences.seq_pAC4CL1_REV.comp = false;
sequences.seq_pAC4CL1_REV.data = `LOCUS       pAC-4CL1_REV              39 bp ds-DNA     linear       25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 TTCCCAGCTC TTCCcaatca caatccattt gctagtttt
//`
        
sequences.seq_pAC4CL1 = {};
sequences.seq_pAC4CL1.varName = "seq_pAC4CL1";
sequences.seq_pAC4CL1.name = "pAC-4CL1";
sequences.seq_pAC4CL1.seqType = "both";
sequences.seq_pAC4CL1.comp = true;
sequences.seq_pAC4CL1.data = `LOCUS       pAC-4CL1                6156 bp ds-DNA     circular     25-OCT-2020
DEFINITION  .
KEYWORDS    "marker:CmR" "ref:pmid\:16551366"                                  
FEATURES             Location/Qualifiers
     CDS             complement(join(5716..6156,1..219))
                     /label="CmR"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     promoter        1969..1975
                     /label="lac promoter"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     protein_bind    1909..1930
                     /label="CAP binding site"
                     /ApEinfo_revcolor=#31849b
                     /ApEinfo_fwdcolor=#31849b
     CDS             complement(join(5719..6156,1..219))
                     /label="CmR"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     promoter        1504..1509
                     /label="tet promoter"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     rep_origin      complement(848..1392)
                     /label="p15A ori"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     promoter        1951..1968
                     /label="lac promoter"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     misc_feature    2016..3719
                     /label="4CL"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
     promoter        1527..1532
                     /label="tet promoter"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     promoter        1945..1950
                     /label="lac promoter"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     promoter        complement(220..322)
                     /label="cat promoter"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     promoter        1510..1526
                     /label="tet promoter"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     promoter        1945..1975
                     /label="lac promoter"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
ORIGIN
        1 gaattccgga tgagcattca tcaggcgggc aagaatgtga ataaaggccg gataaaactt
       61 gtgcttattt ttctttacgg tctttaaaaa ggccgtaata tccagctgaa cggtctggtt
      121 ataggtacat tgagcaactg actgaaatgc ctcaaaatgt tctttacgat gccattggga
      181 tatatcaacg gtggtatatc cagtgatttt tttctccatt ttagcttcct tagctcctga
      241 aaatctcgat aactcaaaaa atacgcccgg tagtgatctt atttcattat ggtgaaagtt
      301 ggaacctctt acgtgccgat caacgtctca ttttcgccaa aagttggccc agggcttccc
      361 ggtatcaaca gggacaccag gatttattta ttctgcgaag tgatcttccg tcacaggtat
      421 ttattcggcg caaagtgcgt cgggtgatgc tgccaactta ctgatttagt gtatgatggt
      481 gtttttgagg tgctccagtg gcttctgttt ctatcagctg tccctcctgt tcagctactg
      541 acggggtggt gcgtaacggc aaaagcaccg ccggacatca gcgctagcgg agtgtatact
      601 ggcttactat gttggcactg atgagggtgt cagtgaagtg cttcatgtgg caggagaaaa
      661 aaggctgcac cggtgcgtca gcagaatatg tgatacagga tatattccgc ttcctcgctc
      721 actgactcgc tacgctcggt cgttcgactg cggcgagcgg aaatggctta cgaacggggc
      781 ggagatttcc tggaagatgc caggaagata cttaacaggg aagtgagagg gccgcggcaa
      841 agccgttttt ccataggctc cgcccccctg acaagcatca cgaaatctga cgctcaaatc
      901 agtggtggcg aaacccgaca ggactataaa gataccaggc gtttcccctg gcggctccct
      961 cgtgcgctct cctgttcctg cctttcggtt taccggtgtc attccgctgt tatggccgcg
     1021 tttgtctcat tccacgcctg acactcagtt ccgggtaggc agttcgctcc aagctggact
     1081 gtatgcacga accccccgtt cagtccgacc gctgcgcctt atccggtaac tatcgtcttg
     1141 agtccaaccc ggaaagacat gcaaaagcac cactggcagc agccactggt aattgattta
     1201 gaggagttag tcttgaagtc atgcgccggt taaggctaaa ctgaaaggac aagttttggt
     1261 gactgcgctc ctccaagcca gttacctcgg ttcaaagagt tggtagctca gagaaccttc
     1321 gaaaaaccgc cctgcaaggc ggttttttcg ttttcagagc aagagattac gcgcagacca
     1381 aaacgatctc aagaagatca tcttattaat cagataaaat atttcaagat ttcagtgcaa
     1441 tttatctctt caaatgtagc acctgaagtc agccccatac gatataagtt gtaattctca
     1501 tgtttgacag cttatcatcg ataagcttta atgcggtagt ttatcacagt taaattgcta
     1561 acgcagtcag gcaccgtgta tgaaatctaa caatgcgctc atcgtcatcc tcggcaccgt
     1621 caccctggat gctgtaggca taggcttggt tatgccggta ctgccgggcc tcttgcggga
     1681 tatcgtccat tccgacagca tcgccagtca ctatggcgtg ctgctagcgc tatatgcgtt
     1741 gatgcaattt ctatgcgcac ccgttctcgg agcactgtcc gaccgctttg gccgccgccc
     1801 agtcctgctc gcttcgctac ttggagccac tatcgactac gcgatcatgg cgaccacacc
     1861 cgtcctgtgg atccccgact ggaaagcggg cagtgagcgc aacgcaatta atgtgagtta
     1921 gctcactcat taggcacccc aggctttaca ctttatgctt ccggctcgta tgttgtgtgg
     1981 aattgtgagc gtctagagcg cccggggaat tccccatgga ggaggattac aaaatggcgc
     2041 cacaagaaca agcagtttct caggtgatgg agaaacagag caacaacaac aacagtgacg
     2101 tcattttccg atcaaagtta ccggatattt acatcccgaa ccacctatct ctccacgact
     2161 acatcttcca aaacatctcc gaattcgcca ctaagccttg cctaatcaac ggaccaaccg
     2221 gccacgtgta cacttactcc gacgtccacg tcatctcccg ccaaatcgcc gccaattttc
     2281 acaaactcgg cgttaaccaa aacgacgtcg tcatgctcct cctcccaaac tgtcccgaat
     2341 tcgtcctctc tttcctcgcc gcctccttcc gcggcgcaac cgccaccgcc gcaaaccctt
     2401 tcttcactcc ggcggagata gctaaacaag ccaaagcctc caacaccaaa ctcataatca
     2461 ccgaagctcg ttacgtcgac aaaatcaaac cacttcaaaa cgacgacgga gtagtcatcg
     2521 tctgcatcga cgacaacgaa tccgtgccaa tccctgaagg ctgcctccgc ttcaccgagt
     2581 tgactcagtc gacaaccgag gcatcagaag tcatcgactc ggtggagatt tcaccggacg
     2641 acgtggtggc actaccttac tcctctggca cgacgggatt accaaaagga gtgatgctga
     2701 ctcacaaggg actagtcacg agcgttgctc agcaagtcga cggcgagaac ccgaatcttt
     2761 atttccacag cgatgacgtc atactctgtg ttttgcccat gtttcatatc tacgctttga
     2821 actcgatcat gttgtgtggt cttagagttg gtgcggcgat tctgataatg ccgaagtttg
     2881 agatcaatct gctattggag ctgatccaga ggtgtaaagt gacggtggct ccgatggttc
     2941 cgccgattgt gttggccatt gcgaagtctt cggagacgga gaagtatgat ttgagctcga
     3001 taagagtggt gaaatctggt gctgctcctc ttggtaaaga acttgaagat gccgttaatg
     3061 ccaagtttcc taatgccaaa ctcggtcagg gatacggaat gacggaagca ggtccagtgc
     3121 tagcaatgtc gttaggtttt gcaaaggaac cttttccggt taagtcagga gcttgtggta
     3181 ctgttgtaag aaatgctgag atgaaaatag ttgatccaga caccggagat tctctttcga
     3241 ggaatcaacc cggtgagatt tgtattcgtg gtcaccagat catgaaaggt tacctcaaca
     3301 atccggcagc tacagcagag accattgata aagacggttg gcttcatact ggagatattg
     3361 gattgatcga tgacgatgac gagcttttca tcgttgatcg attgaaagaa cttatcaagt
     3421 ataaaggttt tcaggtagct ccggctgagc tagaggcttt gctcatcggt catcctgaca
     3481 ttactgatgt tgctgttgtc gcaatgaaag aagaagcagc tggtgaagtt cctgttgcat
     3541 ttgtggtgaa atcgaaggat tcggagttat cagaagatga tgtgaagcaa ttcgtgtcga
     3601 aacaggttgt gttttacaag agaatcaaca aagtgttctt cactgaatcc attcctaaag
     3661 ctccatcagg gaagatattg aggaaagatc tgagggcaaa actagcaaat ggattgtgac
     3721 catgggcggc cgctgcggta ttttctcctt acgcatctgt gcggtatttc acaccgcata
     3781 ggatcctcta cgccggacgc atcgtggccg gcatcaccgg cgccacaggt gcggttgctg
     3841 gcgcctatat cgccgacatc accgatgggg aagatcgggc tcgccacttc gggctcatga
     3901 gcgcttgttt cggcgtgggt atggtggcag gccccgtggc cgggggactg ttgggcgcca
     3961 tctccttgca tgcaccattc cttgcggcgg cggtgctcaa cggcctcaac ctactactgg
     4021 gctgcttcct aatgcaggag tcgcataagg gagagcgtcg accgatgccc ttgagagcct
     4081 tcaacccagt cagctccttc cggtgggcgc ggggcatgac tatcgtcgcc gcacttatga
     4141 ctgtcttctt tatcatgcaa ctcgtaggac aggtgccggc agcgctctgg gtcattttcg
     4201 gcgaggaccg ctttcgctgg agcgcgacga tgatcggcct gtcgcttgcg gtattcggaa
     4261 tcttgcacgc cctcgctcaa gccttcgtca ctggtcccgc caccaaacgt ttcggcgaga
     4321 agcaggccat tatcgccggc atggcggccg acgcgctggg ctacgtcttg ctggcgttcg
     4381 cgacgcgagg ctggatggcc ttccccatta tgattcttct cgcttccggc ggcatcggga
     4441 tgcccgcgtt gcaggccatg ctgtccaggc aggtagatga cgaccatcag ggacagcttc
     4501 aaggatcgct cgcggctctt accagcctaa cttcgatcac tggaccgctg atcgtcacgg
     4561 cgatttatgc cgcctcggcg agcacatgga acgggttggc atggattgta ggcgccgccc
     4621 tataccttgt ctgcctcccc gcgttgcgtc gcggtgcatg gagccgggcc acctcgacct
     4681 gaatggaagc cggcggcacc tcgctaacgg attcaccact ccaagaattg gagccaatca
     4741 attcttgcgg agaactgtga atgcgcaaac caacccttgg cagaacatat ccatcgcgtc
     4801 cgccatctcc agcagccgca cgcggcgcat ctcgggcagc gttgggtcct ggccacgggt
     4861 gcgcatgatc gtgctcctgt cgttgaggac ccggctaggc tggcggggtt gccttactgg
     4921 ttagcagaat gaatcaccga tacgcgagcg aacgtgaagc gactgctgct gcaaaacgtc
     4981 tgcgacctga gcaacaacat gaatggtctt cggtttccgt gtttcgtaaa gtctggaaac
     5041 gcggaagtcc cctacgtgct gctgaagttg cccgcaacag agagtggaac caaccggtga
     5101 taccacgata ctatgactga gagtcaacgc catgagcggc ctcatttctt attctgagtt
     5161 acaacagtcc gcaccgctgt ccggtagctc cttccggtgg gcgcggggca tgactatcgt
     5221 cgccgcactt atgactgtct tctttatcat gcaactcgta ggacaggtgc cggcagcgcc
     5281 caacagtccc ccggccacgg ggcctgccac catacccacg ccgaaacaag cgccctgcac
     5341 cattatgttc cggatctgca tcgcaggatg ctgctggcta ccctgtggaa cacctacatc
     5401 tgtattaacg aagcgctaac cgtttttatc aggctctggg aggcagaata aatgatcata
     5461 tcgtcaatta ttacctccac ggggagagcc tgagcaaact ggcctcaggc atttgagaag
     5521 cacacggtca cactgcttcc ggtagtcaat aaaccggtaa accagcaata gacataagcg
     5581 gctatttaac gaccctgccc tgaaccgacg accgggtcga atttgctttc gaatttctgc
     5641 cattcatccg cttattatca cttattcagg cgtagcacca ggcgtttaag ggcaccaata
     5701 actgccttaa aaaaattacg ccccgccctg ccactcatcg cagtactgtt gtaattcatt
     5761 aagcattctg ccgacatgga agccatcaca gacggcatga tgaacctgaa tcgccagcgg
     5821 catcagcacc ttgtcgcctt gcgtataata tttgcccatg gtgaaaacgg gggcgaagaa
     5881 gttgtccata ttggccacgt ttaaatcaaa actggtgaaa ctcacccagg gattggctga
     5941 gacgaaaaac atattctcaa taaacccttt agggaaatag gccaggtttt caccgtaaca
     6001 cgccacatct tgcgaatata tgtgtagaaa ctgccggaaa tcgtcgtggt attcactcca
     6061 gagcgatgaa aacgtttcag tttgctcatg gaaaacggtg taacaagggt gaacactatc
     6121 ccatatcacc agctcaccgt ctttcattgc catacg
//`
        
sequences.seq_pduABJKNUT_Fwd = {};
sequences.seq_pduABJKNUT_Fwd.varName = "seq_pduABJKNUT_Fwd";
sequences.seq_pduABJKNUT_Fwd.name = "pduABJKNUT Fwd";
sequences.seq_pduABJKNUT_Fwd.seqType = "linear";
sequences.seq_pduABJKNUT_Fwd.comp = false;
sequences.seq_pduABJKNUT_Fwd.data = `LOCUS       pduABJKNUT_Fwd            46 bp ds-DNA     linear       25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 TCTGCTCGTC TCTgaccaca acggtttccc tgtagaaata attttg
//`
        
sequences.seq_pduABJKNUT_promoter = {};
sequences.seq_pduABJKNUT_promoter.varName = "seq_pduABJKNUT_promoter";
sequences.seq_pduABJKNUT_promoter.name = "pduABJKNUT promoter";
sequences.seq_pduABJKNUT_promoter.seqType = "linear";
sequences.seq_pduABJKNUT_promoter.comp = true;
sequences.seq_pduABJKNUT_promoter.data = `LOCUS       *pduABJKNUT_promoter     133 bp ds-DNA     linear       25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     misc_feature    38..72
                     /label="BBa_J23114"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     misc_feature    34..37
                     /label="Overhang pSB1C3"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     misc_feature    97..100
                     /label="Overhang pduABJKNUT"
                     /ApEinfo_revcolor=#f8d3a9
                     /ApEinfo_fwdcolor=#f8d3a9
     misc_binding    74..96
                     /label="LacO"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
ORIGIN
        1 AAGTGTTCGA ACGCTTCAGA TCTGTACGTC TCACAACttt atggctagct cagtcctagg
       61 tacaatgcta gcTGGAATTG TGAGCGGATA ACAATTGACC AGAGACGTCT GCTTGCCAAC
      121 CGTAGAACTT ACG
//`
        
sequences.seq_pduABJKNUT_Rev = {};
sequences.seq_pduABJKNUT_Rev.varName = "seq_pduABJKNUT_Rev";
sequences.seq_pduABJKNUT_Rev.name = "pduABJKNUT Rev";
sequences.seq_pduABJKNUT_Rev.seqType = "linear";
sequences.seq_pduABJKNUT_Rev.comp = false;
sequences.seq_pduABJKNUT_Rev.data = `LOCUS       pduABJKNUT_Rev            42 bp ds-DNA     linear       25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 ACTGTTCGTC TCAgctttgt tagcagccgg atccaaaagt ag
//`
        
sequences.seq_PduD_final_product = {};
sequences.seq_PduD_final_product.varName = "seq_PduD_final_product";
sequences.seq_PduD_final_product.name = "PduD (final product)";
sequences.seq_PduD_final_product.seqType = "linear";
sequences.seq_PduD_final_product.comp = true;
sequences.seq_PduD_final_product.data = `LOCUS       *PduD_(final_product)    658 bp ds-DNA     linear       25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     misc_feature    115..154
                     /label="random bp"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     misc_feature    18..112
                     /label="BBa_B0014 Double Terminator"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     misc_feature    653..658
                     /label="rando runway"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
     misc_feature    218..231
                     /label="Anderson RBS 7"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     Scar            59..66
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     misc_feature    583..621
                     /label="BBa_B1006"
                     /ApEinfo_revcolor=#d59687
                     /ApEinfo_fwdcolor=#d59687
     misc_feature    1..6
                     /label="Rando Runway"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     misc_feature    286..582
                     /label="Spacer + ZFc"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     misc_feature    14..17
                     /label="5' overhang with pdu"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     misc_feature    159..193
                     /label="J23101 Anderson Promoter"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
     misc_feature    232..285
                     /label="pduD (1-18 aa)"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_binding    195..217
                     /label="LacO"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
ORIGIN
        1 TGAGTACGTC TCAAAGCtca cactggctca ccttcgggtg ggcctttctg cgtttatata
       61 ctagagagag aatataaaaa gccagattat taatccggct tttttattat tttgAAGGGA
      121 GTAAGTCTTC GAATGGTTCA GTTATAACTA TATAgctgtt tacagctagc tcagtcctag
      181 gtattatgct agcTGGAATT GTGAGCGGAT AACAATTGAA AGAAGAGACT CATGGAAATC
      241 AACGAAAAAC TGCTGCGTCA GATTATTGAG GACGTGTTAC GCGATACGTC GGCGGCCGCA
      301 CCAGGCGAAC GCCCATTTCA GTGTCGCATC TGCATGCGTA ATTTCTCTTC ACCGAGCAAA
      361 CTTATTCGCC ATACCCGTAC CCATACTGGC GAGAAACCCT TTCAGTGTCG TATCTGTATG
      421 CGAAACTTCT CCGACGGGAG CAACCTGGCT CGGCACTTGC GTACACATAC CGGTGAAAAG
      481 CCGTTTCAAT GCCGTATTTG CATGCGCAAT TTCAGTCGCG TGGATAACTT ACCGAGACAC
      541 CTGAAAACGC ACTACCCGTA TGATGTTCCT GATTATGCGT AAaaaaaaaa accccgcccc
      601 tgacagggcg gggttttttt tAATTAAAGA CACAAGTTTC CGTCAAGAGA CGTCGAGT
//`
        
sequences.seq_pduD_on_pSB1C3__Final_Part = {};
sequences.seq_pduD_on_pSB1C3__Final_Part.varName = "seq_pduD_on_pSB1C3__Final_Part";
sequences.seq_pduD_on_pSB1C3__Final_Part.name = "pduD on pSB1C3 - Final Part";
sequences.seq_pduD_on_pSB1C3__Final_Part.seqType = "both";
sequences.seq_pduD_on_pSB1C3__Final_Part.comp = true;
sequences.seq_pduD_on_pSB1C3__Final_Part.data = `LOCUS       pduD_on_pSB1C3_-_Final_ 2589 bp ds-DNA     circular     25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     primer_bind     complement(333..352)
                     /label="pBR322ori-F"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     Biobricking     2569..2584
                     /label="BioBrick Suffix"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_feature    2028..2028
                     /label="BioBrick prefix"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     misc_feature    2177..2473
                     /label="Spacer + ZFc"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     primer_bind     complement(82..99)
                     /label="L4440"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     source          1..2028
                     /label="source"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     misc_feature    2050..2084
                     /label="new promoter"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     terminator      1982..2025
                     /label="bacterial terminator"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     Scar            2515..2522
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     rep_origin      complement(253..841)
                     /label="ori"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     CDS             complement(1139..1798)
                     /label="CmR"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
     misc_feature    join(2585..2589,1..2028)
                     /label="pSB1C3 Backbone Region"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     misc_feature    2585..2589
                     /label="BioBrick suffix"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     terminator      1..58
                     /label="his operon terminator"
                     /ApEinfo_revcolor=#d59687
                     /ApEinfo_fwdcolor=#d59687
     primer_bind     1713..1732
                     /label="CAT-R"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     misc_feature    2123..2176
                     /label="pduD (1-18 aa)"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     Biobricking     2029..2049
                     /label="BioBrick Prefix "
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     primer_bind     1960..1978
                     /label="pBRforEco"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     misc_feature    2474..2568
                     /label="BBa_B0014 Double Terminator"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     Biobricking     2569..2589
                     /label="BioBrick Suffix"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     terminator      1024..1118
                     /label="lambda t0 terminator"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     Biobricking     2028..2049
                     /label="BioBrick Prefix "
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     source          2585..2589
                     /label="source"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     misc_feature    2109..2122
                     /label="RBS-J61107"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
ORIGIN
        1 tccggcaaaa aagggcaagg tgtcaccacc ctgccctttt tctttaaaac cgaaaagatt
       61 acttcgcgtt atgcaggctt cctcgctcac tgactcgctg cgctcggtcg ttcggctgcg
      121 gcgagcggta tcagctcact caaaggcggt aatacggtta tccacagaat caggggataa
      181 cgcaggaaag aacatgtgag caaaaggcca gcaaaaggcc aggaaccgta aaaaggccgc
      241 gttgctggcg tttttccaca ggctccgccc ccctgacgag catcacaaaa atcgacgctc
      301 aagtcagagg tggcgaaacc cgacaggact ataaagatac caggcgtttc cccctggaag
      361 ctccctcgtg cgctctcctg ttccgaccct gccgcttacc ggatacctgt ccgcctttct
      421 cccttcggga agcgtggcgc tttctcatag ctcacgctgt aggtatctca gttcggtgta
      481 ggtcgttcgc tccaagctgg gctgtgtgca cgaacccccc gttcagcccg accgctgcgc
      541 cttatccggt aactatcgtc ttgagtccaa cccggtaaga cacgacttat cgccactggc
      601 agcagccact ggtaacagga ttagcagagc gaggtatgta ggcggtgcta cagagttctt
      661 gaagtggtgg cctaactacg gctacactag aagaacagta tttggtatct gcgctctgct
      721 gaagccagtt accttcggaa aaagagttgg tagctcttga tccggcaaac aaaccaccgc
      781 tggtagcggt ggtttttttg tttgcaagca gcagattacg cgcagaaaaa aaggatctca
      841 agaagatcct ttgatctttt ctacggggtc tgacgctcag tggaacgaaa actcacgtta
      901 agggattttg gtcatgagat tatcaaaaag gatcttcacc tagatccttt taaattaaaa
      961 atgaagtttt aaatcaatct aaagtatata tgagtaaact tggtctgaca gctcgaggct
     1021 tggattctca ccaataaaaa acgcccggcg gcaaccgagc gttctgaaca aatccagatg
     1081 gagttctgag gtcattactg gatctatcaa caggagtcca agcgagctcg atatcaaatt
     1141 acgccccgcc ctgccactca tcgcagtact gttgtaattc attaagcatt ctgccgacat
     1201 ggaagccatc acaaacggca tgatgaacct gaatcgccag cggcatcagc accttgtcgc
     1261 cttgcgtata atatttgccc atggtgaaaa cgggggcgaa gaagttgtcc atattggcca
     1321 cgtttaaatc aaaactggtg aaactcaccc agggattggc tgagacgaaa aacatattct
     1381 caataaaccc tttagggaaa taggccaggt tttcaccgta acacgccaca tcttgcgaat
     1441 atatgtgtag aaactgccgg aaatcgtcgt ggtattcact ccagagcgat gaaaacgttt
     1501 cagtttgctc atggaaaacg gtgtaacaag ggtgaacact atcccatatc accagctcac
     1561 cgtctttcat tgccatacga aattccggat gagcattcat caggcgggca agaatgtgaa
     1621 taaaggccgg ataaaacttg tgcttatttt tctttacggt ctttaaaaag gccgtaatat
     1681 ccagctgaac ggtctggtta taggtacatt gagcaactga ctgaaatgcc tcaaaatgtt
     1741 ctttacgatg ccattgggat atatcaacgg tggtatatcc agtgattttt ttctccattt
     1801 tagcttcctt agctcctgaa aatctcgata actcaaaaaa tacgcccggt agtgatctta
     1861 tttcattatg gtgaaagttg gaacctctta cgtgcccgat caactcgagt gccacctgac
     1921 gtctaagaaa ccattattat catgacatta acctataaaa ataggcgtat cacgaggcag
     1981 aatttcagat aaaaaaaatc cttagctttc gctaaggatg atttctggaa ttcgcggccg
     2041 cttctagagt ttacagctag ctcagtccta ggtattatgc tagcTGGAAT TGTGAGCGGA
     2101 TAACAATTGA AAGAAGAGAC TCATGGAAAT CAACGAAAAA CTGCTGCGTC AGATTATTGA
     2161 GGACGTGTTA CGCGATACGT CGGCGGCCGC ACCAGGCGAA CGCCCATTTC AGTGTCGCAT
     2221 CTGCATGCGT AATTTCTCTT CACCGAGCAA ACTTATTCGC CATACCCGTA CCCATACTGG
     2281 CGAGAAACCC TTTCAGTGTC GTATCTGTAT GCGAAACTTC TCCGACGGGA GCAACCTGGC
     2341 TCGGCACTTG CGTACACATA CCGGTGAAAA GCCGTTTCAA TGCCGTATTT GCATGCGCAA
     2401 TTTCAGTCGC GTGGATAACT TACCGAGACA CCTGAAAACG CACTACCCGT ATGATGTTCC
     2461 TGATTATGCG TAAtcacact ggctcacctt cgggtgggcc tttctgcgtt tatatactag
     2521 agagagaata taaaaagcca gattattaat ccggcttttt tattatttta ctagtagcgg
     2581 ccgctgcag
//`
        
sequences.seq_pHIV_Backbone_NEB_FWD = {};
sequences.seq_pHIV_Backbone_NEB_FWD.varName = "seq_pHIV_Backbone_NEB_FWD";
sequences.seq_pHIV_Backbone_NEB_FWD.name = "pHIV Backbone NEB FWD";
sequences.seq_pHIV_Backbone_NEB_FWD.seqType = "linear";
sequences.seq_pHIV_Backbone_NEB_FWD.comp = false;
sequences.seq_pHIV_Backbone_NEB_FWD.data = `LOCUS       pHIV_Backbone_NEB_FWD     42 bp ds-DNA     linear       02-SEP-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 taaagttctg taatattagt gaaagaggag aaatactaga tg
//`
        
sequences.seq_pHIV_Backbone_NEB_REV = {};
sequences.seq_pHIV_Backbone_NEB_REV.varName = "seq_pHIV_Backbone_NEB_REV";
sequences.seq_pHIV_Backbone_NEB_REV.name = "pHIV Backbone NEB REV";
sequences.seq_pHIV_Backbone_NEB_REV.seqType = "linear";
sequences.seq_pHIV_Backbone_NEB_REV.comp = false;
sequences.seq_pHIV_Backbone_NEB_REV.data = `LOCUS       pHIV_Backbone_NEB_REV     22 bp ds-DNA     linear       08-JUL-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 agtgccagat gaattgcctg ta
//`
        
sequences.seq_pHIV_GGA_FWD = {};
sequences.seq_pHIV_GGA_FWD.varName = "seq_pHIV_GGA_FWD";
sequences.seq_pHIV_GGA_FWD.name = "pHIV GGA FWD";
sequences.seq_pHIV_GGA_FWD.seqType = "linear";
sequences.seq_pHIV_GGA_FWD.comp = false;
sequences.seq_pHIV_GGA_FWD.data = `LOCUS       pHIV_GGA_FWD              34 bp ds-DNA     linear       07-SEP-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 CTACTACGTC TCTGGAtaga tgccgattag cccg
//`
        
sequences.seq_pHIV_GGA_REV = {};
sequences.seq_pHIV_GGA_REV.varName = "seq_pHIV_GGA_REV";
sequences.seq_pHIV_GGA_REV.name = "pHIV GGA REV";
sequences.seq_pHIV_GGA_REV.seqType = "linear";
sequences.seq_pHIV_GGA_REV.comp = false;
sequences.seq_pHIV_GGA_REV.data = `LOCUS       pHIV_GGA_REV              37 bp ds-DNA     linear       02-SEP-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 TCAGTACGTC TCAgccgctt ctagtatata aacgcag
//`
        
sequences.seq_pHIV_NEB_FWD = {};
sequences.seq_pHIV_NEB_FWD.varName = "seq_pHIV_NEB_FWD";
sequences.seq_pHIV_NEB_FWD.name = "pHIV NEB FWD";
sequences.seq_pHIV_NEB_FWD.seqType = "linear";
sequences.seq_pHIV_NEB_FWD.comp = false;
sequences.seq_pHIV_NEB_FWD.data = `LOCUS       pHIV_NEB_FWD              22 bp ds-DNA     linear       08-JUL-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 caggcaattc atctggcact ac
//`
        
sequences.seq_pHIV_NEB_REV = {};
sequences.seq_pHIV_NEB_REV.varName = "seq_pHIV_NEB_REV";
sequences.seq_pHIV_NEB_REV.name = "pHIV NEB REV";
sequences.seq_pHIV_NEB_REV.seqType = "linear";
sequences.seq_pHIV_NEB_REV.comp = false;
sequences.seq_pHIV_NEB_REV.data = `LOCUS       pHIV_NEB_REV              37 bp ds-DNA     linear       08-JUL-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 tcctctttca ctaatattac agaactttac gaatacc
//`
        
sequences.seq_pHIV_pTp66p51_Linearized = {};
sequences.seq_pHIV_pTp66p51_Linearized.varName = "seq_pHIV_pTp66p51_Linearized";
sequences.seq_pHIV_pTp66p51_Linearized.name = "pHIV_pTp66p51 Linearized";
sequences.seq_pHIV_pTp66p51_Linearized.seqType = "linear";
sequences.seq_pHIV_pTp66p51_Linearized.comp = true;
sequences.seq_pHIV_pTp66p51_Linearized.data = `LOCUS       pHIV_pTp66p51_Linearize 3226 bp ds-DNA     linear       07-SEP-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     misc_feature    1732..3057
                     /label="HIVRT P51"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     terminator      3167..3194
                     /label="T7Te terminator"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     Scar            3064..3071
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     misc_feature    20..1705
                     /label="HIVRT p66"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     RBS             1714..1725
                     /label="strong bacterial ribosome binding site (Elowitz and Leibler, 2000)"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     Scar            3152..3159
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     terminator      3080..3151
                     /label="rrnB T1 terminator"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     primer          complement(1458..1479)
                     /label="pHIV Backbone NEB REV"
                     /note="sequence: agtgccagatgaattgcctgta"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          1726..1746
                     /label="pHIV GGA FWD"
                     /note="sequence: CTACTACGTCTCTGGAtagatgccgattagcccg"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer          complement(3179..3194)
                     /label="pHIV GGA REV"
                     /note="sequence: TCAGTACGTCTCAcgcagaaaggcccacc"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          complement(3179..3194)
                     /label="pHIV REV"
                     /note="sequence: AATATCCGTCTCTAGTCcgcagaaaggcccacc"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          5..25
                     /label="pHIV GGA FWD"
                     /note="sequence: CTACTACGTCTCTaaagaggagaaatactagatgccg"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer          5..34
                     /label="pHIV GGA FWD"
                     /note="sequence: CTACTACGTCTCTGGAtagatgccgattagcccg"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer          1702..1737
                     /label="pHIV Backbone NEB FWD"
                     /note="sequence: gtaatattagtgaaagaggagaaatactagatgccg"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer          complement(1685..1721)
                     /label="pHIV NEB REV"
                     /note="sequence: tcctctttcactaatattacagaactttacgaatacc"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          1460..1481
                     /label="pHIV NEB FWD"
                     /note="sequence: caggcaattcatctggcactac"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer          complement(3179..3194)
                     /label="pHIV REV"
                     /note="sequence: ATTACACGTCTCAcgcagaaaggcccacc"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
ORIGIN
        1 CTACTACGTC TCTGGATaga tgccgattag cccgattgaa accgttccgg ttaaactgaa
       61 accgggtatg gatggtccga aagttaaaca gtggcctctg accgaagaaa aaatcaaagc
      121 actggttgaa atctgcaccg agatggaaaa agaaggcaaa attagcaaaa tcggtccgga
      181 aaatccgtat aatacaccgg tttttgccat taagaaaaaa gatagcacca aatggcgcaa
      241 actggtggat tttcgtgaac tgaataaacg cacccaggat ttttgggaag ttcagctggg
      301 tattccgcat ccggcaggtc tgaaacagaa aaaaagcgtt accgttctgg atgttggtga
      361 tgcatatttt agcgttccgc tggataaaga tttccgtaaa tataccgcat ttaccatccc
      421 gagcattaat aacgaaacac cgggtattcg ctatcagtat aatgttctgc cgcagggttg
      481 gaaaggtagt ccggcaattt ttcagtgtag catgaccaaa attctggaac cgtttcgtaa
      541 acagaatccg gatattgtga tctaccagta tatggatgat ctgtatgttg gtagcgatct
      601 ggaaattggt cagcatcgta ccaaaattga agaactgcgt cagcatctgc tgcgttgggg
      661 ttttaccaca ccggataaaa aacatcagaa agaaccgcct tttctgtgga tgggttatga
      721 actgcatccg gataaatgga ccgttcagcc gattgttctg ccggaaaaag atagctggac
      781 cgttaatgat attcagaaac tggtgggtaa actgaattgg gcaagccaga tttatgccgg
      841 tattaaagtt cgtcagctgt gtaaactgct gcgtggcacc aaagcactga ccgaagttgt
      901 tccgctgaca gaagaagcag aactggaact ggcagaaaat cgtgaaattc tgaaagaacc
      961 ggttcacggc gtttattatg atccgagcaa agatctgatt gccgaaattc agaaacaggg
     1021 tcagggtcag tggacctatc agatttatca agaaccgttt aaaaacctga aaaccggcaa
     1081 atatgcacgt atgaaaggtg cacataccaa cgatgttaaa cagctgaccg aagcagttca
     1141 gaaaattgca accgaaagca ttgtgatttg gggtaaaacc ccgaaattca aactgccgat
     1201 tcagaaagaa acctgggaag catggtggac cgaatattgg caggcaacct ggattccgga
     1261 atgggaattt gttaataccc ctccgctggt taaactgtgg tatcagctgg aaaaagaacc
     1321 gattattggt gccgaaacct tttatgttga tggtgcagcc aatcgtgaaa ccaaactggg
     1381 taaagcaggt tatgttaccg atcgtggtcg tcagaaagtg gtgccgctga ccgataccac
     1441 caatcagaaa accgaactac aggcaattca tctggcacta caggatagcg gtctggaagt
     1501 taatattgtt accgatagcc agtatgccct gggtattatt caggcacagc cggataaaag
     1561 cgaaagcgaa ctggttagcc agattattga acagctgatc aaaaaagaaa aagtgtacct
     1621 ggcatgggtt ccggcacata aaggtattgg tggtaatgaa caggttgatg gtctggttag
     1681 cgcaggtatt cgtaaagttc tgtaatatta gtgaaagagg agaaatacta gatgccgatt
     1741 agcccgattg aaaccgttcc ggttaaactg aaaccgggta tggatggtcc gaaagttaaa
     1801 cagtggcctc tgaccgaaga aaaaatcaaa gcactggttg aaatctgcac cgagatggaa
     1861 aaagaaggca aaattagcaa aatcggtccg gaaaatccgt ataatacacc ggtttttgcc
     1921 attaagaaaa aagatagcac caaatggcgc aaactggtgg attttcgtga actgaataaa
     1981 cgcacccagg atttttggga agttcagctg ggtattccgc atccggcagg tctgaaacag
     2041 aaaaaaagcg ttaccgttct ggatgttggt gatgcatatt ttagcgttcc gctggataaa
     2101 gatttccgta aatataccgc atttaccatc ccgagcatta ataacgaaac accgggtatt
     2161 cgctatcagt ataatgttct gccgcagggt tggaaaggta gtccggcaat ttttcagtgt
     2221 agcatgacca aaattctgga accgtttcgt aaacagaatc cggatattgt gatctaccag
     2281 tatatggatg atctgtatgt tggtagcgat ctggaaattg gtcagcatcg taccaaaatt
     2341 gaagaactgc gtcagcatct gctgcgttgg ggttttacca caccggataa aaaacatcag
     2401 aaagaaccgc cttttctgtg gatgggttat gaactgcatc cggataaatg gaccgttcag
     2461 ccgattgttc tgccggaaaa agatagctgg accgttaatg atattcagaa actggtgggt
     2521 aaactgaatt gggcaagcca gatttatgcc ggtattaaag ttcgtcagct gtgtaaactg
     2581 ctgcgtggca ccaaagcact gaccgaagtt gttccgctga cagaagaagc agaactggaa
     2641 ctggcagaaa atcgtgaaat tctgaaagaa ccggttcacg gcgtttatta tgatccgagc
     2701 aaagatctga ttgccgaaat tcagaaacag ggtcagggtc agtggaccta tcagatttat
     2761 caagaaccgt ttaaaaacct gaaaaccggc aaatatgcac gtatgaaagg tgcacatacc
     2821 aacgatgtta aacagctgac cgaagcagtt cagaaaattg caaccgaaag cattgtgatt
     2881 tggggtaaaa ccccgaaatt caaactgccg attcagaaag aaacctggga agcatggtgg
     2941 accgaatatt ggcaggcaac ctggattccg gaatgggaat ttgttaatac ccctccgctg
     3001 gttaaactgt ggtatcagct ggaaaaagaa ccgattattg gtgccgaaac cttttaagat
     3061 cgctactaga gccaggcatc aaataaaacg aaaggctcag tcgaaagact gggcctttcg
     3121 ttttatctgt tgtttgtcgg tgaacgctct ctactagagt cacactggct caccttcggg
     3181 tgggcctttc tgcgtttata tactagaagc ggcTGAGACG TACTGA
//`
        
sequences.seq_pHIV_pTp66p51_NEBuilder_Product = {};
sequences.seq_pHIV_pTp66p51_NEBuilder_Product.varName = "seq_pHIV_pTp66p51_NEBuilder_Product";
sequences.seq_pHIV_pTp66p51_NEBuilder_Product.name = "pHIV_pTp66p51 NEBuilder Product";
sequences.seq_pHIV_pTp66p51_NEBuilder_Product.seqType = "both";
sequences.seq_pHIV_pTp66p51_NEBuilder_Product.comp = true;
sequences.seq_pHIV_pTp66p51_NEBuilder_Product.data = `LOCUS       pHIV_pTp66p51_NEBuilder 6621 bp ds-DNA     circular     07-SEP-2020
DEFINITION  .
KEYWORDS    "accession:addgene_78233_145927"                                   
SOURCE      synthetic DNA construct                                            
  ORGANISM  synthetic DNA construct                                            
FEATURES             Location/Qualifiers
     primer_bind     6305..6324
                     /label="Amp-R"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     Scar            4677..4684
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     promoter        1400..1428
                     /label="tac promoter"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     source          1..6621
                     /label="source"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     CDS             complement(5682..6542)
                     /label="AmpR"
                     /ApEinfo_revcolor=#d59687
                     /ApEinfo_fwdcolor=#d59687
     protein_bind    1434..1453
                     /label="lac operator (symmetric)"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     primer_bind     complement(4752..4769)
                     /label="L4440"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     Scar            4589..4596
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     CDS             complement(183..1265)
                     /label="lacI"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     terminator      91..120
                     /label="T3Te terminator"
                     /ApEinfo_revcolor=#d59687
                     /ApEinfo_fwdcolor=#d59687
     primer_bind     1227..1246
                     /label="LacI-R"
                     /ApEinfo_revcolor=#d6b295
                     /ApEinfo_fwdcolor=#d6b295
     misc_feature    1545..3230
                     /label="HIVRT p66"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     rep_origin      complement(4905..5587)
                     /label="ColE1 origin"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     rep_origin      complement(4923..5511)
                     /label="ori"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     misc_feature    1454..1538
                     /label="on g-block 1"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     RBS             3239..3250
                     /label="strong bacterial ribosome binding site (Elowitz and Leibler, 2000)"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     terminator      4692..4719
                     /label="T7Te terminator"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     misc_feature    3257..4582
                     /label="HIVRT P51"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     misc_RNA        1469..1518
                     /label="sTRSV HHRz"
                     /ApEinfo_revcolor=#f8d3a9
                     /ApEinfo_fwdcolor=#f8d3a9
     terminator      4605..4676
                     /label="rrnB T1 terminator"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     promoter        complement(join(6543..6621,1..26))
                     /label="AmpR promoter"
                     /ApEinfo_revcolor=#d59687
                     /ApEinfo_fwdcolor=#d59687
     primer_bind     complement(5003..5022)
                     /label="pBR322ori-F"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     RBS             1527..1538
                     /label="strong bacterial ribosome binding site (Elowitz and Leibler, 2000)"
                     /ApEinfo_revcolor=#b4abac
                     /ApEinfo_fwdcolor=#b4abac
     CDS             complement(5685..6344)
                     /label="AmpR"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     primer          complement(2983..3004)
                     /label="pHIV Backbone NEB REV"
                     /note="sequence: agtgccagatgaattgcctgta"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          complement(4715..4738)
                     /label="pHIV GGA REV"
                     /note="sequence: TCAGTACGTCTCAgccgcttctagtatataaacgcag"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          complement(3210..3246)
                     /label="pHIV NEB REV"
                     /note="sequence: tcctctttcactaatattacagaactttacgaatacc"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          1539..1559
                     /label="pHIV GGA FWD"
                     /note="sequence: CTACTACGTCTCTGGAtagatgccgattagcccg"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer          3218..3259
                     /label="pHIV Backbone NEB FWD"
                     /note="sequence: taaagttctgtaatattagtgaaagaggagaaatactagatg"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer          1469..1488
                     /label="pHIV FWD"
                     /note="sequence: ATTACACGTCTCActgtcaccggatgtgctttc"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer          3227..3262
                     /label="pHIV Backbone NEB FWD"
                     /note="sequence: gtaatattagtgaaagaggagaaatactagatgccg"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer          1469..1488
                     /label="pHIV FWD"
                     /note="sequence: CGTGAGCGTCTCACGATctgtcaccggatgtgctttc"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer          complement(4704..4719)
                     /label="pHIV REV"
                     /note="sequence: AATATCCGTCTCTAGTCcgcagaaaggcccacc"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          complement(4704..4719)
                     /label="pHIV REV"
                     /note="sequence: ATTACACGTCTCAcgcagaaaggcccacc"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          2985..3006
                     /label="pHIV NEB FWD"
                     /note="sequence: caggcaattcatctggcactac"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
ORIGIN
        1 aaaaataaac aaataggggt tccgcgcaca tttccccgaa aagtgccacc tgacgtctaa
       61 gaaaaggaat attcagcaat ttgcccgtgc cgaagaaagg cccacccgtg aaggtgagcc
      121 agtgagttga ttgctacgta atgtcggcca attcgcgcta acttacatta attgcgttgc
      181 gctcactgcc cgctttccag tcgggaaacc tgtcgtgcca gctgcattaa tgaatcggcc
      241 aacgcgcggg gagaggcggt ttgcgtattg ggcgccaggg tggtttttct tttcaccagt
      301 gagactggca acagctgatt gcccttcacc gcctggccct gagagagttg cagcaagcgg
      361 tccacgctgg tttgccccag caggcgaaaa tcctgtttga tggtggttaa cggcgggata
      421 taacatgagc tatcttcggt atcgtcgtat cccactaccg agatatccgc accaacgcgc
      481 agcccggact cggtaatggc gcgcattgcg cccagcgcca tctgatcgtt ggcaaccagc
      541 atcgcagtgg gaacgatgcc ctcattcagc atttgcatgg tttgttgaaa accggacatg
      601 gcactccagt cgccttcccg ttccgctatc ggctgaattt gattgcgagt gagatattta
      661 tgccagccag ccagacgcag acgcgccgag acagaactta atgggcccgc taacagcgcg
      721 atttgctggt gacccaatgc gaccagatgc tccacgccca gtcgcgtacc gtcctcatgg
      781 gagaaaataa tactgttgat gggtgtctgg tcagagacat caagaaataa cgccggaaca
      841 ttagtgcagg cagcttccac agcaatggca tcctggtcat ccagcggata gttaatgatc
      901 agcccactga cgcgttgcgc gagaagattg tgcaccgccg ctttacaggc ttcgacgccg
      961 cttcgttcta ccatcgacac caccacgctg gcacccagtt gatcggcgcg agatttaatc
     1021 gccgcgacaa tttgcgacgg cgcgtgcagg gccagactgg aggtggcaac gccaatcagc
     1081 aacgactgtt tgcccgccag ttgttgtgcc acgcggttgg gaatgtaatt cagctccgcc
     1141 atcgccgctt ccactttttc ccgcgttttc gcagaaacgt ggctggcctg gttcaccacg
     1201 cgggaaacgg tctgataaga gacaccggca tactctgcga catcgtataa cgttactggt
     1261 ttcatattca ccaccctgaa ttgactctct tccgggcgct atcatgccat accgcgaaag
     1321 gttttgcgcc attcgatggc gcgccgcttc gtcaggccac atagctttct tgttctgatc
     1381 ggaacgatcg ttggctgtgt tgacaattaa tcatcggctc gtataatgtg tggaattgtg
     1441 agcgctcaca attctatgga ctatgtttct gtcaccggat gtgctttccg gtctgatgag
     1501 tccgtgagga cgaaacagta ctagtgaaag aggagaaata ctagatgccg attagcccga
     1561 ttgaaaccgt tccggttaaa ctgaaaccgg gtatggatgg tccgaaagtt aaacagtggc
     1621 ctctgaccga agaaaaaatc aaagcactgg ttgaaatctg caccgagatg gaaaaagaag
     1681 gcaaaattag caaaatcggt ccggaaaatc cgtataatac accggttttt gccattaaga
     1741 aaaaagatag caccaaatgg cgcaaactgg tggattttcg tgaactgaat aaacgcaccc
     1801 aggatttttg ggaagttcag ctgggtattc cgcatccggc aggtctgaaa cagaaaaaaa
     1861 gcgttaccgt tctggatgtt ggtgatgcat attttagcgt tccgctggat aaagatttcc
     1921 gtaaatatac cgcatttacc atcccgagca ttaataacga aacaccgggt attcgctatc
     1981 agtataatgt tctgccgcag ggttggaaag gtagtccggc aatttttcag tgtagcatga
     2041 ccaaaattct ggaaccgttt cgtaaacaga atccggatat tgtgatctac cagtatatgg
     2101 atgatctgta tgttggtagc gatctggaaa ttggtcagca tcgtaccaaa attgaagaac
     2161 tgcgtcagca tctgctgcgt tggggtttta ccacaccgga taaaaaacat cagaaagaac
     2221 cgccttttct gtggatgggt tatgaactgc atccggataa atggaccgtt cagccgattg
     2281 ttctgccgga aaaagatagc tggaccgtta atgatattca gaaactggtg ggtaaactga
     2341 attgggcaag ccagatttat gccggtatta aagttcgtca gctgtgtaaa ctgctgcgtg
     2401 gcaccaaagc actgaccgaa gttgttccgc tgacagaaga agcagaactg gaactggcag
     2461 aaaatcgtga aattctgaaa gaaccggttc acggcgttta ttatgatccg agcaaagatc
     2521 tgattgccga aattcagaaa cagggtcagg gtcagtggac ctatcagatt tatcaagaac
     2581 cgtttaaaaa cctgaaaacc ggcaaatatg cacgtatgaa aggtgcacat accaacgatg
     2641 ttaaacagct gaccgaagca gttcagaaaa ttgcaaccga aagcattgtg atttggggta
     2701 aaaccccgaa attcaaactg ccgattcaga aagaaacctg ggaagcatgg tggaccgaat
     2761 attggcaggc aacctggatt ccggaatggg aatttgttaa tacccctccg ctggttaaac
     2821 tgtggtatca gctggaaaaa gaaccgatta ttggtgccga aaccttttat gttgatggtg
     2881 cagccaatcg tgaaaccaaa ctgggtaaag caggttatgt taccgatcgt ggtcgtcaga
     2941 aagtggtgcc gctgaccgat accaccaatc agaaaaccga actacaggca attcatctgg
     3001 cactacagga tagcggtctg gaagttaata ttgttaccga tagccagtat gccctgggta
     3061 ttattcaggc acagccggat aaaagcgaaa gcgaactggt tagccagatt attgaacagc
     3121 tgatcaaaaa agaaaaagtg tacctggcat gggttccggc acataaaggt attggtggta
     3181 atgaacaggt tgatggtctg gttagcgcag gtattcgtaa agttctgtaa tattagtgaa
     3241 agaggagaaa tactagatgc cgattagccc gattgaaacc gttccggtta aactgaaacc
     3301 gggtatggat ggtccgaaag ttaaacagtg gcctctgacc gaagaaaaaa tcaaagcact
     3361 ggttgaaatc tgcaccgaga tggaaaaaga aggcaaaatt agcaaaatcg gtccggaaaa
     3421 tccgtataat acaccggttt ttgccattaa gaaaaaagat agcaccaaat ggcgcaaact
     3481 ggtggatttt cgtgaactga ataaacgcac ccaggatttt tgggaagttc agctgggtat
     3541 tccgcatccg gcaggtctga aacagaaaaa aagcgttacc gttctggatg ttggtgatgc
     3601 atattttagc gttccgctgg ataaagattt ccgtaaatat accgcattta ccatcccgag
     3661 cattaataac gaaacaccgg gtattcgcta tcagtataat gttctgccgc agggttggaa
     3721 aggtagtccg gcaatttttc agtgtagcat gaccaaaatt ctggaaccgt ttcgtaaaca
     3781 gaatccggat attgtgatct accagtatat ggatgatctg tatgttggta gcgatctgga
     3841 aattggtcag catcgtacca aaattgaaga actgcgtcag catctgctgc gttggggttt
     3901 taccacaccg gataaaaaac atcagaaaga accgcctttt ctgtggatgg gttatgaact
     3961 gcatccggat aaatggaccg ttcagccgat tgttctgccg gaaaaagata gctggaccgt
     4021 taatgatatt cagaaactgg tgggtaaact gaattgggca agccagattt atgccggtat
     4081 taaagttcgt cagctgtgta aactgctgcg tggcaccaaa gcactgaccg aagttgttcc
     4141 gctgacagaa gaagcagaac tggaactggc agaaaatcgt gaaattctga aagaaccggt
     4201 tcacggcgtt tattatgatc cgagcaaaga tctgattgcc gaaattcaga aacagggtca
     4261 gggtcagtgg acctatcaga tttatcaaga accgtttaaa aacctgaaaa ccggcaaata
     4321 tgcacgtatg aaaggtgcac ataccaacga tgttaaacag ctgaccgaag cagttcagaa
     4381 aattgcaacc gaaagcattg tgatttgggg taaaaccccg aaattcaaac tgccgattca
     4441 gaaagaaacc tgggaagcat ggtggaccga atattggcag gcaacctgga ttccggaatg
     4501 ggaatttgtt aatacccctc cgctggttaa actgtggtat cagctggaaa aagaaccgat
     4561 tattggtgcc gaaacctttt aagatcgcta ctagagccag gcatcaaata aaacgaaagg
     4621 ctcagtcgaa agactgggcc tttcgtttta tctgttgttt gtcggtgaac gctctctact
     4681 agagtcacac tggctcacct tcgggtgggc ctttctgcgt ttatatacta gaagcggccg
     4741 ctgcaggctt cctcgctcac tgactcgctg cgctcggtcg ttcggctgcg gcgagcggta
     4801 tcagctcact caaaggcggt aatacggtta tccacagaat caggggataa cgcaggaaag
     4861 aacatgtgag caaaaggcca gcaaaaggcc aggaaccgta aaaaggccgc gttgctggcg
     4921 tttttccata ggctccgccc ccctgacgag catcacaaaa atcgacgctc aagtcagagg
     4981 tggcgaaacc cgacaggact ataaagatac caggcgtttc cccctggaag ctccctcgtg
     5041 cgctctcctg ttccgaccct gccgcttacc ggatacctgt ccgcctttct cccttcggga
     5101 agcgtggcgc tttctcatag ctcacgctgt aggtatctca gttcggtgta ggtcgttcgc
     5161 tccaagctgg gctgtgtgca cgaacccccc gttcagcccg accgctgcgc cttatccggt
     5221 aactatcgtc ttgagtccaa cccggtaaga cacgacttat cgccactggc agcagccact
     5281 ggtaacagga ttagcagagc gaggtatgta ggcggtgcta cagagttctt gaagtggtgg
     5341 cctaactacg gctacactag aaggacagta tttggtatct gcgctctgct gaagccagtt
     5401 accttcggaa aaagagttgg tagctcttga tccggcaaac aaaccaccgc tggtagcggt
     5461 ggtttttttg tttgcaagca gcagattacg cgcagaaaaa aaggatctca agaagatcct
     5521 ttgatctttt ctacggggtc tgacgctcag tggaacgaaa actcacgtta agggattttg
     5581 gtcatgagat tatcaaaaag gatcttcacc tagatccttt taaattaaaa atgaagtttt
     5641 aaatcaatct aaagtatata tgagtaaact tggtctgaca gttaccaatg cttaatcagt
     5701 gaggcaccta tctcagcgat ctgtctattt cgttcatcca tagttgcctg actccccgtc
     5761 gtgtagataa ctacgatacg ggagggctta ccatctggcc ccagtgctgc aatgataccg
     5821 cgagacccac gctcaccggc tccagattta tcagcaataa accagccagc cggaagggcc
     5881 gagcgcagaa gtggtcctgc aactttatcc gcctccatcc agtctattaa ttgttgccgg
     5941 gaagctagag taagtagttc gccagttaat agtttgcgca acgttgttgc cattgctaca
     6001 ggcatcgtgg tgtcacgctc gtcgtttggt atggcttcat tcagctccgg ttcccaacga
     6061 tcaaggcgag ttacatgatc ccccatgttg tgcaaaaaag cggttagctc cttcggtcct
     6121 ccgatcgttg tcagaagtaa gttggccgca gtgttatcac tcatggttat ggcagcactg
     6181 cataattctc ttactgtcat gccatccgta agatgctttt ctgtgactgg tgagtactca
     6241 accaagtcat tctgagaata gtgtatgcgg cgaccgagtt gctcttgccc ggcgtcaata
     6301 cgggataata ccgcgccaca tagcagaact ttaaaagtgc tcatcattgg aaaacgttct
     6361 tcggggcgaa aactctcaag gatcttaccg ctgttgagat ccagttcgat gtaacccact
     6421 cgtgcaccca actgatcttc agcatctttt actttcacca gcgtttctgg gtgagcaaaa
     6481 acaggaaggc aaaatgccgc aaaaaaggga ataagggcga cacggaaatg ttgaatactc
     6541 atactcttcc tttttcaata ttattgaagc atttatcagg gttattgtct catgagcgga
     6601 tacatatttg aatgtattta g
//`
        
sequences.seq_pHIV_pTp66p51 = {};
sequences.seq_pHIV_pTp66p51.varName = "seq_pHIV_pTp66p51";
sequences.seq_pHIV_pTp66p51.name = "pHIV_pTp66p51";
sequences.seq_pHIV_pTp66p51.seqType = "both";
sequences.seq_pHIV_pTp66p51.comp = true;
sequences.seq_pHIV_pTp66p51.data = `LOCUS       pHIV_pTp66p51           6621 bp ds-DNA     circular     09-OCT-2020
DEFINITION  .
KEYWORDS    "accession:addgene_78233_145927"                                   
SOURCE      synthetic DNA construct                                            
  ORGANISM  synthetic DNA construct                                            
FEATURES             Location/Qualifiers
     primer_bind     complement(5003..5022)
                     /label="pBR322ori-F"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     Scar            4677..4684
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     primer_bind     1227..1246
                     /label="LacI-R"
                     /ApEinfo_revcolor=#d6b295
                     /ApEinfo_fwdcolor=#d6b295
     RBS             1527..1538
                     /label="strong bacterial ribosome binding site (Elowitz and Leibler, 2000)"
                     /ApEinfo_revcolor=#b4abac
                     /ApEinfo_fwdcolor=#b4abac
     source          1..6621
                     /label="source"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     misc_feature    1454..1526
                     /label="on g-block 1"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer_bind     complement(4752..4769)
                     /label="L4440"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     promoter        complement(join(6543..6621,1..26))
                     /label="AmpR promoter"
                     /ApEinfo_revcolor=#d59687
                     /ApEinfo_fwdcolor=#d59687
     CDS             complement(5685..6344)
                     /label="AmpR"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     terminator      4692..4719
                     /label="T7Te terminator"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     misc_feature    3257..4582
                     /label="HIVRT P51"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     misc_RNA        1469..1518
                     /label="sTRSV HHRz"
                     /ApEinfo_revcolor=#f8d3a9
                     /ApEinfo_fwdcolor=#f8d3a9
     RBS             3239..3250
                     /label="strong bacterial ribosome binding site (Elowitz and Leibler, 2000)"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     CDS             complement(5682..6542)
                     /label="AmpR"
                     /ApEinfo_revcolor=#d59687
                     /ApEinfo_fwdcolor=#d59687
     misc_feature    1545..3230
                     /label="HIVRT p66"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     protein_bind    1434..1453
                     /label="lac operator (symmetric)"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     Scar            4589..4596
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     rep_origin      complement(4923..5511)
                     /label="ori"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     CDS             complement(183..1265)
                     /label="lacI"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     rep_origin      complement(4905..5587)
                     /label="ColE1 origin"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     promoter        1400..1428
                     /label="tac promoter"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     primer_bind     6305..6324
                     /label="Amp-R"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     terminator      91..120
                     /label="T3Te terminator"
                     /ApEinfo_revcolor=#d59687
                     /ApEinfo_fwdcolor=#d59687
     terminator      4605..4676
                     /label="rrnB T1 terminator"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     primer          2985..3006
                     /label="pHIV NEB FWD"
                     /note="sequence: caggcaattcatctggcactac"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer          1469..1488
                     /label="pHIV FWD"
                     /note="sequence: CGTGAGCGTCTCACGATctgtcaccggatgtgctttc"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer          1517..1547
                     /label="pHIV Backbone NEB FWD"
                     /note="sequence: taaagttctgtaatattagtgaaagaggagaaatactagatg"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer          complement(4704..4719)
                     /label="pHIV REV"
                     /note="sequence: ATTACACGTCTCAcgcagaaaggcccacc"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          3218..3259
                     /label="pHIV Backbone NEB FWD"
                     /note="sequence: taaagttctgtaatattagtgaaagaggagaaatactagatg"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer          complement(4704..4719)
                     /label="pHIV REV"
                     /note="sequence: AATATCCGTCTCTAGTCcgcagaaaggcccacc"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          complement(3210..3246)
                     /label="pHIV NEB REV"
                     /note="sequence: tcctctttcactaatattacagaactttacgaatacc"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          complement(2983..3004)
                     /label="pHIV Backbone NEB REV"
                     /note="sequence: agtgccagatgaattgcctgta"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          1469..1488
                     /label="pHIV FWD"
                     /note="sequence: ATTACACGTCTCActgtcaccggatgtgctttc"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
ORIGIN
        1 aaaaataaac aaataggggt tccgcgcaca tttccccgaa aagtgccacc tgacgtctaa
       61 gaaaaggaat attcagcaat ttgcccgtgc cgaagaaagg cccacccgtg aaggtgagcc
      121 agtgagttga ttgctacgta atgtcggcca attcgcgcta acttacatta attgcgttgc
      181 gctcactgcc cgctttccag tcgggaaacc tgtcgtgcca gctgcattaa tgaatcggcc
      241 aacgcgcggg gagaggcggt ttgcgtattg ggcgccaggg tggtttttct tttcaccagt
      301 gagactggca acagctgatt gcccttcacc gcctggccct gagagagttg cagcaagcgg
      361 tccacgctgg tttgccccag caggcgaaaa tcctgtttga tggtggttaa cggcgggata
      421 taacatgagc tatcttcggt atcgtcgtat cccactaccg agatatccgc accaacgcgc
      481 agcccggact cggtaatggc gcgcattgcg cccagcgcca tctgatcgtt ggcaaccagc
      541 atcgcagtgg gaacgatgcc ctcattcagc atttgcatgg tttgttgaaa accggacatg
      601 gcactccagt cgccttcccg ttccgctatc ggctgaattt gattgcgagt gagatattta
      661 tgccagccag ccagacgcag acgcgccgag acagaactta atgggcccgc taacagcgcg
      721 atttgctggt gacccaatgc gaccagatgc tccacgccca gtcgcgtacc gtcctcatgg
      781 gagaaaataa tactgttgat gggtgtctgg tcagagacat caagaaataa cgccggaaca
      841 ttagtgcagg cagcttccac agcaatggca tcctggtcat ccagcggata gttaatgatc
      901 agcccactga cgcgttgcgc gagaagattg tgcaccgccg ctttacaggc ttcgacgccg
      961 cttcgttcta ccatcgacac caccacgctg gcacccagtt gatcggcgcg agatttaatc
     1021 gccgcgacaa tttgcgacgg cgcgtgcagg gccagactgg aggtggcaac gccaatcagc
     1081 aacgactgtt tgcccgccag ttgttgtgcc acgcggttgg gaatgtaatt cagctccgcc
     1141 atcgccgctt ccactttttc ccgcgttttc gcagaaacgt ggctggcctg gttcaccacg
     1201 cgggaaacgg tctgataaga gacaccggca tactctgcga catcgtataa cgttactggt
     1261 ttcatattca ccaccctgaa ttgactctct tccgggcgct atcatgccat accgcgaaag
     1321 gttttgcgcc attcgatggc gcgccgcttc gtcaggccac atagctttct tgttctgatc
     1381 ggaacgatcg ttggctgtgt tgacaattaa tcatcggctc gtataatgtg tggaattgtg
     1441 agcgctcaca attctatgga ctatgtttct gtcaccggat gtgctttccg gtctgatgag
     1501 tccgtgagga cgaaacagta ctagtgaaag aggagaaata ctagatgccg attagcccga
     1561 ttgaaaccgt tccggttaaa ctgaaaccgg gtatggatgg tccgaaagtt aaacagtggc
     1621 ctctgaccga agaaaaaatc aaagcactgg ttgaaatctg caccgagatg gaaaaagaag
     1681 gcaaaattag caaaatcggt ccggaaaatc cgtataatac accggttttt gccattaaga
     1741 aaaaagatag caccaaatgg cgcaaactgg tggattttcg tgaactgaat aaacgcaccc
     1801 aggatttttg ggaagttcag ctgggtattc cgcatccggc aggtctgaaa cagaaaaaaa
     1861 gcgttaccgt tctggatgtt ggtgatgcat attttagcgt tccgctggat aaagatttcc
     1921 gtaaatatac cgcatttacc atcccgagca ttaataacga aacaccgggt attcgctatc
     1981 agtataatgt tctgccgcag ggttggaaag gtagtccggc aatttttcag tgtagcatga
     2041 ccaaaattct ggaaccgttt cgtaaacaga atccggatat tgtgatctac cagtatatgg
     2101 atgatctgta tgttggtagc gatctggaaa ttggtcagca tcgtaccaaa attgaagaac
     2161 tgcgtcagca tctgctgcgt tggggtttta ccacaccgga taaaaaacat cagaaagaac
     2221 cgccttttct gtggatgggt tatgaactgc atccggataa atggaccgtt cagccgattg
     2281 ttctgccgga aaaagatagc tggaccgtta atgatattca gaaactggtg ggtaaactga
     2341 attgggcaag ccagatttat gccggtatta aagttcgtca gctgtgtaaa ctgctgcgtg
     2401 gcaccaaagc actgaccgaa gttgttccgc tgacagaaga agcagaactg gaactggcag
     2461 aaaatcgtga aattctgaaa gaaccggttc acggcgttta ttatgatccg agcaaagatc
     2521 tgattgccga aattcagaaa cagggtcagg gtcagtggac ctatcagatt tatcaagaac
     2581 cgtttaaaaa cctgaaaacc ggcaaatatg cacgtatgaa aggtgcacat accaacgatg
     2641 ttaaacagct gaccgaagca gttcagaaaa ttgcaaccga aagcattgtg atttggggta
     2701 aaaccccgaa attcaaactg ccgattcaga aagaaacctg ggaagcatgg tggaccgaat
     2761 attggcaggc aacctggatt ccggaatggg aatttgttaa tacccctccg ctggttaaac
     2821 tgtggtatca gctggaaaaa gaaccgatta ttggtgccga aaccttttat gttgatggtg
     2881 cagccaatcg tgaaaccaaa ctgggtaaag caggttatgt taccgatcgt ggtcgtcaga
     2941 aagtggtgcc gctgaccgat accaccaatc agaaaaccga actgcaggca attcatctgg
     3001 cactgcagga tagcggtctg gaagttaata ttgttaccga tagccagtat gccctgggta
     3061 ttattcaggc acagccggat aaaagcgaaa gcgaactggt tagccagatt attgaacagc
     3121 tgatcaaaaa agaaaaagtg tacctggcat gggttccggc acataaaggt attggtggta
     3181 atgaacaggt tgatggtctg gttagcgcag gtattcgtaa agttctgtaa tactagtgaa
     3241 agaggagaaa tactagatgc cgattagccc gattgaaacc gttccggtta aactgaaacc
     3301 gggtatggat ggtccgaaag ttaaacagtg gcctctgacc gaagaaaaaa tcaaagcact
     3361 ggttgaaatc tgcaccgaga tggaaaaaga aggcaaaatt agcaaaatcg gtccggaaaa
     3421 tccgtataat acaccggttt ttgccattaa gaaaaaagat agcaccaaat ggcgcaaact
     3481 ggtggatttt cgtgaactga ataaacgcac ccaggatttt tgggaagttc agctgggtat
     3541 tccgcatccg gcaggtctga aacagaaaaa aagcgttacc gttctggatg ttggtgatgc
     3601 atattttagc gttccgctgg ataaagattt ccgtaaatat accgcattta ccatcccgag
     3661 cattaataac gaaacaccgg gtattcgcta tcagtataat gttctgccgc agggttggaa
     3721 aggtagtccg gcaatttttc agtgtagcat gaccaaaatt ctggaaccgt ttcgtaaaca
     3781 gaatccggat attgtgatct accagtatat ggatgatctg tatgttggta gcgatctgga
     3841 aattggtcag catcgtacca aaattgaaga actgcgtcag catctgctgc gttggggttt
     3901 taccacaccg gataaaaaac atcagaaaga accgcctttt ctgtggatgg gttatgaact
     3961 gcatccggat aaatggaccg ttcagccgat tgttctgccg gaaaaagata gctggaccgt
     4021 taatgatatt cagaaactgg tgggtaaact gaattgggca agccagattt atgccggtat
     4081 taaagttcgt cagctgtgta aactgctgcg tggcaccaaa gcactgaccg aagttgttcc
     4141 gctgacagaa gaagcagaac tggaactggc agaaaatcgt gaaattctga aagaaccggt
     4201 tcacggcgtt tattatgatc cgagcaaaga tctgattgcc gaaattcaga aacagggtca
     4261 gggtcagtgg acctatcaga tttatcaaga accgtttaaa aacctgaaaa ccggcaaata
     4321 tgcacgtatg aaaggtgcac ataccaacga tgttaaacag ctgaccgaag cagttcagaa
     4381 aattgcaacc gaaagcattg tgatttgggg taaaaccccg aaattcaaac tgccgattca
     4441 gaaagaaacc tgggaagcat ggtggaccga atattggcag gcaacctgga ttccggaatg
     4501 ggaatttgtt aatacccctc cgctggttaa actgtggtat cagctggaaa aagaaccgat
     4561 tattggtgcc gaaacctttt aagatcgcta ctagagccag gcatcaaata aaacgaaagg
     4621 ctcagtcgaa agactgggcc tttcgtttta tctgttgttt gtcggtgaac gctctctact
     4681 agagtcacac tggctcacct tcgggtgggc ctttctgcgt ttatatacta gaagcggccg
     4741 ctgcaggctt cctcgctcac tgactcgctg cgctcggtcg ttcggctgcg gcgagcggta
     4801 tcagctcact caaaggcggt aatacggtta tccacagaat caggggataa cgcaggaaag
     4861 aacatgtgag caaaaggcca gcaaaaggcc aggaaccgta aaaaggccgc gttgctggcg
     4921 tttttccata ggctccgccc ccctgacgag catcacaaaa atcgacgctc aagtcagagg
     4981 tggcgaaacc cgacaggact ataaagatac caggcgtttc cccctggaag ctccctcgtg
     5041 cgctctcctg ttccgaccct gccgcttacc ggatacctgt ccgcctttct cccttcggga
     5101 agcgtggcgc tttctcatag ctcacgctgt aggtatctca gttcggtgta ggtcgttcgc
     5161 tccaagctgg gctgtgtgca cgaacccccc gttcagcccg accgctgcgc cttatccggt
     5221 aactatcgtc ttgagtccaa cccggtaaga cacgacttat cgccactggc agcagccact
     5281 ggtaacagga ttagcagagc gaggtatgta ggcggtgcta cagagttctt gaagtggtgg
     5341 cctaactacg gctacactag aaggacagta tttggtatct gcgctctgct gaagccagtt
     5401 accttcggaa aaagagttgg tagctcttga tccggcaaac aaaccaccgc tggtagcggt
     5461 ggtttttttg tttgcaagca gcagattacg cgcagaaaaa aaggatctca agaagatcct
     5521 ttgatctttt ctacggggtc tgacgctcag tggaacgaaa actcacgtta agggattttg
     5581 gtcatgagat tatcaaaaag gatcttcacc tagatccttt taaattaaaa atgaagtttt
     5641 aaatcaatct aaagtatata tgagtaaact tggtctgaca gttaccaatg cttaatcagt
     5701 gaggcaccta tctcagcgat ctgtctattt cgttcatcca tagttgcctg actccccgtc
     5761 gtgtagataa ctacgatacg ggagggctta ccatctggcc ccagtgctgc aatgataccg
     5821 cgagacccac gctcaccggc tccagattta tcagcaataa accagccagc cggaagggcc
     5881 gagcgcagaa gtggtcctgc aactttatcc gcctccatcc agtctattaa ttgttgccgg
     5941 gaagctagag taagtagttc gccagttaat agtttgcgca acgttgttgc cattgctaca
     6001 ggcatcgtgg tgtcacgctc gtcgtttggt atggcttcat tcagctccgg ttcccaacga
     6061 tcaaggcgag ttacatgatc ccccatgttg tgcaaaaaag cggttagctc cttcggtcct
     6121 ccgatcgttg tcagaagtaa gttggccgca gtgttatcac tcatggttat ggcagcactg
     6181 cataattctc ttactgtcat gccatccgta agatgctttt ctgtgactgg tgagtactca
     6241 accaagtcat tctgagaata gtgtatgcgg cgaccgagtt gctcttgccc ggcgtcaata
     6301 cgggataata ccgcgccaca tagcagaact ttaaaagtgc tcatcattgg aaaacgttct
     6361 tcggggcgaa aactctcaag gatcttaccg ctgttgagat ccagttcgat gtaacccact
     6421 cgtgcaccca actgatcttc agcatctttt actttcacca gcgtttctgg gtgagcaaaa
     6481 acaggaaggc aaaatgccgc aaaaaaggga ataagggcga cacggaaatg ttgaatactc
     6541 atactcttcc tttttcaata ttattgaagc atttatcagg gttattgtct catgagcgga
     6601 tacatatttg aatgtattta g
//`
        
sequences.seq_pMLRT_GGA_FWD = {};
sequences.seq_pMLRT_GGA_FWD.varName = "seq_pMLRT_GGA_FWD";
sequences.seq_pMLRT_GGA_FWD.name = "pMLRT GGA FWD";
sequences.seq_pMLRT_GGA_FWD.seqType = "linear";
sequences.seq_pMLRT_GGA_FWD.comp = false;
sequences.seq_pMLRT_GGA_FWD.data = `LOCUS       pMLRT_GGA_FWD             29 bp ds-DNA     linear       07-SEP-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 ATTACACGTC TCTCcaAggc ccgatcgat
//`
        
sequences.seq_pMLRT_GGA_REV = {};
sequences.seq_pMLRT_GGA_REV.varName = "seq_pMLRT_GGA_REV";
sequences.seq_pMLRT_GGA_REV.name = "pMLRT GGA REV";
sequences.seq_pMLRT_GGA_REV.seqType = "linear";
sequences.seq_pMLRT_GGA_REV.comp = false;
sequences.seq_pMLRT_GGA_REV.data = `LOCUS       pMLRT_GGA_REV             49 bp ds-DNA     linear       08-JUL-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 TCGCCTCGTC TCACCCTtct ggacatttat tatatataaa cgcagaaag
//`
        
sequences.seq_pMLRT_Linearized = {};
sequences.seq_pMLRT_Linearized.varName = "seq_pMLRT_Linearized";
sequences.seq_pMLRT_Linearized.name = "pMLRT Linearized";
sequences.seq_pMLRT_Linearized.seqType = "linear";
sequences.seq_pMLRT_Linearized.comp = true;
sequences.seq_pMLRT_Linearized.data = `LOCUS       pMLRT_Linearized        2133 bp ds-DNA     linear       02-SEP-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     terminator      2066..2093
                     /label="T7Te terminator"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     terminator      1979..2050
                     /label="rrnB T1 terminator"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     Scar            1963..1970
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     Scar            2051..2058
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     primer          15..30
                     /label="pMLRT GGA FWD"
                     /note="sequence: ATTACACGTCTCAttggatcccagcaggcc"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer          complement(2085..2116)
                     /label="pMLRT GGA REV"
                     /note="sequence: TCGCCTCGTCTCACCCTtctggacatttattatatataaacgcagaaag"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          complement(1367..1387)
                     /label="pMLRT SDM REV"
                     /note="sequence: ggggccagaatgacaagtggc"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          1388..1413
                     /label="pMLRT SDM FWD"
                     /note="sequence: ccatgcagtagaggcacttgtcaaac"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
ORIGIN
        1 ATTACACGTC TCAttggatc ccagcaggcc tcagggcccg atcgatggga ccaatggggc
       61 agcccctgca agtgttgacc ctaaatatag aagatgagta tcggctacat gagacctcaa
      121 aagagccaga tgtttctcta gggtccacat ggctgtctga ttttcctcag gcctgggcgg
      181 aaaccggggg catgggactg gcagttcgcc aagctcctct gatcatacct ctgaaagcaa
      241 cctctacccc cgtgtccata aaacaatacc ccatgtcaca agaagccaga ctggggatca
      301 agccccacat acagagactg ttggaccagg gaatactggt accctgccag tccccctgga
      361 acacgcccct gctacccgtt aagaaaccag ggactaatga ttataggcct gtccaggatc
      421 tgagagaagt caacaagcgg gtggaagaca tccaccccac cgtgcccaac ccttacaacc
      481 tcttgagcgg gctcccaccg tcccaccagt ggtacactgt gcttgattta aaggatgcct
      541 ttttctgcct gagactccac cccaccagtc agcctctctt cgcctttgag tggagagatc
      601 cagagatggg aatctcagga caattgacct ggaccagact cccacagggt ttcaaaaaca
      661 gtcccaccct gtttgatgag gcactgcaca gagacctagc agacttccgg atccagcacc
      721 cagacttgat cctgctacag tacgtggatg acttactgct ggccgccact tctgagctag
      781 actgccaaca aggtactcgg gccctgttac aaaccctagg gaacctcggg tatcgggcct
      841 cggccaagaa agcccaaatt tgccagaaac aggtcaagta tctggggtat cttctaaaag
      901 agggtcagag atggctgact gaggccagaa aagagactgt gatggggcag cctactccga
      961 agacccctcg acaactaagg gagttcctag ggacggcagg cttctgtcgc ctctggatcc
     1021 ctgggtttgc agaaatggca gcccccttgt accctctcac caaaacgggg actctgttta
     1081 attggggccc agaccaacaa aaggcctatc aagaaatcaa gcaagctctt ctaactgccc
     1141 cagccctggg gttgccagat ttgactaagc cctttgaact ctttgtcgac gagaagcagg
     1201 gctacgccaa aggtgtccta acgcaaaaac tgggaccttg gcgtcggccg gtggcctacc
     1261 tgtccaaaaa gctagaccca gtagcagctg ggtggccccc ttgcctacgg atggtagcag
     1321 ccattgccgt actgacaaag gatgcaggca agctaaccat gggacagcca cttgtcattc
     1381 tggcccccca tgcagtagag gcacttgtca aacaaccccc cgaccgctgg ctttccaacg
     1441 cccggatgac tcactatcag gccttgcttt tggacacgga ccgggtccag ttcggaccgg
     1501 tggtagccct gaacccggct acgctgctcc cactgcctga ggaagggctg caacacaact
     1561 gccttgatat cctggccgaa gcccacggaa cccgacccga cctaacggac cagccgctcc
     1621 cagacgccga ccacacctgg tacacggatg gaagcagtct cttacaagag ggacagcgta
     1681 aggcgggagc tgcggtgacc accgagaccg aggtaatctg ggctaaagcc ctgccagccg
     1741 ggacatccgc tcagcgggct gaactgatag cactcaccca ggccctaaag atggcagaag
     1801 gtaagaagct aaatgtttat actgatagcc gttatgcttt tgctactgcc catatccatg
     1861 gagaaatata cagaaggcgt gggttgctca catcagaagg caaagagatc aaaaataaag
     1921 acgagatctt taaatgacgc tgatagtgct agtgtagatc gctactagag ccaggcatca
     1981 aataaaacga aaggctcagt cgaaagactg ggcctttcgt tttatctgtt gtttgtcggt
     2041 gaacgctctc tactagagtc acactggctc accttcgggt gggcctttct gcgtttatat
     2101 ataataaatg tccagaAGGG TGAGACGAGG CGA
//`
        
sequences.seq_pMLRT_SDM_FWD = {};
sequences.seq_pMLRT_SDM_FWD.varName = "seq_pMLRT_SDM_FWD";
sequences.seq_pMLRT_SDM_FWD.name = "pMLRT SDM FWD";
sequences.seq_pMLRT_SDM_FWD.seqType = "linear";
sequences.seq_pMLRT_SDM_FWD.comp = false;
sequences.seq_pMLRT_SDM_FWD.data = `LOCUS       pMLRT_SDM_FWD             21 bp ds-DNA     linear       08-JUL-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 cccatgcagt agaggcactt g
//`
        
sequences.seq_pMLRT_SDM_Product = {};
sequences.seq_pMLRT_SDM_Product.varName = "seq_pMLRT_SDM_Product";
sequences.seq_pMLRT_SDM_Product.name = "pMLRT SDM Product";
sequences.seq_pMLRT_SDM_Product.seqType = "both";
sequences.seq_pMLRT_SDM_Product.comp = true;
sequences.seq_pMLRT_SDM_Product.data = `LOCUS       pMLRT_SDM_Product       5742 bp ds-DNA     circular     07-SEP-2020
DEFINITION  .
KEYWORDS    "accession:addgene_78234_146112"                                   
SOURCE      synthetic DNA construct                                            
  ORGANISM  synthetic DNA construct                                            
FEATURES             Location/Qualifiers
     misc_feature    3339..3450
                     /label="on g-block 2"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     terminator      2157..2251
                     /label="lambda t0 terminator"
                     /ApEinfo_revcolor=#d6b295
                     /ApEinfo_fwdcolor=#d6b295
     CDS             complement(2282..3076)
                     /label="NeoR/KanR"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     terminator      5486..5513
                     /label="T7Te terminator"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     CDS             3405..3419
                     /label="enterokinase site"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     RBS             3339..3350
                     /label="strong bacterial ribosome binding site (Elowitz and Leibler, 2000)"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     CDS             complement(445..1395)
                     /label="Rep101"
                     /ApEinfo_revcolor=#d59687
                     /ApEinfo_fwdcolor=#d59687
     misc_feature    5537..5652
                     /label="on g-block 3"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     terminator      5399..5470
                     /label="rrnB T1 terminator"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     CDS             3363..3398
                     /label="6xHN"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
     primer_bind     complement(2393..2412)
                     /label="Neo-F"
                     /ApEinfo_revcolor=#d59687
                     /ApEinfo_fwdcolor=#d59687
     CDS             complement(2282..3073)
                     /label="Kan/neoR"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     misc_feature    3357..5357
                     /label="MLRT ORF"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     primer_bind     3003..3022
                     /label="Neo-R"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     rep_origin      1443..1665
                     /label="pSC101 ori"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     primer_bind     3255..3273
                     /label="pBRforEco"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     Scar            5471..5478
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     source          1..5742
                     /label="source"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     terminator      5566..5652
                     /label="rrnB T1 terminator"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     Scar            5383..5390
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     primer          complement(5624..5652)
                     /label="pMLRT REV"
                     /note="sequence: atttgtcctactcaggagagcgttcaccg"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          4807..4827
                     /label="pMLRT SDM FWD"
                     /note="sequence: cccatgcagtagaggcacttg"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer          3339..3361
                     /label="pMLRT FWD"
                     /note="sequence: CGTGAGCGTCTCTAAGGaaagaggagaaaggtaccatggg"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer          complement(5631..5652)
                     /label="pMLRT REV"
                     /note="sequence: CTCACGCGTCTCAGCTACTGCAGCGGCCGCTACTAGTAatttgtcctactcaggagagcg"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          complement(5631..5652)
                     /label="pMLRT REV"
                     /note="sequence: CTCACGCGTCTCAGCTAatttgtcctactcaggagagcg"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          5653..5672
                     /label="pMLRT FWD"
                     /note="sequence: TACTAGTAGCGGCCGCTGCAGccgccgccctagacctaggg"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     primer          3451..3466
                     /label="pMLRT GGA FWD"
                     /note="sequence: ATTACACGTCTCTCcaAggcccgatcgat"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer          complement(4787..4806)
                     /label="pMLRT SDM REV"
                     /note="sequence: gggccagaatgacaagtggc"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          complement(5505..5536)
                     /label="pMLRT GGA REV"
                     /note="sequence: TCGCCTCGTCTCACCCTtctggacatttattatatataaacgcagaaag"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
ORIGIN
        1 ttcaggtttg ccggctgaaa gcgctatttc ttccagaatt gccatgattt tttccccacg
       61 ggaggcgtca ctggctcccg tgttgtcggc agctttgatt cgataagcag catcgcctgt
      121 ttcaggctgt ctatgtgtga ctgttgagct gtaacaagtt gtctcaggtg ttcaatttca
      181 tgttctagtt gctttgtttt actggtttca cctgttctat taggtgttac atgctgttca
      241 tctgttacat tgtcgatctg ttcatggtga acagctttaa atgcaccaaa aactcgtaaa
      301 agctctgatg tatctatctt ttttacaccg ttttcatctg tgcatatgga cagttttccc
      361 tttgatatct aacggtgaac agttgttcta cttttgtttg ttagtcttga tgcttcactg
      421 atagatacaa gagccataag aacctcagat ccttccgtat ttagccagta tgttctctag
      481 tgtggttcgt tgtttttgcg tgagccatga gaacgaacca ttgagatcat gcttactttg
      541 catgtcactc aaaaattttg cctcaaaact ggtgagctga atttttgcag ttaaagcatc
      601 gtgtagtgtt tttcttagtc cgttacgtag gtaggaatct gatgtaatgg ttgttggtat
      661 tttgtcacca ttcattttta tctggttgtt ctcaagttcg gttacgagat ccatttgtct
      721 atctagttca acttggaaaa tcaacgtatc agtcgggcgg cctcgcttat caaccaccaa
      781 tttcatattg ctgtaagtgt ttaaatcttt acttattggt ttcaaaaccc attggttaag
      841 ccttttaaac tcatggtagt tattttcaag cattaacatg aacttaaatt catcaaggct
      901 aatctctata tttgccttgt gagttttctt ttgtgttagt tcttttaata accactcata
      961 aatcctcata gagtatttgt tttcaaaaga cttaacatgt tccagattat attttatgaa
     1021 tttttttaac tggaaaagat aaggcaatat ctcttcacta aaaactaatt ctaatttttc
     1081 gcttgagaac ttggcatagt ttgtccactg gaaaatctca aagcctttaa ccaaaggatt
     1141 cctgatttcc acagttctcg tcatcagctc tctggttgct ttagctaata caccataagc
     1201 attttcccta ctgatgttca tcatctgagc gtattggtta taagtgaacg ataccgtccg
     1261 ttctttcctt gtagggtttt caatcgtggg gttgagtagt gccacacagc ataaaattag
     1321 cttggtttca tgctccgtta agtcatagcg actaatcgct agttcatttg ctttgaaaac
     1381 aactaattca gacatacatc tcaattggtc taggtgattt taatcactat accaattgag
     1441 atgggctagt caatgataat tactagtcct tttcctttga gttgtgggta tctgtaaatt
     1501 ctgctagacc tttgctggaa aacttgtaaa ttctgctaga ccctctgtaa attccgctag
     1561 acctttgtgt gttttttttg tttatattca agtggttata atttatagaa taaagaaaga
     1621 ataaaaaaag ataaaaagaa tagatcccag ccctgtgtat aactcactac tttagtcagt
     1681 tccgcagtat tacaaaagga tgtcgcaaac gctgtttgct cctctacaaa acagacctta
     1741 aaaccctaaa ggcttaagta gcaccctcgc aagctcgggc aaatcgctga atattccttt
     1801 tgtctccgac catcaggcac ctgagtcgct gtctttttcg tgacattcag ttcgctgcgc
     1861 tcacggctct ggcagtgaat gggggtaaat ggcactacag gcgcctttta tggattcatg
     1921 caaggaaact acccataata caagaaaagc ccgtcacggg cttctcaggg cgttttatgg
     1981 cgggtctgct atgtggtgct atctgacttt ttgctgttca gcagttcctg ccctctgatt
     2041 ttccagtctg accacttcgg attatcccgt gacaggtcat tcagactggc taatgcaccc
     2101 agtaaggcag cggtatcatc aacaggctta cccgtcttac tgtccctagt gcttggattc
     2161 tcaccaataa aaaacgcccg gcggcaaccg agcgttctga acaaatccag atggagttct
     2221 gaggtcatta ctggatctat caacaggagt ccaagcgagc tctcgaaccc cagagtcccg
     2281 ctcagaagaa ctcgtcaaga aggcgataga aggcgatgcg ctgcgaatcg ggagcggcga
     2341 taccgtaaag cacgaggaag cggtcagccc attcgccgcc aagctcttca gcaatatcac
     2401 gggtagccaa cgctatgtcc tgatagcggt ccgccacacc cagccggcca cagtcgatga
     2461 atccagaaaa gcggccattt tccaccatga tattcggcaa gcaggcatcg ccatgggtca
     2521 cgacgagatc ctcgccgtcg ggcatgcgcg ccttgagcct ggcgaacagt tcggctggcg
     2581 cgagcccctg atgctcttcg tccagatcat cctgatcgac aagaccggct tccatccgag
     2641 tacgtgctcg ctcgatgcga tgtttcgctt ggtggtcgaa tgggcaggta gccggatcaa
     2701 gcgtatgcag ccgccgcatt gcatcagcca tgatggatac tttctcggca ggagcaaggt
     2761 gagatgacag gagatcctgc cccggcactt cgcccaatag cagccagtcc cttcccgctt
     2821 cagtgacaac gtcgagcaca gctgcgcaag gaacgcccgt cgtggccagc cacgatagcc
     2881 gcgctgcctc gtcctgcagt tcattcaggg caccggacag gtcggtcttg acaaaaagaa
     2941 ccgggcgccc ctgcgctgac agccggaaca cggcggcatc agagcagccg attgtctgtt
     3001 gtgcccagtc atagccgaat agcctctcca cccaagcggc cggagaacct gcgtgcaatc
     3061 catcttgttc aatcatgcga aacgatcctc atcctgtctc ttgatcagat cttgatcccc
     3121 tgcgccatca gatccttggc ggcaagaaag ccatccagtt tactttgcag ggcttcccaa
     3181 ccttaccaga gggcgcccca gctggcaatt ccgacgtcta agaaaccatt attatcatga
     3241 cattaaccta taaaaatagg cgtatcacga ggccctttcg tcttcacctc gagttgacag
     3301 ctagctcagt cctaggtact gtgctagcgg aattcattaa agaggagaaa ggtaccatgg
     3361 gtcataatca taatcataat cataatcata atcacaacgg tggagatgac gatgacaagg
     3421 gtggtcgaca agcttggatc cctgcaggcc tcagggcccg atcgatggga ccaatggggc
     3481 agcccctgca agtgttgacc ctaaatatag aagatgagta tcggctacat gagacctcaa
     3541 aagagccaga tgtttctcta gggtccacat ggctgtctga ttttcctcag gcctgggcgg
     3601 aaaccggggg catgggactg gcagttcgcc aagctcctct gatcatacct ctgaaagcaa
     3661 cctctacccc cgtgtccata aaacaatacc ccatgtcaca agaagccaga ctggggatca
     3721 agccccacat acagagactg ttggaccagg gaatactggt accctgccag tccccctgga
     3781 acacgcccct gctacccgtt aagaaaccag ggactaatga ttataggcct gtccaggatc
     3841 tgagagaagt caacaagcgg gtggaagaca tccaccccac cgtgcccaac ccttacaacc
     3901 tcttgagcgg gctcccaccg tcccaccagt ggtacactgt gcttgattta aaggatgcct
     3961 ttttctgcct gagactccac cccaccagtc agcctctctt cgcctttgag tggagagatc
     4021 cagagatggg aatctcagga caattgacct ggaccagact cccacagggt ttcaaaaaca
     4081 gtcccaccct gtttgatgag gcactgcaca gagacctagc agacttccgg atccagcacc
     4141 cagacttgat cctgctacag tacgtggatg acttactgct ggccgccact tctgagctag
     4201 actgccaaca aggtactcgg gccctgttac aaaccctagg gaacctcggg tatcgggcct
     4261 cggccaagaa agcccaaatt tgccagaaac aggtcaagta tctggggtat cttctaaaag
     4321 agggtcagag atggctgact gaggccagaa aagagactgt gatggggcag cctactccga
     4381 agacccctcg acaactaagg gagttcctag ggacggcagg cttctgtcgc ctctggatcc
     4441 ctgggtttgc agaaatggca gcccccttgt accctctcac caaaacgggg actctgttta
     4501 attggggccc agaccaacaa aaggcctatc aagaaatcaa gcaagctctt ctaactgccc
     4561 cagccctggg gttgccagat ttgactaagc cctttgaact ctttgtcgac gagaagcagg
     4621 gctacgccaa aggtgtccta acgcaaaaac tgggaccttg gcgtcggccg gtggcctacc
     4681 tgtccaaaaa gctagaccca gtagcagctg ggtggccccc ttgcctacgg atggtagcag
     4741 ccattgccgt actgacaaag gatgcaggca agctaaccat gggacagcca cttgtcattc
     4801 tggcccccca tgcagtagag gcacttgtca aacaaccccc cgaccgctgg ctttccaacg
     4861 cccggatgac tcactatcag gccttgcttt tggacacgga ccgggtccag ttcggaccgg
     4921 tggtagccct gaacccggct acgctgctcc cactgcctga ggaagggctg caacacaact
     4981 gccttgatat cctggccgaa gcccacggaa cccgacccga cctaacggac cagccgctcc
     5041 cagacgccga ccacacctgg tacacggatg gaagcagtct cttacaagag ggacagcgta
     5101 aggcgggagc tgcggtgacc accgagaccg aggtaatctg ggctaaagcc ctgccagccg
     5161 ggacatccgc tcagcgggct gaactgatag cactcaccca ggccctaaag atggcagaag
     5221 gtaagaagct aaatgtttat actgatagcc gttatgcttt tgctactgcc catatccatg
     5281 gagaaatata cagaaggcgt gggttgctca catcagaagg caaagagatc aaaaataaag
     5341 acgagatctt taaatgacgc tgatagtgct agtgtagatc gctactagag ccaggcatca
     5401 aataaaacga aaggctcagt cgaaagactg ggcctttcgt tttatctgtt gtttgtcggt
     5461 gaacgctctc tactagagtc acactggctc accttcgggt gggcctttct gcgtttatat
     5521 ataataaatg tccagacctg caggcatgca agcctctaga ggcatcaaat aaaacgaaag
     5581 gctcagtcga aagactgggc ctttcgtttt atctgttgtt tgtcggtgaa cgctctcctg
     5641 agtaggacaa atccgccgcc ctagacctag ggtacgggtt ttgctgcccg caaacgggct
     5701 gttctggtgt tgctagtttg ttatcagaat cgcagatccg gc
//`
        
sequences.seq_pMLRT_SDM_REV = {};
sequences.seq_pMLRT_SDM_REV.varName = "seq_pMLRT_SDM_REV";
sequences.seq_pMLRT_SDM_REV.name = "pMLRT SDM REV";
sequences.seq_pMLRT_SDM_REV.seqType = "linear";
sequences.seq_pMLRT_SDM_REV.comp = false;
sequences.seq_pMLRT_SDM_REV.data = `LOCUS       pMLRT_SDM_REV             20 bp ds-DNA     linear       08-JUL-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 gggccagaat gacaagtggc
//`
        
sequences.seq_pMLRT = {};
sequences.seq_pMLRT.varName = "seq_pMLRT";
sequences.seq_pMLRT.name = "pMLRT";
sequences.seq_pMLRT.seqType = "both";
sequences.seq_pMLRT.comp = true;
sequences.seq_pMLRT.data = `LOCUS       pMLRT                   5742 bp ds-DNA     circular     08-JUL-2020
DEFINITION  .
KEYWORDS    "accession:addgene_78234_146112"                                   
SOURCE      synthetic DNA construct                                            
  ORGANISM  synthetic DNA construct                                            
FEATURES             Location/Qualifiers
     CDS             complement(2282..3073)
                     /label="Kan/neoR"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     terminator      5566..5652
                     /label="rrnB T1 terminator"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     CDS             3405..3419
                     /label="enterokinase site"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     terminator      5486..5513
                     /label="T7Te terminator"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     CDS             complement(2282..3076)
                     /label="NeoR/KanR"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     primer_bind     complement(2393..2412)
                     /label="Neo-F"
                     /ApEinfo_revcolor=#d59687
                     /ApEinfo_fwdcolor=#d59687
     terminator      2157..2251
                     /label="lambda t0 terminator"
                     /ApEinfo_revcolor=#d6b295
                     /ApEinfo_fwdcolor=#d6b295
     source          1..5742
                     /label="source"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     RBS             3339..3350
                     /label="strong bacterial ribosome binding site (Elowitz and Leibler, 2000)"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     misc_feature    5538..5652
                     /label="on g-block 3"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     rep_origin      1443..1665
                     /label="pSC101 ori"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     CDS             3363..3398
                     /label="6xHN"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
     misc_feature    3357..5357
                     /label="MLRT ORF"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     misc_feature    3339..3446
                     /label="on g-block 2"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer_bind     3003..3022
                     /label="Neo-R"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     Scar            5471..5478
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     terminator      5399..5470
                     /label="rrnB T1 terminator"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     CDS             complement(445..1395)
                     /label="Rep101"
                     /ApEinfo_revcolor=#d59687
                     /ApEinfo_fwdcolor=#d59687
     Scar            5383..5390
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     primer_bind     3255..3273
                     /label="pBRforEco"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     primer          3339..3361
                     /label="pMLRT FWD"
                     /note="sequence: CGTGAGCGTCTCTAAGGaaagaggagaaaggtaccatggg"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer          5653..5672
                     /label="pMLRT FWD"
                     /note="sequence: TACTAGTAGCGGCCGCTGCAGccgccgccctagacctaggg"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     primer          complement(5631..5652)
                     /label="pMLRT REV"
                     /note="sequence: CTCACGCGTCTCAGCTACTGCAGCGGCCGCTACTAGTAatttgtcctactcaggagagcg"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          complement(5624..5652)
                     /label="pMLRT REV"
                     /note="sequence: atttgtcctactcaggagagcgttcaccg"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          complement(5631..5652)
                     /label="pMLRT REV"
                     /note="sequence: CTCACGCGTCTCAGCTAatttgtcctactcaggagagcg"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          complement(4787..4806)
                     /label="pMLRT SDM REV"
                     /note="sequence: gggccagaatgacaagtggc"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          4807..4827
                     /label="pMLRT SDM FWD"
                     /note="sequence: cccatgcagtagaggcacttg"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
ORIGIN
        1 ttcaggtttg ccggctgaaa gcgctatttc ttccagaatt gccatgattt tttccccacg
       61 ggaggcgtca ctggctcccg tgttgtcggc agctttgatt cgataagcag catcgcctgt
      121 ttcaggctgt ctatgtgtga ctgttgagct gtaacaagtt gtctcaggtg ttcaatttca
      181 tgttctagtt gctttgtttt actggtttca cctgttctat taggtgttac atgctgttca
      241 tctgttacat tgtcgatctg ttcatggtga acagctttaa atgcaccaaa aactcgtaaa
      301 agctctgatg tatctatctt ttttacaccg ttttcatctg tgcatatgga cagttttccc
      361 tttgatatct aacggtgaac agttgttcta cttttgtttg ttagtcttga tgcttcactg
      421 atagatacaa gagccataag aacctcagat ccttccgtat ttagccagta tgttctctag
      481 tgtggttcgt tgtttttgcg tgagccatga gaacgaacca ttgagatcat gcttactttg
      541 catgtcactc aaaaattttg cctcaaaact ggtgagctga atttttgcag ttaaagcatc
      601 gtgtagtgtt tttcttagtc cgttacgtag gtaggaatct gatgtaatgg ttgttggtat
      661 tttgtcacca ttcattttta tctggttgtt ctcaagttcg gttacgagat ccatttgtct
      721 atctagttca acttggaaaa tcaacgtatc agtcgggcgg cctcgcttat caaccaccaa
      781 tttcatattg ctgtaagtgt ttaaatcttt acttattggt ttcaaaaccc attggttaag
      841 ccttttaaac tcatggtagt tattttcaag cattaacatg aacttaaatt catcaaggct
      901 aatctctata tttgccttgt gagttttctt ttgtgttagt tcttttaata accactcata
      961 aatcctcata gagtatttgt tttcaaaaga cttaacatgt tccagattat attttatgaa
     1021 tttttttaac tggaaaagat aaggcaatat ctcttcacta aaaactaatt ctaatttttc
     1081 gcttgagaac ttggcatagt ttgtccactg gaaaatctca aagcctttaa ccaaaggatt
     1141 cctgatttcc acagttctcg tcatcagctc tctggttgct ttagctaata caccataagc
     1201 attttcccta ctgatgttca tcatctgagc gtattggtta taagtgaacg ataccgtccg
     1261 ttctttcctt gtagggtttt caatcgtggg gttgagtagt gccacacagc ataaaattag
     1321 cttggtttca tgctccgtta agtcatagcg actaatcgct agttcatttg ctttgaaaac
     1381 aactaattca gacatacatc tcaattggtc taggtgattt taatcactat accaattgag
     1441 atgggctagt caatgataat tactagtcct tttcctttga gttgtgggta tctgtaaatt
     1501 ctgctagacc tttgctggaa aacttgtaaa ttctgctaga ccctctgtaa attccgctag
     1561 acctttgtgt gttttttttg tttatattca agtggttata atttatagaa taaagaaaga
     1621 ataaaaaaag ataaaaagaa tagatcccag ccctgtgtat aactcactac tttagtcagt
     1681 tccgcagtat tacaaaagga tgtcgcaaac gctgtttgct cctctacaaa acagacctta
     1741 aaaccctaaa ggcttaagta gcaccctcgc aagctcgggc aaatcgctga atattccttt
     1801 tgtctccgac catcaggcac ctgagtcgct gtctttttcg tgacattcag ttcgctgcgc
     1861 tcacggctct ggcagtgaat gggggtaaat ggcactacag gcgcctttta tggattcatg
     1921 caaggaaact acccataata caagaaaagc ccgtcacggg cttctcaggg cgttttatgg
     1981 cgggtctgct atgtggtgct atctgacttt ttgctgttca gcagttcctg ccctctgatt
     2041 ttccagtctg accacttcgg attatcccgt gacaggtcat tcagactggc taatgcaccc
     2101 agtaaggcag cggtatcatc aacaggctta cccgtcttac tgtccctagt gcttggattc
     2161 tcaccaataa aaaacgcccg gcggcaaccg agcgttctga acaaatccag atggagttct
     2221 gaggtcatta ctggatctat caacaggagt ccaagcgagc tctcgaaccc cagagtcccg
     2281 ctcagaagaa ctcgtcaaga aggcgataga aggcgatgcg ctgcgaatcg ggagcggcga
     2341 taccgtaaag cacgaggaag cggtcagccc attcgccgcc aagctcttca gcaatatcac
     2401 gggtagccaa cgctatgtcc tgatagcggt ccgccacacc cagccggcca cagtcgatga
     2461 atccagaaaa gcggccattt tccaccatga tattcggcaa gcaggcatcg ccatgggtca
     2521 cgacgagatc ctcgccgtcg ggcatgcgcg ccttgagcct ggcgaacagt tcggctggcg
     2581 cgagcccctg atgctcttcg tccagatcat cctgatcgac aagaccggct tccatccgag
     2641 tacgtgctcg ctcgatgcga tgtttcgctt ggtggtcgaa tgggcaggta gccggatcaa
     2701 gcgtatgcag ccgccgcatt gcatcagcca tgatggatac tttctcggca ggagcaaggt
     2761 gagatgacag gagatcctgc cccggcactt cgcccaatag cagccagtcc cttcccgctt
     2821 cagtgacaac gtcgagcaca gctgcgcaag gaacgcccgt cgtggccagc cacgatagcc
     2881 gcgctgcctc gtcctgcagt tcattcaggg caccggacag gtcggtcttg acaaaaagaa
     2941 ccgggcgccc ctgcgctgac agccggaaca cggcggcatc agagcagccg attgtctgtt
     3001 gtgcccagtc atagccgaat agcctctcca cccaagcggc cggagaacct gcgtgcaatc
     3061 catcttgttc aatcatgcga aacgatcctc atcctgtctc ttgatcagat cttgatcccc
     3121 tgcgccatca gatccttggc ggcaagaaag ccatccagtt tactttgcag ggcttcccaa
     3181 ccttaccaga gggcgcccca gctggcaatt ccgacgtcta agaaaccatt attatcatga
     3241 cattaaccta taaaaatagg cgtatcacga ggccctttcg tcttcacctc gagttgacag
     3301 ctagctcagt cctaggtact gtgctagcgg aattcattaa agaggagaaa ggtaccatgg
     3361 gtcataatca taatcataat cataatcata atcacaacgg tggagatgac gatgacaagg
     3421 gtggtcgaca agcttggatc cctgcaggcc tcagggcccg atcgatggga ccaatggggc
     3481 agcccctgca agtgttgacc ctaaatatag aagatgagta tcggctacat gagacctcaa
     3541 aagagccaga tgtttctcta gggtccacat ggctgtctga ttttcctcag gcctgggcgg
     3601 aaaccggggg catgggactg gcagttcgcc aagctcctct gatcatacct ctgaaagcaa
     3661 cctctacccc cgtgtccata aaacaatacc ccatgtcaca agaagccaga ctggggatca
     3721 agccccacat acagagactg ttggaccagg gaatactggt accctgccag tccccctgga
     3781 acacgcccct gctacccgtt aagaaaccag ggactaatga ttataggcct gtccaggatc
     3841 tgagagaagt caacaagcgg gtggaagaca tccaccccac cgtgcccaac ccttacaacc
     3901 tcttgagcgg gctcccaccg tcccaccagt ggtacactgt gcttgattta aaggatgcct
     3961 ttttctgcct gagactccac cccaccagtc agcctctctt cgcctttgag tggagagatc
     4021 cagagatggg aatctcagga caattgacct ggaccagact cccacagggt ttcaaaaaca
     4081 gtcccaccct gtttgatgag gcactgcaca gagacctagc agacttccgg atccagcacc
     4141 cagacttgat cctgctacag tacgtggatg acttactgct ggccgccact tctgagctag
     4201 actgccaaca aggtactcgg gccctgttac aaaccctagg gaacctcggg tatcgggcct
     4261 cggccaagaa agcccaaatt tgccagaaac aggtcaagta tctggggtat cttctaaaag
     4321 agggtcagag atggctgact gaggccagaa aagagactgt gatggggcag cctactccga
     4381 agacccctcg acaactaagg gagttcctag ggacggcagg cttctgtcgc ctctggatcc
     4441 ctgggtttgc agaaatggca gcccccttgt accctctcac caaaacgggg actctgttta
     4501 attggggccc agaccaacaa aaggcctatc aagaaatcaa gcaagctctt ctaactgccc
     4561 cagccctggg gttgccagat ttgactaagc cctttgaact ctttgtcgac gagaagcagg
     4621 gctacgccaa aggtgtccta acgcaaaaac tgggaccttg gcgtcggccg gtggcctacc
     4681 tgtccaaaaa gctagaccca gtagcagctg ggtggccccc ttgcctacgg atggtagcag
     4741 ccattgccgt actgacaaag gatgcaggca agctaaccat gggacagcca ctagtcattc
     4801 tggcccccca tgcagtagag gcactagtca aacaaccccc cgaccgctgg ctttccaacg
     4861 cccggatgac tcactatcag gccttgcttt tggacacgga ccgggtccag ttcggaccgg
     4921 tggtagccct gaacccggct acgctgctcc cactgcctga ggaagggctg caacacaact
     4981 gccttgatat cctggccgaa gcccacggaa cccgacccga cctaacggac cagccgctcc
     5041 cagacgccga ccacacctgg tacacggatg gaagcagtct cttacaagag ggacagcgta
     5101 aggcgggagc tgcggtgacc accgagaccg aggtaatctg ggctaaagcc ctgccagccg
     5161 ggacatccgc tcagcgggct gaactgatag cactcaccca ggccctaaag atggcagaag
     5221 gtaagaagct aaatgtttat actgatagcc gttatgcttt tgctactgcc catatccatg
     5281 gagaaatata cagaaggcgt gggttgctca catcagaagg caaagagatc aaaaataaag
     5341 acgagatctt taaatgacgc tgatagtgct agtgtagatc gctactagag ccaggcatca
     5401 aataaaacga aaggctcagt cgaaagactg ggcctttcgt tttatctgtt gtttgtcggt
     5461 gaacgctctc tactagagtc acactggctc accttcgggt gggcctttct gcgtttatat
     5521 ataataaatg tccagacctg caggcatgca agcctctaga ggcatcaaat aaaacgaaag
     5581 gctcagtcga aagactgggc ctttcgtttt atctgttgtt tgtcggtgaa cgctctcctg
     5641 agtaggacaa atccgccgcc ctagacctag ggtacgggtt ttgctgcccg caaacgggct
     5701 gttctggtgt tgctagtttg ttatcagaat cgcagatccg gc
//`
        
sequences.seq_pSB1A3GB3_backbone = {};
sequences.seq_pSB1A3GB3_backbone.varName = "seq_pSB1A3GB3_backbone";
sequences.seq_pSB1A3GB3_backbone.name = "pSB1A3-GB3 backbone";
sequences.seq_pSB1A3GB3_backbone.seqType = "both";
sequences.seq_pSB1A3GB3_backbone.comp = true;
sequences.seq_pSB1A3GB3_backbone.data = `LOCUS       pSB1A3-GB3_backbone     5268 bp ds-DNA     circular     25-OCT-2020
DEFINITION  .
KEYWORDS    "accession:addgene_120731_229341"                                  
SOURCE      synthetic DNA construct                                            
  ORGANISM  synthetic DNA construct                                            
FEATURES             Location/Qualifiers
     primer_bind     4048..4066
                     /label="pBRforEco"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     promoter        632..662
                     /label="lac promoter"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     terminator      2004..2061
                     /label="his operon terminator"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     primer_bind     3638..3657
                     /label="Amp-R"
                     /ApEinfo_revcolor=#b4abac
                     /ApEinfo_fwdcolor=#b4abac
     RBS             704..715
                     /label="strong bacterial ribosome binding site (Elowitz and Leibler, 2000)"
                     /ApEinfo_revcolor=#d59687
                     /ApEinfo_fwdcolor=#d59687
     CDS             complement(3015..3875)
                     /label="AmpR"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     terminator      1444..1515
                     /label="rrnB T1 terminator"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     primer_bind     complement(2336..2355)
                     /label="pBR322ori-F"
                     /ApEinfo_revcolor=#b4abac
                     /ApEinfo_fwdcolor=#b4abac
     source          1..5268
                     /label="source"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     protein_bind    4452..4485
                     /label="loxP"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     rep_origin      complement(2256..2844)
                     /label="ori"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer_bind     complement(2085..2102)
                     /label="L4440"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     promoter        complement(3876..3980)
                     /label="AmpR promoter"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     protein_bind    670..686
                     /label="lac operator"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     misc_feature    2002..4115
                     /label="pSB1A3 Region"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     CDS             722..1399
                     /label="mRFP1"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     protein_bind    596..617
                     /label="CAP binding site"
                     /ApEinfo_revcolor=#d59687
                     /ApEinfo_fwdcolor=#d59687
     misc_feature    3156..3156
                     /label="Point Mutation"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     terminator      1531..1558
                     /label="T7Te terminator"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     terminator      4070..4113
                     /label="bacterial terminator"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     primer          complement(4088..4115)
                     /label="BBa_Prefix & Promoter SDM Rev"
                     /note="sequence: cagaaatcatccttagcgaaagctaagg"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer          4116..4135
                     /label="BBa_Prefix & Promoter SDM Fwd"
                     /note="sequence: GAATTCGCGGCCGCTTCTAGTTGACGGCTAGCTCAGTCCTAGGTACAGTGCTAGCgaattcgaagagcctgcggc"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     primer          2002..2019
                     /label="pSB1A3 fwd SapI"
                     /note="sequence: AAAGCTCTTCAGGAagtccggcaaaaaagggc"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     primer          complement(4093..4115)
                     /label="BsaI pSB1A3 Rev"
                     /note="sequence: ATCTTAGGTCTCTCTCCcagaaatcatccttagcgaaagc"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     primer          complement(4093..4115)
                     /label="pSB1A3 SapI rev"
                     /note="sequence: CCCGCTCTTCAGTGcagaaatcatccttagcgaaagc"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     primer          2002..2019
                     /label="BsaI pSB1A3 Fwd"
                     /note="sequence: CTCTCAGGTCTCATGCCagtccggcaaaaaagggc"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     primer          complement(4093..4115)
                     /label="Linear pSB1A3 BsmBI Rev"
                     /note="sequence: ATTCCCCGTCTCCcagaaatcatccttagcgaaagc"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     primer          2002..2023
                     /label="Linear pSB1A3 BsmBI Fwd"
                     /note="sequence: CTATTTCGTCTCGTTACagtccggcaaaaaagggcaagg"
                     /ApEinfo_revcolor=#d6b295
                     /ApEinfo_fwdcolor=#d6b295
     primer          2002..2019
                     /label="Linear pSB1A3 BsmBI Fwd"
                     /note="sequence: CTATTTCGTCTCCagtccggcaaaaaagggc"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
ORIGIN
        1 gaaaccgtgc ttaagagcaa gttccttgag ggggagcaca gtgccggcgt aggtgaagtc
       61 gtcaatgatg tcgatatggg tcttgatcat gcacacataa ggtccgacct tatcggcaag
      121 ctcaatgagc tccttggtgg tggtaacatc cagagaagca cacaggttgg ttttcttggc
      181 tgccacgagc ttgagcactc gagcggcaaa ggcggacttg tggacgttag ctcgagcttc
      241 gtaggagggc attttggtgg tgaagaggag actgaaataa atttagtctg cagaactttt
      301 tatcggaacc ttatctgggg cagtgaagta tatgttatgg taatagttac gagttagttg
      361 aacttataga tagactggac tatacggcta tcggtccaaa ttagaaagaa cgtcaatggc
      421 tctctgggcg cgaattcgta taacttcgta tagcaggagt tatccgaagc gaacggtgag
      481 accggatccc tagagcaata cgcaaaccgc ctctccccgc gcgttggccg attcattaat
      541 gcagctggca cgacaggttt cccgactgga aagcgggcag tgagcgcaac gcaattaatg
      601 tgagttagct cactcattag gcaccccagg ctttacactt tatgcttccg gctcgtatgt
      661 tgtgtggaat tgtgagcgga taacaatttc acacatacta gagaaagagg agaaatacta
      721 gatggcttcc tccgaagacg ttatcaaaga gttcatgcgt ttcaaagttc gtatggaagg
      781 ttccgttaac ggtcacgagt tcgaaatcga aggtgaaggt gaaggtcgtc cgtacgaagg
      841 tacccagacc gctaaactga aagttaccaa aggtggtccg ctgccgttcg cttgggacat
      901 cctgtccccg cagttccagt acggttccaa agcttacgtt aaacacccgg ctgacatccc
      961 ggactacctg aaactgtcct tcccggaagg tttcaaatgg gaacgtgtta tgaacttcga
     1021 agacggtggt gttgttaccg ttacccagga ctcctccctg caagacggtg agttcatcta
     1081 caaagttaaa ctgcgtggta ccaacttccc gtccgacggt ccggttatgc agaaaaaaac
     1141 catgggttgg gaagcttcca ccgaacgtat gtacccggaa gacggtgctc tgaaaggtga
     1201 aatcaaaatg cgtctgaaac tgaaagacgg tggtcactac gacgctgaag ttaaaaccac
     1261 ctacatggct aaaaaaccgg ttcagctgcc gggtgcttac aaaaccgaca tcaaactgga
     1321 catcacctcc cacaacgaag actacaccat cgttgaacag tacgaacgtg ctgaaggtcg
     1381 tcactccacc ggtgcttaat aacgctgata gtgctagtgt agatcgctac tagagccagg
     1441 catcaaataa aacgaaaggc tcagtcgaaa gactgggcct ttcgttttat ctgttgtttg
     1501 tcggtgaacg ctctctacta gagtcacact ggctcacctt cgggtgggcc tttctgcgtt
     1561 tatatatgta cagcggtctc tgagtcatgt gtaacactcg ctctggagag ttagtcatcc
     1621 gacagggtaa ctctaatctc ccaacacctt attaactctg cgtaactgta actcttcttg
     1681 ccacgtcgat cttactcaat tttcctgctc atcatctgct ggattgttgt ctatcgtctg
     1741 gctctaatac atttattgtt tattgcccaa acaactttca ttgcacgtaa gtgaattgtt
     1801 ttataacagc gttcgccaat tgctgcgcca tcgtcgtccg gctgtcctac cgttaggggt
     1861 agtgtgtctc acactaccga ggttactaga gttgggaaag cgatactgcc tcggacacac
     1921 cacctgggtc ttacgactgc agagagaatc ggcgttacct ctctcacaaa gcccttcagt
     1981 gcggccgctg cgtcttcctg cagtccggca aaaaagggca aggtgtcacc accctgccct
     2041 ttttctttaa aaccgaaaag attacttcgc gttatgcagg cttcctcgct cactgactcg
     2101 ctgcgctcgg tcgttcggct gcggcgagcg gtatcagctc actcaaaggc ggtaatacgg
     2161 ttatccacag aatcagggga taacgcagga aagaacatgt gagcaaaagg ccagcaaaag
     2221 gccaggaacc gtaaaaaggc cgcgttgctg gcgtttttcc acaggctccg cccccctgac
     2281 gagcatcaca aaaatcgacg ctcaagtcag aggtggcgaa acccgacagg actataaaga
     2341 taccaggcgt ttccccctgg aagctccctc gtgcgctctc ctgttccgac cctgccgctt
     2401 accggatacc tgtccgcctt tctcccttcg ggaagcgtgg cgctttctca tagctcacgc
     2461 tgtaggtatc tcagttcggt gtaggtcgtt cgctccaagc tgggctgtgt gcacgaaccc
     2521 cccgttcagc ccgaccgctg cgccttatcc ggtaactatc gtcttgagtc caacccggta
     2581 agacacgact tatcgccact ggcagcagcc actggtaaca ggattagcag agcgaggtat
     2641 gtaggcggtg ctacagagtt cttgaagtgg tggcctaact acggctacac tagaagaaca
     2701 gtatttggta tctgcgctct gctgaagcca gttaccttcg gaaaaagagt tggtagctct
     2761 tgatccggca aacaaaccac cgctggtagc ggtggttttt ttgtttgcaa gcagcagatt
     2821 acgcgcagaa aaaaaggatc tcaagaagat cctttgatct tttctacggg gtctgacgct
     2881 cagtggaacg aaaactcacg ttaagggatt ttggtcatga gattatcaaa aaggatcttc
     2941 acctagatcc ttttaaatta aaaatgaagt tttaaatcaa tctaaagtat atatgagtaa
     3001 acttggtctg acagttacca atgcttaatc agtgaggcac ctatctcagc gatctgtcta
     3061 tttcgttcat ccatagttgc ctgactcccc gtcgtgtaga taactacgat acgggagggc
     3121 ttaccatctg gccccagtgc tgcaatgata ccgcgcgacc cacgctcacc ggctccagat
     3181 ttatcagcaa taaaccagcc agccggaagg gccgagcgca gaagtggtcc tgcaacttta
     3241 tccgcctcca tccagtctat taattgttgc cgggaagcta gagtaagtag ttcgccagtt
     3301 aatagtttgc gcaacgttgt tgccattgct acaggcatcg tggtgtcacg ctcgtcgttt
     3361 ggtatggctt cattcagctc cggttcccaa cgatcaaggc gagttacatg atcccccatg
     3421 ttgtgcaaaa aagcggttag ctccttcggt cctccgatcg ttgtcagaag taagttggcc
     3481 gcagtgttat cactcatggt tatggcagca ctgcataatt ctcttactgt catgccatcc
     3541 gtaagatgct tttctgtgac tggtgagtac tcaaccaagt cattctgaga atagtgtatg
     3601 cggcgaccga gttgctcttg cccggcgtca atacgggata ataccgcgcc acatagcaga
     3661 actttaaaag tgctcatcat tggaaaacgt tcttcggggc gaaaactctc aaggatctta
     3721 ccgctgttga gatccagttc gatataaccc actcgtgcac ccaactgatc ttcagcatct
     3781 tttactttca ccagcgtttc tgggtgagca aaaacaggaa ggcaaaatgc cgcaaaaaag
     3841 ggaataaggg cgacacggaa atgttgaata ctcatactct tcctttttca atattattga
     3901 agcatttatc agggttattg tctcatgagc ggatacatat ttgaatgtat ttagaaaaat
     3961 aaacaaatag gggttccgcg cacatttccc cgaaaagtgc cacctgacgt ctaagaaacc
     4021 attattatca tgacattaac ctataaaaat aggcgtatca cgaggcagaa tttcagataa
     4081 aaaaaatcct tagctttcgc taaggatgat ttctggaatt cgaagagcct gcggccgctg
     4141 tcgggaaccg cgttcaggtg gaacaggacc acctcccttg cacttcttgg tatatcagta
     4201 taggctgatg tattcatagt ggggtttttc ataataaatt tactaacggc aggcaacatt
     4261 cactcggctt aaacgcaaaa cggaccgtct tgatatcttc tgacgcattg accaccgaga
     4321 aatagtgtta gttaccgggt gagttattgt tcttctacac aggcgacgcc catcgtctag
     4381 agttgatgta ctaactcaga tttcactacc taccctatcc ctggtacgca caaagcactt
     4441 tgctagaagg tataacttcg tatagcatac attatacgaa gttattctga attccgagaa
     4501 acacaacaac atgccccatt ggacagacca tgcggataca caggttgtgc agtaccatac
     4561 atactcgatc agacaggtcg tctgaccatc atacaagctg aacagcgctc catacttgca
     4621 cgctctctat atacacagtt aaattacata tccatagtct aacctctaac agttaatctt
     4681 ctggtaagcc tcccagccag ccttctggta tcgcttggcc tcctcaatag gatctcggtt
     4741 ctggccgtac agacctcggc cgacaattat gatatccgtt ccggtagaca tgacatcctc
     4801 aacagttcgg tactgctgtc cgagagcgtc tcccttgtcg tcaagaccca ccccgggggt
     4861 cagaataagc cagtcctcag agtcgccctt aggtcggttc tgggcaatga agccaaccac
     4921 aaactcgggg tcggatcggg caagctcaat ggtctgcttg gagtactcgc cagtggccag
     4981 agagcccttg caagacagct cggccagcat gagcagacct ctggccagct tctcgttggg
     5041 agaggggact aggaactcct tgtactggga gttctcgtag tcagagacgt cctccttctt
     5101 ctgttcagag acagtttcct cggcaccagc tcgcaggcca gcaatgattc cggttccggg
     5161 tacaccgtgg gcgttggtga tatcggacca ctcggcgatt cggtgacacc ggtactggtg
     5221 cttgacagtg ttgccaatat ctgcgaactt tctgtcctcg aacaggaa
//`
        
sequences.seq_pSB1C3_Forward_Primer = {};
sequences.seq_pSB1C3_Forward_Primer.varName = "seq_pSB1C3_Forward_Primer";
sequences.seq_pSB1C3_Forward_Primer.name = "pSB1C3 Forward Primer";
sequences.seq_pSB1C3_Forward_Primer.seqType = "linear";
sequences.seq_pSB1C3_Forward_Primer.comp = false;
sequences.seq_pSB1C3_Forward_Primer.data = `LOCUS       pSB1C3_Forward_Primer     41 bp ds-DNA     linear       25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 TATGATCGTC TCAcaaagtc agaacagatg tttgccgatg c
//`
        
sequences.seq_pSB1C3_Reverse_Primer = {};
sequences.seq_pSB1C3_Reverse_Primer.varName = "seq_pSB1C3_Reverse_Primer";
sequences.seq_pSB1C3_Reverse_Primer.name = "pSB1C3 Reverse Primer";
sequences.seq_pSB1C3_Reverse_Primer.seqType = "linear";
sequences.seq_pSB1C3_Reverse_Primer.comp = false;
sequences.seq_pSB1C3_Reverse_Primer.data = `LOCUS       pSB1C3_Reverse_Primer     45 bp ds-DNA     linear       25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 ACTGATCGTC TCTgttgtga agaaaaagtg aatgatgtag ccgtc
//`
        
sequences.seq_pSB1K3_containing_mRFP1 = {};
sequences.seq_pSB1K3_containing_mRFP1.varName = "seq_pSB1K3_containing_mRFP1";
sequences.seq_pSB1K3_containing_mRFP1.name = "pSB1K3 containing mRFP1";
sequences.seq_pSB1K3_containing_mRFP1.seqType = "both";
sequences.seq_pSB1K3_containing_mRFP1.comp = true;
sequences.seq_pSB1K3_containing_mRFP1.data = `LOCUS       pSB1K3_containing_mRFP1 3273 bp ds-DNA     circular     07-JUL-2020
DEFINITION  .
KEYWORDS    "accession:addgene_118082_252166"                                  
SOURCE      synthetic DNA construct                                            
  ORGANISM  synthetic DNA construct                                            
FEATURES             Location/Qualifiers
     protein_bind    53..69
                     /label="lac operator"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     rep_origin      complement(1221..1809)
                     /label="ori"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     primer_bind     complement(1050..1067)
                     /label="L4440"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
     RBS             87..98
                     /label="strong bacterial ribosome binding site (Elowitz and Leibler, 2000)"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     primer_bind     2849..2868
                     /label="pENTR-R"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     terminator      827..898
                     /label="rrnB T1 terminator"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     primer_bind     2765..2784
                     /label="Kan-R"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     terminator      3084..3127
                     /label="bacterial terminator"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
     primer_bind     complement(1301..1320)
                     /label="pBR322ori-F"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     source          1..3273
                     /label="source"
                     /ApEinfo_revcolor=#b4abac
                     /ApEinfo_fwdcolor=#b4abac
     CDS             complement(2042..2857)
                     /label="KanR"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     primer_bind     3062..3080
                     /label="pBRforEco"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     misc_feature    3130..3151
                     /label="BioBrick prefix"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     promoter        15..45
                     /label="lac promoter"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     CDS             105..782
                     /label="mRFP1"
                     /ApEinfo_revcolor=#b4abac
                     /ApEinfo_fwdcolor=#b4abac
     protein_bind    3252..3273
                     /label="CAP binding site"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     misc_feature    948..968
                     /label="BioBrick suffix"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     terminator      969..1026
                     /label="his operon terminator"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     terminator      914..941
                     /label="T7Te terminator"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
ORIGIN
        1 taggcacccc aggctttaca ctttatgctt ccggctcgta tgttgtgtgg aattgtgagc
       61 ggataacaat ttcacacata ctagagaaag aggagaaata ctagatggct tcctccgaag
      121 acgttatcaa agagttcatg cgtttcaaag ttcgtatgga aggttccgtt aacggtcacg
      181 agttcgaaat cgaaggtgaa ggtgaaggtc gtccgtacga aggtacccag accgctaaac
      241 tgaaagttac caaaggtggt ccgctgccgt tcgcttggga catcctgtcc ccgcagttcc
      301 agtacggttc caaagcttac gttaaacacc cggctgacat cccggactac ctgaaactgt
      361 ccttcccgga aggtttcaaa tgggaacgtg ttatgaactt cgaagacggt ggtgttgtta
      421 ccgttaccca ggactcctcc ctgcaagacg gtgagttcat ctacaaagtt aaactgcgtg
      481 gtaccaactt cccgtccgac ggtccggtta tgcagaaaaa aaccatgggt tgggaagctt
      541 ccaccgaacg tatgtacccg gaagacggtg ctctgaaagg tgaaatcaaa atgcgtctga
      601 aactgaaaga cggtggtcac tacgacgctg aagttaaaac cacctacatg gctaaaaaac
      661 cggttcagct gccgggtgct tacaaaaccg acatcaaact ggacatcacc tcccacaacg
      721 aagactacac catcgttgaa cagtacgaac gtgctgaagg tcgtcactcc accggtgctt
      781 aataacgctg atagtgctag tgtagatcgc tactagagcc aggcatcaaa taaaacgaaa
      841 ggctcagtcg aaagactggg cctttcgttt tatctgttgt ttgtcggtga acgctctcta
      901 ctagagtcac actggctcac cttcgggtgg gcctttctgc gtttatatac tagtagcggc
      961 cgctgcagtc cggcaaaaaa gggcaaggtg tcaccaccct gccctttttc tttaaaaccg
     1021 aaaagattac ttcgcgttat gcaggcttcc tcgctcactg actcgctgcg ctcggtcgtt
     1081 cggctgcggc gagcggtatc agctcactca aaggcggtaa tacggttatc cacagaatca
     1141 ggggataacg caggaaagaa catgtgagca aaaggccagc aaaaggccag gaaccgtaaa
     1201 aaggccgcgt tgctggcgtt tttccacagg ctccgccccc ctgacgagca tcacaaaaat
     1261 cgacgctcaa gtcagaggtg gcgaaacccg acaggactat aaagatacca ggcgtttccc
     1321 cctggaagct ccctcgtgcg ctctcctgtt ccgaccctgc cgcttaccgg atacctgtcc
     1381 gcctttctcc cttcgggaag cgtggcgctt tctcatagct cacgctgtag gtatctcagt
     1441 tcggtgtagg tcgttcgctc caagctgggc tgtgtgcacg aaccccccgt tcagcccgac
     1501 cgctgcgcct tatccggtaa ctatcgtctt gagtccaacc cggtaagaca cgacttatcg
     1561 ccactggcag cagccactgg taacaggatt agcagagcga ggtatgtagg cggtgctaca
     1621 gagttcttga agtggtggcc taactacggc tacactagaa gaacagtatt tggtatctgc
     1681 gctctgctga agccagttac cttcggaaaa agagttggta gctcttgatc cggcaaacaa
     1741 accaccgctg gtagcggtgg tttttttgtt tgcaagcagc agattacgcg cagaaaaaaa
     1801 ggatctcaag aagatccttt gatcttttct acggggtctg acgctcagtg gaacgaaaac
     1861 tcacgttaag ggattttggt catgagatta tcaaaaagga tcttcaccta gatcctttta
     1921 aattaaaaat gaagttttaa atcaatctaa agtatatatg agtaaacttg gtctgacagc
     1981 tcgagtcccg tcaagtcagc gtaatgctct gccagtgtta caaccaatta accaattctg
     2041 attagaaaaa ctcatcgagc atcaaatgaa actgcaattt attcatatca ggattatcaa
     2101 taccatattt ttgaaaaagc cgtttctgta atgaaggaga aaactcaccg aggcagttcc
     2161 ataggatggc aagatcctgg tatcggtctg cgattccgac tcgtccaaca tcaatacaac
     2221 ctattaattt cccctcgtca aaaataaggt tatcaagtga gaaatcacca tgagtgacga
     2281 ctgaatccgg tgagaatggc aaaagcttat gcatttcttt ccagacttgt tcaacaggcc
     2341 agccattacg ctcgtcatca aaatcactcg catcaaccaa accgttattc attcgtgatt
     2401 gcgcctgagc gagacgaaat acgcgatcgc tgttaaaagg acaattacaa acaggaatcg
     2461 aatgcaaccg gcgcaggaac actgccagcg catcaacaat attttcacct gaatcaggat
     2521 attcttctaa tacctggaat gctgttttcc cggggatcgc agtggtgagt aaccatgcat
     2581 catcaggagt acggataaaa tgcttgatgg tcggaagagg cataaattcc gtcagccagt
     2641 ttagtctgac catctcatct gtaacatcat tggcaacgct acctttgcca tgtttcagaa
     2701 acaactctgg cgcatcgggc ttcccataca atcgatagat tgtcgcacct gattgcccga
     2761 cattatcgcg agcccattta tacccatata aatcagcatc catgttggaa tttaatcgcg
     2821 gcctggagca agacgtttcc cgttgaatat ggctcataac accccttgta ttactgttta
     2881 tgtaagcaga cagttttatt gttcatgatg atatattttt atcttgtgca atgtaacatc
     2941 agagattttg agacacaacg tggctttgtt gaataaatcg aacttttgct gagttgaagg
     3001 atcagctcga gtgccacttg acgtctaaga aaccattatt atcatgacat taacctataa
     3061 aaataggcgt atcacgaggc agaatttcag ataaaaaaaa tccttagctt tcgctaagga
     3121 tgatttctgg aattcgcggc cgcttctaga gcaatacgca aaccgcctct ccccgcgcgt
     3181 tggccgattc attaatgcag ctggcacgac aggtttcccg actggaaagc gggcagtgag
     3241 cgcaacgcaa ttaatgtgag ttagctcact cat
//`
        
sequences.seq_pSB1T3_Backbone = {};
sequences.seq_pSB1T3_Backbone.varName = "seq_pSB1T3_Backbone";
sequences.seq_pSB1T3_Backbone.name = "pSB1T3 Backbone";
sequences.seq_pSB1T3_Backbone.seqType = "both";
sequences.seq_pSB1T3_Backbone.comp = true;
sequences.seq_pSB1T3_Backbone.data = `LOCUS       pSB1T3_Backbone         2498 bp ds-DNA     circular     25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     primer_bind     2389..2407
                     /label="pBRforEco"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     primer_bind     complement(120..137)
                     /label="L4440"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     misc_feature    18..38
                     /label="BioBrick suffix"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_feature    2456..2477
                     /label="BioBrick prefix"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     terminator      39..96
                     /label="his operon terminator"
                     /ApEinfo_revcolor=#d59687
                     /ApEinfo_fwdcolor=#d59687
     terminator      2411..2454
                     /label="bacterial terminator"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     primer_bind     complement(371..390)
                     /label="pBR322ori-F"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     rep_origin      complement(291..879)
                     /label="ori"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     CDS             1145..2329
                     /label="TetR"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
ORIGIN
        1 GGACTAGGTC TCATGCCtac tagtagcggc cgctgcagtc cggcaaaaaa gggcaaggtg
       61 tcaccaccct gccctttttc tttaaaaccg aaaagattac ttcgcgttat gcaggcttcc
      121 tcgctcactg actcgctgcg ctcggtcgtt cggctgcggc gagcggtatc agctcactca
      181 aaggcggtaa tacggttatc cacagaatca ggggataacg caggaaagaa catgtgagca
      241 aaaggccagc aaaaggccag gaaccgtaaa aaggccgcgt tgctggcgtt tttccacagg
      301 ctccgccccc ctgacgagca tcacaaaaat cgacgctcaa gtcagaggtg gcgaaacccg
      361 acaggactat aaagatacca ggcgtttccc cctggaagct ccctcgtgcg ctctcctgtt
      421 ccgaccctgc cgcttaccgg atacctgtcc gcctttctcc cttcgggaag cgtggcgctt
      481 tctcatagct cacgctgtag gtatctcagt tcggtgtagg tcgttcgctc caagctgggc
      541 tgtgtgcacg aaccccccgt tcagcccgac cgctgcgcct tatccggtaa ctatcgtctt
      601 gagtccaacc cggtaagaca cgacttatcg ccactggcag cagccactgg taacaggatt
      661 agcagagcga ggtatgtagg cggtgctaca gagttcttga agtggtggcc taactacggc
      721 tacactagaa gaacagtatt tggtatctgc gctctgctga agccagttac cttcggaaaa
      781 agagttggta gctcttgatc cggcaaacaa accaccgctg gtagcggtgg tttttttgtt
      841 tgcaagcagc agattacgcg cagaaaaaaa ggatctcaag aagatccttt gatcttttct
      901 acggggtctg acgctcagtg gaacgaaaac tcacgttaag ggattttggt catgagatta
      961 tcaaaaagga tcttcaccta gatcctttta aattaaaaat gaagttttaa atcaatctaa
     1021 agtatatatg agtaaacttg gtctgacagc tcgagattct catgtttgac agcttatcat
     1081 cgataagctt taatgcggta gtttatcaca gttaaattgc taacgcagtc aggcaccgtg
     1141 tatgaaatct aacaatgcgc tcatcgtcat cctcggcacc gtcaccctgg atgctgtagg
     1201 cataggcttg gttatgccgg tactgccggg cctcttgcgg gatatcgtcc attccgacag
     1261 catcgccagt cactatggcg tgctgctagc gctatatgcg ttgatgcaat ttctatgcgc
     1321 acccgttctc ggagcactgt ccgaccgctt tggccgccgc ccagtcctgc tcgcttcgct
     1381 acttggagcc actatcgact acgcgatcat ggcgaccaca cccgtcctgt ggatcctcta
     1441 cgccggacgc atcgtggccg gcatcaccgg cgccacaggt gcggttgctg gcgcctatat
     1501 cgccgacatc accgatgggg aagatcgggc tcgccacttc gggctcatga gcgcttgttt
     1561 cggcgtgggt atggtggcag gccccgtggc cgggggactg ttgggcgcca tctccttgca
     1621 tgcaccattc cttgcggcgg cggtgctcaa cggcctcaac ctactactgg gctgcttcct
     1681 aatgcaggag tcgcataagg gagagcgtcg accgatgccc ttgagagcct tcaacccagt
     1741 cagctccttc cggtgggcgc ggggcatgac tatcgtcgcc gcacttatga ctgtcttctt
     1801 tatcatgcaa ctcgtaggac aggtgccggc agcgctctgg gtcattttcg gcgaggaccg
     1861 ctttcgctgg agcgcgacga tgatcggcct gtcgcttgcg gtattcggaa tcttgcacgc
     1921 cctcgctcaa gccttcgtca ctggtcccgc caccaaacgt ttcggcgaga agcaggccat
     1981 tatcgccggc atggcggccg acgcgctggg ctacgtcttg ctggcgttcg cgacgcgagg
     2041 ctggatggcc ttccccatta tgattcttct cgcttccggc ggcatcggga tgcccgcgtt
     2101 gcaggccatg ctgtccaggc aggtagatga cgaccatcag ggacagcttc aaggatcgct
     2161 cgcggctctt accagcctaa cttcgatcac tggaccgctg atcgtcacgg cgatttatgc
     2221 cgcctcggcg agcacatgga acgggttggc atggattgta ggcgccgccc tataccttgt
     2281 ctgcctcccc gcgttgcgtc gcggtgcatg gagccgggcc acctcgacct aactcgagtg
     2341 ccacctgacg tctaagaaac cattattatc atgacattaa cctataaaaa taggcgtatc
     2401 acgaggcaga atttcagata aaaaaaatcc ttagctttcg ctaaggatga tttctgaatt
     2461 cgcggccgct tctagaggCG TTAGAGACCT AGAGCATT
//`
        
sequences.seq_pUCSTS_FWD_BspMI = {};
sequences.seq_pUCSTS_FWD_BspMI.varName = "seq_pUCSTS_FWD_BspMI";
sequences.seq_pUCSTS_FWD_BspMI.name = "pUC-STS FWD BspMI";
sequences.seq_pUCSTS_FWD_BspMI.seqType = "linear";
sequences.seq_pUCSTS_FWD_BspMI.comp = false;
sequences.seq_pUCSTS_FWD_BspMI.data = `LOCUS       pUC-STS_FWD_BspMI         35 bp ds-DNA     linear       25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 ACAGTGGGTC TCCTAGTatg gtgtctgtga gtgag
//`
        
sequences.seq_pUCSTS_REV_BspMI = {};
sequences.seq_pUCSTS_REV_BspMI.varName = "seq_pUCSTS_REV_BspMI";
sequences.seq_pUCSTS_REV_BspMI.name = "pUC-STS REV BspMI";
sequences.seq_pUCSTS_REV_BspMI.seqType = "linear";
sequences.seq_pUCSTS_REV_BspMI.comp = false;
sequences.seq_pUCSTS_REV_BspMI.data = `LOCUS       pUC-STS_REV_BspMI         35 bp ds-DNA     linear       25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 ACAGTCGGTC TCCacaatta tatggccatg ctgcg
//`
        
sequences.seq_pUCSTS = {};
sequences.seq_pUCSTS.varName = "seq_pUCSTS";
sequences.seq_pUCSTS.name = "pUC-STS";
sequences.seq_pUCSTS.seqType = "both";
sequences.seq_pUCSTS.comp = true;
sequences.seq_pUCSTS.data = `LOCUS       pUC-STS                 3622 bp ds-DNA     circular     25-OCT-2020
DEFINITION  .
KEYWORDS    "accession:addgene_35949_44214"                                    
SOURCE      synthetic DNA construct                                            
  ORGANISM  synthetic DNA construct                                            
FEATURES             Location/Qualifiers
     CDS             1632..2492
                     /label="AmpR"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     misc_feature    1154..1156
                     /label="Threonine inside BsaI site"
                     /ApEinfo_revcolor=#f8d3a9
                     /ApEinfo_fwdcolor=#f8d3a9
     primer_bind     complement(1262..1281)
                     /label="pRS-marker"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     primer_bind     3152..3171
                     /label="pBR322ori-F"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     source          23..1192
                     /label="STS"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     rep_origin      2663..3251
                     /label="ori"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     promoter        1527..1631
                     /label="AmpR promoter"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     promoter        3575..3605
                     /label="lac promoter"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     primer_bind     complement(1850..1869)
                     /label="Amp-R"
                     /ApEinfo_revcolor=#d59687
                     /ApEinfo_fwdcolor=#d59687
     primer_bind     complement(1441..1459)
                     /label="pBRforEco"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     protein_bind    3539..3560
                     /label="CAP binding site"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     misc_feature    794..796
                     /label="Leu Codon inside BsaI Site "
                     /ApEinfo_revcolor=#f8d3a9
                     /ApEinfo_fwdcolor=#f8d3a9
     primer_bind     1381..1403
                     /label="pGEX 3'"
                     /ApEinfo_revcolor=#d59687
                     /ApEinfo_fwdcolor=#d59687
     primer_bind     3405..3422
                     /label="L4440"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     primer          complement(1173..1192)
                     /label="STS Reverse BspMI"
                     /note="sequence: ACTCCTACCTGCTTCaACAAttatatggccatgctgcgga"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     primer          complement(1193..1210)
                     /label="stsreverseprimer"
                     /note="sequence: aaataccgcagcggccgc"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     primer          23..44
                     /label="STS Forward BspMI"
                     /note="sequence: ACTGCTACCTGCTCCcTAGTatggtgtctgtgagtgagatcc"
                     /ApEinfo_revcolor=#d6b295
                     /ApEinfo_fwdcolor=#d6b295
     primer          1..22
                     /label="forward primer"
                     /note="sequence: ctagaagaaggaggattacaaa"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
ORIGIN
        1 ctagaagaag gaggattaca aaatggtgtc tgtgagtgag atccgcaaag ttcaaagggc
       61 agaaggccct gcaactgtat tggcgatagg cacagcaaat ccaccaaatt gtattgatca
      121 gagcacatat gctgattatt attttagagt aactaacagt gaacacatga ctgatctcaa
      181 gaagaagttt cagcgcattt gtgagagaac acaaatcaag aacagacata tgtacttaac
      241 agaagagata ctgaaagaga atcctaacat gtgcgcatac aaagcaccgt cgttggatgc
      301 aagggaagac atgatgatca gggaggtacc aagggttgga aaagaggctg caaccaaggc
      361 catcaaggaa tggggtcagc caatgtctaa gatcacacat ttgatcttct gcaccaccag
      421 cggtgttgca ttgcctggcg ttgattacga actcatcgta ctcttaggac tcgacccatc
      481 cgtcaagagg tacatgatgt accaccaagg ctgcttcgcc ggtggcactg tccttcgttt
      541 ggctaaggac ttggctgaaa acaacaagga tgctcgtgtg cttatcgttt gttctgagaa
      601 taccgcagtc actttccgtg gtcctagtga gacagacatg gatagtcttg tagggcaagc
      661 cttgtttgct gatggagctg ctgcgattat cattggttct gatcctgtgc cagaggttga
      721 aaagcctatc tttgaaattg tttcgactga tcaaaaactt gtccctaaca gccatggagc
      781 catcggtggt ctccttcgtg aagttgggct tacattctat cttaataaga gtgttcctga
      841 tattatttca caaaacatca atgatgcgct cagtaaagct tttgatccat tgggtatatc
      901 tgattataac tcaatatttt ggattgcaca ccctggtgga cgtgcaattt tggatcaggt
      961 tgaacagaaa gtgaacttga aaccagagaa gatgaatgcc actagagacg tgcttagcaa
     1021 ttacggtaac atgtcaagtg cgtgtgtgtt cttcatcatg gatttaatga ggaagaagtc
     1081 ccttgaagaa ggacttaaaa ctaccggtga aggacttgat tggggcgtac tttttggctt
     1141 tggtcctggt ctcactattg aaactgttgt tctccgcagc atggccatat aagcggccgc
     1201 tgcggtattt tctccttacg catctgtgcg gtatttcaca ccgcatatgg tgcactctca
     1261 gtacaatctg ctctgatgcc gcatagttaa gccagccccg acacccgcca acacccgctg
     1321 acgcgccctg acgggcttgt ctgctcccgg catccgctta cagacaagct gtgaccgtct
     1381 ccgggagctg catgtgtcag aggttttcac cgtcatcacc gaaacgcgcg agacgaaagg
     1441 gcctcgtgat acgcctattt ttataggtta atgtcatgat aataatggtt tcttagacgt
     1501 caggtggcac ttttcgggga aatgtgcgcg gaacccctat ttgtttattt ttctaaatac
     1561 attcaaatat gtatccgctc atgagacaat aaccctgata aatgcttcaa taatattgaa
     1621 aaaggaagag tatgagtatt caacatttcc gtgtcgccct tattcccttt tttgcggcat
     1681 tttgccttcc tgtttttgct cacccagaaa cgctggtgaa agtaaaagat gctgaagatc
     1741 agttgggtgc acgagtgggt tacatcgaac tggatctcaa cagcggtaag atccttgaga
     1801 gttttcgccc cgaagaacgt tttccaatga tgagcacttt taaagttctg ctatgtggcg
     1861 cggtattatc ccgtattgac gccgggcaag agcaactcgg tcgccgcata cactattctc
     1921 agaatgactt ggttgagtac tcaccagtca cagaaaagca tcttacggat ggcatgacag
     1981 taagagaatt atgcagtgct gccataacca tgagtgataa cactgcggcc aacttacttc
     2041 tgacaacgat cggaggaccg aaggagctaa ccgctttttt gcacaacatg ggggatcatg
     2101 taactcgcct tgatcgttgg gaaccggagc tgaatgaagc cataccaaac gacgagcgtg
     2161 acaccacgat gcctgtagca atggcaacaa cgttgcgcaa actattaact ggcgaactac
     2221 ttactctagc ttcccggcaa caattaatag actggatgga ggcggataaa gttgcaggac
     2281 cacttctgcg ctcggccctt ccggctggct ggtttattgc tgataaatct ggagccggtg
     2341 agcgtgggtc tcgcggtatc attgcagcac tggggccaga tggtaagccc tcccgtatcg
     2401 tagttatcta cacgacgggg agtcaggcaa ctatggatga acgaaataga cagatcgctg
     2461 agataggtgc ctcactgatt aagcattggt aactgtcaga ccaagtttac tcatatatac
     2521 tttagattga tttaaaactt catttttaat ttaaaaggat ctaggtgaag atcctttttg
     2581 ataatctcat gaccaaaatc ccttaacgtg agttttcgtt ccactgagcg tcagaccccg
     2641 tagaaaagat caaaggatct tcttgagatc ctttttttct gcgcgtaatc tgctgcttgc
     2701 aaacaaaaaa accaccgcta ccagcggtgg tttgtttgcc ggatcaagag ctaccaactc
     2761 tttttccgaa ggtaactggc ttcagcagag cgcagatacc aaatactgtc cttctagtgt
     2821 agccgtagtt aggccaccac ttcaagaact ctgtagcacc gcctacatac ctcgctctgc
     2881 taatcctgtt accagtggct gctgccagtg gcgataagtc gtgtcttacc gggttggact
     2941 caagacgata gttaccggat aaggcgcagc ggtcgggctg aacggggggt tcgtgcacac
     3001 agcccagctt ggagcgaacg acctacaccg aactgagata cctacagcgt gagctatgag
     3061 aaagcgccac gcttcccgaa gggagaaagg cggacaggta tccggtaagc ggcagggtcg
     3121 gaacaggaga gcgcacgagg gagcttccag ggggaaacgc ctggtatctt tatagtcctg
     3181 tcgggtttcg ccacctctga cttgagcgtc gatttttgtg atgctcgtca ggggggcgga
     3241 gcctatggaa aaacgccagc aacgcggcct ttttacggtt cctggccttt tgctggcctt
     3301 ttgctcacat gttctttcct gcgttatccc ctgattctgt ggataaccgt attaccgcct
     3361 ttgagtgagc tgataccgct cgccgcagcc gaacgaccga gcgcagcgag tcagtgagcg
     3421 aggaagcgga agagcgccca atacgcaaac cgcctctccc cgcgcgttgg ccgattcatt
     3481 aatgcagctg gcacgacagg tttcccgact ggaaagcggg cagtgagcgc aacgcaatta
     3541 atgtgagtta gctcactcat taggcacccc aggctttaca ctttatgctt ccggctcgta
     3601 tgttgtgtgg aattgtgagc gt
//`
        
sequences.seq_Resveratrol_2x_Assembly = {};
sequences.seq_Resveratrol_2x_Assembly.varName = "seq_Resveratrol_2x_Assembly";
sequences.seq_Resveratrol_2x_Assembly.name = "Resveratrol 2x Assembly";
sequences.seq_Resveratrol_2x_Assembly.seqType = "both";
sequences.seq_Resveratrol_2x_Assembly.comp = true;
sequences.seq_Resveratrol_2x_Assembly.data = `LOCUS       Resveratrol_2x_Assembly 2448 bp ds-DNA     circular     25-JUN-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     primer_bind         2243..2261
                         /label="pBRforEco"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     promoter            complement(2071..2175)
                         /label="AmpR promoter"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Zinc Finger Site    2436..2444
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     primer_bind         1833..1852
                         /label="Amp-R"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     misc_feature        1351..1351
                         /label="Point Mutation"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     Zinc Finger Site    2425..2433
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    2414..2422
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     rep_origin          complement(451..1039)
                         /label="ori"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     primer_bind         complement(531..550)
                         /label="pBR322ori-F"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     Zinc Finger Site    2392..2400
                         /label="ZFc Site"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
     primer_bind         complement(280..297)
                         /label="L4440"
                         /ApEinfo_revcolor=#75c6a9
                         /ApEinfo_fwdcolor=#75c6a9
     Promoter            2333..2367
                         /label="J23100 Anderson Promoter"
                         /ApEinfo_revcolor=#d59687
                         /ApEinfo_fwdcolor=#d59687
     CDS                 complement(1210..2070)
                         /label="AmpR"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     HIV-RT Binding Site join(2445..2448,1..106)
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Terminator          107..175
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     misc_binding        2369..2391
                         /label="LacO"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     gBlock              53..196
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Backbone            197..2310
                         /label="Mutated pSB1A3"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Biobricking         176..196
                         /label="BioBrick Suffix"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Biobricking         2311..2332
                         /label="BioBrick Prefix "
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site    2403..2411
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     terminator          2265..2308
                         /label="bacterial terminator"
                         /ApEinfo_revcolor=#ffef86
                         /ApEinfo_fwdcolor=#ffef86
ORIGIN
        1 AAAACGTGGC GCCCGAACAG GGACGGATAG CTCAGTCGGT AGAGCATCAG ACTTTTAATC
       61 TGAGGGTCCA GGGTTCAAGT CCCTGTTCGG GCGCCACGTT TTTTTTatta gcagaaagtc
      121 aaaagcctcc gaccggaggc ttttgactaa aacttccctt ggggttatca ttgggtacta
      181 gtagcggccg ctgcagagtc cggcaaaaaa gggcaaggtg tcaccaccct gccctttttc
      241 tttaaaaccg aaaagattac ttcgcgttat gcaggcttcc tcgctcactg actcgctgcg
      301 ctcggtcgtt cggctgcggc gagcggtatc agctcactca aaggcggtaa tacggttatc
      361 cacagaatca ggggataacg caggaaagaa catgtgagca aaaggccagc aaaaggccag
      421 gaaccgtaaa aaggccgcgt tgctggcgtt tttccacagg ctccgccccc ctgacgagca
      481 tcacaaaaat cgacgctcaa gtcagaggtg gcgaaacccg acaggactat aaagatacca
      541 ggcgtttccc cctggaagct ccctcgtgcg ctctcctgtt ccgaccctgc cgcttaccgg
      601 atacctgtcc gcctttctcc cttcgggaag cgtggcgctt tctcatagct cacgctgtag
      661 gtatctcagt tcggtgtagg tcgttcgctc caagctgggc tgtgtgcacg aaccccccgt
      721 tcagcccgac cgctgcgcct tatccggtaa ctatcgtctt gagtccaacc cggtaagaca
      781 cgacttatcg ccactggcag cagccactgg taacaggatt agcagagcga ggtatgtagg
      841 cggtgctaca gagttcttga agtggtggcc taactacggc tacactagaa gaacagtatt
      901 tggtatctgc gctctgctga agccagttac cttcggaaaa agagttggta gctcttgatc
      961 cggcaaacaa accaccgctg gtagcggtgg tttttttgtt tgcaagcagc agattacgcg
     1021 cagaaaaaaa ggatctcaag aagatccttt gatcttttct acggggtctg acgctcagtg
     1081 gaacgaaaac tcacgttaag ggattttggt catgagatta tcaaaaagga tcttcaccta
     1141 gatcctttta aattaaaaat gaagttttaa atcaatctaa agtatatatg agtaaacttg
     1201 gtctgacagt taccaatgct taatcagtga ggcacctatc tcagcgatct gtctatttcg
     1261 ttcatccata gttgcctgac tccccgtcgt gtagataact acgatacggg agggcttacc
     1321 atctggcccc agtgctgcaa tgataccgcg cgacccacgc tcaccggctc cagatttatc
     1381 agcaataaac cagccagccg gaagggccga gcgcagaagt ggtcctgcaa ctttatccgc
     1441 ctccatccag tctattaatt gttgccggga agctagagta agtagttcgc cagttaatag
     1501 tttgcgcaac gttgttgcca ttgctacagg catcgtggtg tcacgctcgt cgtttggtat
     1561 ggcttcattc agctccggtt cccaacgatc aaggcgagtt acatgatccc ccatgttgtg
     1621 caaaaaagcg gttagctcct tcggtcctcc gatcgttgtc agaagtaagt tggccgcagt
     1681 gttatcactc atggttatgg cagcactgca taattctctt actgtcatgc catccgtaag
     1741 atgcttttct gtgactggtg agtactcaac caagtcattc tgagaatagt gtatgcggcg
     1801 accgagttgc tcttgcccgg cgtcaatacg ggataatacc gcgccacata gcagaacttt
     1861 aaaagtgctc atcattggaa aacgttcttc ggggcgaaaa ctctcaagga tcttaccgct
     1921 gttgagatcc agttcgatat aacccactcg tgcacccaac tgatcttcag catcttttac
     1981 tttcaccagc gtttctgggt gagcaaaaac aggaaggcaa aatgccgcaa aaaagggaat
     2041 aagggcgaca cggaaatgtt gaatactcat actcttcctt tttcaatatt attgaagcat
     2101 ttatcagggt tattgtctca tgagcggata catatttgaa tgtatttaga aaaataaaca
     2161 aataggggtt ccgcgcacat ttccccgaaa agtgccacct gacgtctaag aaaccattat
     2221 tatcatgaca ttaacctata aaaataggcg tatcacgagg cagaatttca gataaaaaaa
     2281 atccttagct ttcgctaagg atgatttctg gaattcgcgg ccgcttctag agTTGACGGC
     2341 TAGCTCAGTC CTAGGTACAG TGCTAGCTGG AATTGTGAGC GGATAACAAT TGAGGACGGC
     2401 ATGCGTGGGC GATGTGTGGA AAATGCGTGG GCGATGTGTG GAAAAAAA
//`
        
sequences.seq_Resveratrol_2x_Comp_Assembly = {};
sequences.seq_Resveratrol_2x_Comp_Assembly.varName = "seq_Resveratrol_2x_Comp_Assembly";
sequences.seq_Resveratrol_2x_Comp_Assembly.name = "Resveratrol 2x Comp Assembly";
sequences.seq_Resveratrol_2x_Comp_Assembly.seqType = "both";
sequences.seq_Resveratrol_2x_Comp_Assembly.comp = true;
sequences.seq_Resveratrol_2x_Comp_Assembly.data = `LOCUS       Resveratrol_2x_Comp_Ass 2448 bp ds-DNA     circular     25-JUN-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     Promoter            2333..2367
                         /label="J23100 Anderson Promoter"
                         /ApEinfo_revcolor=#d59687
                         /ApEinfo_fwdcolor=#d59687
     HIV-RT Binding Site join(2445..2448,1..106)
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     promoter            complement(2071..2175)
                         /label="AmpR promoter"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     gBlock              53..196
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Backbone            197..2310
                         /label="Mutated pSB1A3"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     primer_bind         2243..2261
                         /label="pBRforEco"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Biobricking         176..196
                         /label="BioBrick Suffix"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Biobricking         2311..2332
                         /label="BioBrick Prefix "
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     terminator          2265..2308
                         /label="bacterial terminator"
                         /ApEinfo_revcolor=#ffef86
                         /ApEinfo_fwdcolor=#ffef86
     primer_bind         1833..1852
                         /label="Amp-R"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     misc_feature        1351..1351
                         /label="Point Mutation"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     CDS                 complement(1210..2070)
                         /label="AmpR"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     Zinc Finger Site    complement(2436..2444)
                         /label="ZFc Site"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
     rep_origin          complement(451..1039)
                         /label="ori"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     Zinc Finger Site    complement(2425..2433)
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     primer_bind         complement(280..297)
                         /label="L4440"
                         /ApEinfo_revcolor=#75c6a9
                         /ApEinfo_fwdcolor=#75c6a9
     Zinc Finger Site    complement(2414..2422)
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     primer_bind         complement(531..550)
                         /label="pBR322ori-F"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     Zinc Finger Site    complement(2403..2411)
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    complement(2392..2400)
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     misc_binding        2369..2391
                         /label="LacO"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Terminator          107..175
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
ORIGIN
        1 AAAACGTGGC GCCCGAACAG GGACGGATAG CTCAGTCGGT AGAGCATCAG ACTTTTAATC
       61 TGAGGGTCCA GGGTTCAAGT CCCTGTTCGG GCGCCACGTT TTTTTTatta gcagaaagtc
      121 aaaagcctcc gaccggaggc ttttgactaa aacttccctt ggggttatca ttgggtacta
      181 gtagcggccg ctgcagagtc cggcaaaaaa gggcaaggtg tcaccaccct gccctttttc
      241 tttaaaaccg aaaagattac ttcgcgttat gcaggcttcc tcgctcactg actcgctgcg
      301 ctcggtcgtt cggctgcggc gagcggtatc agctcactca aaggcggtaa tacggttatc
      361 cacagaatca ggggataacg caggaaagaa catgtgagca aaaggccagc aaaaggccag
      421 gaaccgtaaa aaggccgcgt tgctggcgtt tttccacagg ctccgccccc ctgacgagca
      481 tcacaaaaat cgacgctcaa gtcagaggtg gcgaaacccg acaggactat aaagatacca
      541 ggcgtttccc cctggaagct ccctcgtgcg ctctcctgtt ccgaccctgc cgcttaccgg
      601 atacctgtcc gcctttctcc cttcgggaag cgtggcgctt tctcatagct cacgctgtag
      661 gtatctcagt tcggtgtagg tcgttcgctc caagctgggc tgtgtgcacg aaccccccgt
      721 tcagcccgac cgctgcgcct tatccggtaa ctatcgtctt gagtccaacc cggtaagaca
      781 cgacttatcg ccactggcag cagccactgg taacaggatt agcagagcga ggtatgtagg
      841 cggtgctaca gagttcttga agtggtggcc taactacggc tacactagaa gaacagtatt
      901 tggtatctgc gctctgctga agccagttac cttcggaaaa agagttggta gctcttgatc
      961 cggcaaacaa accaccgctg gtagcggtgg tttttttgtt tgcaagcagc agattacgcg
     1021 cagaaaaaaa ggatctcaag aagatccttt gatcttttct acggggtctg acgctcagtg
     1081 gaacgaaaac tcacgttaag ggattttggt catgagatta tcaaaaagga tcttcaccta
     1141 gatcctttta aattaaaaat gaagttttaa atcaatctaa agtatatatg agtaaacttg
     1201 gtctgacagt taccaatgct taatcagtga ggcacctatc tcagcgatct gtctatttcg
     1261 ttcatccata gttgcctgac tccccgtcgt gtagataact acgatacggg agggcttacc
     1321 atctggcccc agtgctgcaa tgataccgcg cgacccacgc tcaccggctc cagatttatc
     1381 agcaataaac cagccagccg gaagggccga gcgcagaagt ggtcctgcaa ctttatccgc
     1441 ctccatccag tctattaatt gttgccggga agctagagta agtagttcgc cagttaatag
     1501 tttgcgcaac gttgttgcca ttgctacagg catcgtggtg tcacgctcgt cgtttggtat
     1561 ggcttcattc agctccggtt cccaacgatc aaggcgagtt acatgatccc ccatgttgtg
     1621 caaaaaagcg gttagctcct tcggtcctcc gatcgttgtc agaagtaagt tggccgcagt
     1681 gttatcactc atggttatgg cagcactgca taattctctt actgtcatgc catccgtaag
     1741 atgcttttct gtgactggtg agtactcaac caagtcattc tgagaatagt gtatgcggcg
     1801 accgagttgc tcttgcccgg cgtcaatacg ggataatacc gcgccacata gcagaacttt
     1861 aaaagtgctc atcattggaa aacgttcttc ggggcgaaaa ctctcaagga tcttaccgct
     1921 gttgagatcc agttcgatat aacccactcg tgcacccaac tgatcttcag catcttttac
     1981 tttcaccagc gtttctgggt gagcaaaaac aggaaggcaa aatgccgcaa aaaagggaat
     2041 aagggcgaca cggaaatgtt gaatactcat actcttcctt tttcaatatt attgaagcat
     2101 ttatcagggt tattgtctca tgagcggata catatttgaa tgtatttaga aaaataaaca
     2161 aataggggtt ccgcgcacat ttccccgaaa agtgccacct gacgtctaag aaaccattat
     2221 tatcatgaca ttaacctata aaaataggcg tatcacgagg cagaatttca gataaaaaaa
     2281 atccttagct ttcgctaagg atgatttctg gaattcgcgg ccgcttctag agTTGACGGC
     2341 TAGCTCAGTC CTAGGTACAG TGCTAGCTGG AATTGTGAGC GGATAACAAT TTTTCCACAC
     2401 ATCGCCCACG CATTTTCCAC ACATCGCCCA CGCATGCCGT CCTCAAAA
//`
        
sequences.seq_Resveratrol_2x_Full_Part = {};
sequences.seq_Resveratrol_2x_Full_Part.varName = "seq_Resveratrol_2x_Full_Part";
sequences.seq_Resveratrol_2x_Full_Part.name = "Resveratrol 2x Full Part";
sequences.seq_Resveratrol_2x_Full_Part.seqType = "both";
sequences.seq_Resveratrol_2x_Full_Part.comp = true;
sequences.seq_Resveratrol_2x_Full_Part.data = `LOCUS       Resveratrol_2x_Full_Par 2747 bp ds-DNA     circular     14-JUL-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     primer_bind         complement(531..550)
                         /label="pBR322ori-F"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     Zinc Finger Site    2414..2422
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     Promoter            2632..2666
                         /label="J23100 Anderson Promoter"
                         /ApEinfo_revcolor=#d59687
                         /ApEinfo_fwdcolor=#d59687
     gBlock              53..196
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     HIV-RT Binding Site 2445..2554
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     HIV-RT Binding Site join(2744..2747,1..106)
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Zinc Finger Site    complement(2735..2743)
                         /label="ZFc Site"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
     promoter            complement(2071..2175)
                         /label="AmpR promoter"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     primer_bind         2243..2261
                         /label="pBRforEco"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     misc_binding        2668..2690
                         /label="LacO"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site    complement(2713..2721)
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     Backbone            197..2310
                         /label="Mutated pSB1A3"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     misc_feature        1351..1351
                         /label="Point Mutation"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     terminator          2265..2308
                         /label="bacterial terminator"
                         /ApEinfo_revcolor=#ffef86
                         /ApEinfo_fwdcolor=#ffef86
     Scar                2624..2631
                         /label="BioBrick Scar"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     Terminator          2555..2623
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     primer_bind         complement(280..297)
                         /label="L4440"
                         /ApEinfo_revcolor=#75c6a9
                         /ApEinfo_fwdcolor=#75c6a9
     rep_origin          complement(451..1039)
                         /label="ori"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     misc_binding        2369..2391
                         /label="LacO"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site    2425..2433
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    2436..2444
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     Zinc Finger Site    2403..2411
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Biobricking         2311..2332
                         /label="BioBrick Prefix "
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site    2392..2400
                         /label="ZFc Site"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
     Zinc Finger Site    complement(2724..2732)
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    complement(2702..2710)
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Biobricking         176..196
                         /label="BioBrick Suffix"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Promoter            2333..2367
                         /label="J23100 Anderson Promoter"
                         /ApEinfo_revcolor=#d59687
                         /ApEinfo_fwdcolor=#d59687
     Zinc Finger Site    complement(2691..2699)
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     primer_bind         1833..1852
                         /label="Amp-R"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     gBlock              2501..2625
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Terminator          107..175
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     CDS                 complement(1210..2070)
                         /label="AmpR"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
ORIGIN
        1 AAAACGTGGC GCCCGAACAG GGACGGATAG CTCAGTCGGT AGAGCATCAG ACTTTTAATC
       61 TGAGGGTCCA GGGTTCAAGT CCCTGTTCGG GCGCCACGTT TTTTTTatta gcagaaagtc
      121 aaaagcctcc gaccggaggc ttttgactaa aacttccctt ggggttatca ttgggtacta
      181 gtagcggccg ctgcagagtc cggcaaaaaa gggcaaggtg tcaccaccct gccctttttc
      241 tttaaaaccg aaaagattac ttcgcgttat gcaggcttcc tcgctcactg actcgctgcg
      301 ctcggtcgtt cggctgcggc gagcggtatc agctcactca aaggcggtaa tacggttatc
      361 cacagaatca ggggataacg caggaaagaa catgtgagca aaaggccagc aaaaggccag
      421 gaaccgtaaa aaggccgcgt tgctggcgtt tttccacagg ctccgccccc ctgacgagca
      481 tcacaaaaat cgacgctcaa gtcagaggtg gcgaaacccg acaggactat aaagatacca
      541 ggcgtttccc cctggaagct ccctcgtgcg ctctcctgtt ccgaccctgc cgcttaccgg
      601 atacctgtcc gcctttctcc cttcgggaag cgtggcgctt tctcatagct cacgctgtag
      661 gtatctcagt tcggtgtagg tcgttcgctc caagctgggc tgtgtgcacg aaccccccgt
      721 tcagcccgac cgctgcgcct tatccggtaa ctatcgtctt gagtccaacc cggtaagaca
      781 cgacttatcg ccactggcag cagccactgg taacaggatt agcagagcga ggtatgtagg
      841 cggtgctaca gagttcttga agtggtggcc taactacggc tacactagaa gaacagtatt
      901 tggtatctgc gctctgctga agccagttac cttcggaaaa agagttggta gctcttgatc
      961 cggcaaacaa accaccgctg gtagcggtgg tttttttgtt tgcaagcagc agattacgcg
     1021 cagaaaaaaa ggatctcaag aagatccttt gatcttttct acggggtctg acgctcagtg
     1081 gaacgaaaac tcacgttaag ggattttggt catgagatta tcaaaaagga tcttcaccta
     1141 gatcctttta aattaaaaat gaagttttaa atcaatctaa agtatatatg agtaaacttg
     1201 gtctgacagt taccaatgct taatcagtga ggcacctatc tcagcgatct gtctatttcg
     1261 ttcatccata gttgcctgac tccccgtcgt gtagataact acgatacggg agggcttacc
     1321 atctggcccc agtgctgcaa tgataccgcg cgacccacgc tcaccggctc cagatttatc
     1381 agcaataaac cagccagccg gaagggccga gcgcagaagt ggtcctgcaa ctttatccgc
     1441 ctccatccag tctattaatt gttgccggga agctagagta agtagttcgc cagttaatag
     1501 tttgcgcaac gttgttgcca ttgctacagg catcgtggtg tcacgctcgt cgtttggtat
     1561 ggcttcattc agctccggtt cccaacgatc aaggcgagtt acatgatccc ccatgttgtg
     1621 caaaaaagcg gttagctcct tcggtcctcc gatcgttgtc agaagtaagt tggccgcagt
     1681 gttatcactc atggttatgg cagcactgca taattctctt actgtcatgc catccgtaag
     1741 atgcttttct gtgactggtg agtactcaac caagtcattc tgagaatagt gtatgcggcg
     1801 accgagttgc tcttgcccgg cgtcaatacg ggataatacc gcgccacata gcagaacttt
     1861 aaaagtgctc atcattggaa aacgttcttc ggggcgaaaa ctctcaagga tcttaccgct
     1921 gttgagatcc agttcgatat aacccactcg tgcacccaac tgatcttcag catcttttac
     1981 tttcaccagc gtttctgggt gagcaaaaac aggaaggcaa aatgccgcaa aaaagggaat
     2041 aagggcgaca cggaaatgtt gaatactcat actcttcctt tttcaatatt attgaagcat
     2101 ttatcagggt tattgtctca tgagcggata catatttgaa tgtatttaga aaaataaaca
     2161 aataggggtt ccgcgcacat ttccccgaaa agtgccacct gacgtctaag aaaccattat
     2221 tatcatgaca ttaacctata aaaataggcg tatcacgagg cagaatttca gataaaaaaa
     2281 atccttagct ttcgctaagg atgatttctg gaattcgcgg ccgcttctag agTTGACGGC
     2341 TAGCTCAGTC CTAGGTACAG TGCTAGCTGG AATTGTGAGC GGATAACAAT TGAGGACGGC
     2401 ATGCGTGGGC GATGTGTGGA AAATGCGTGG GCGATGTGTG GAAAAAAAAA AACGTGGCGC
     2461 CCGAACAGGG ACGGATAGCT CAGTCGGTAG AGCATCAGAC TTTTAATCTG AGGGTCCAGG
     2521 GTTCAAGTCC CTGTTCGGGC GCCACGTTTT TTTTattagc agaaagtcaa aagcctccga
     2581 ccggaggctt ttgactaaaa cttcccttgg ggttatcatt gggtactaga gTTGACGGCT
     2641 AGCTCAGTCC TAGGTACAGT GCTAGCTGGA ATTGTGAGCG GATAACAATT TTTCCACACA
     2701 TCGCCCACGC ATTTTCCACA CATCGCCCAC GCATGCCGTC CTCAAAA
//`
        
sequences.seq_Resveratrol_2x_r_oligo_Complement_Duplex = {};
sequences.seq_Resveratrol_2x_r_oligo_Complement_Duplex.varName = "seq_Resveratrol_2x_r_oligo_Complement_Duplex";
sequences.seq_Resveratrol_2x_r_oligo_Complement_Duplex.name = "Resveratrol 2x r_oligo Complement Duplex";
sequences.seq_Resveratrol_2x_r_oligo_Complement_Duplex.seqType = "linear";
sequences.seq_Resveratrol_2x_r_oligo_Complement_Duplex.comp = true;
sequences.seq_Resveratrol_2x_r_oligo_Complement_Duplex.data = `LOCUS       Resveratrol_2x_r_oligo_C 111 bp ds-DNA     linear       25-JUN-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     misc_binding    19..41
                     /label="LacO"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_feature    complement(42..50)
                     /label="PBSII Site"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     misc_feature    complement(53..61)
                     /label="Zif268"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     misc_feature    complement(64..72)
                     /label="PBSII Site"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     misc_feature    complement(75..83)
                     /label="Zif268"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site complement(86..94)
                     /label="ZFc Site"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
ORIGIN
        1 GAACAGGGTC TCCTAGCTGG AATTGTGAGC GGATAACAAT TTTTCCACAC ATCGCCCACG
       61 CATTTTCCAC ACATCGCCCA CGCATGCCGT CCTCAAAACG AGACCAACCT G
//`
        
sequences.seq_Resveratrol_2x_r_oligo_Duplex_1133_FWD_1 = {};
sequences.seq_Resveratrol_2x_r_oligo_Duplex_1133_FWD_1.varName = "seq_Resveratrol_2x_r_oligo_Duplex_1133_FWD_1";
sequences.seq_Resveratrol_2x_r_oligo_Duplex_1133_FWD_1.name = "Resveratrol 2x r_oligo Duplex 11-33 FWD 1";
sequences.seq_Resveratrol_2x_r_oligo_Duplex_1133_FWD_1.seqType = "linear";
sequences.seq_Resveratrol_2x_r_oligo_Duplex_1133_FWD_1.comp = false;
sequences.seq_Resveratrol_2x_r_oligo_Duplex_1133_FWD_1.data = `LOCUS       Resveratrol_2x_r_oligo_Du 23 bp ds-DNA     linear       07-JUL-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 TCCTAGCTGG AATTGTGAGC GGA
//`
        
sequences.seq_Resveratrol_2x_r_oligo_Duplex_7594_REV_1 = {};
sequences.seq_Resveratrol_2x_r_oligo_Duplex_7594_REV_1.varName = "seq_Resveratrol_2x_r_oligo_Duplex_7594_REV_1";
sequences.seq_Resveratrol_2x_r_oligo_Duplex_7594_REV_1.name = "Resveratrol 2x r_oligo Duplex 75-94 REV 1";
sequences.seq_Resveratrol_2x_r_oligo_Duplex_7594_REV_1.seqType = "linear";
sequences.seq_Resveratrol_2x_r_oligo_Duplex_7594_REV_1.comp = false;
sequences.seq_Resveratrol_2x_r_oligo_Duplex_7594_REV_1.data = `LOCUS       Resveratrol_2x_r_oligo_Du 20 bp ds-DNA     linear       07-JUL-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 TTTCCACACA TCGCCCACGC
//`
        
sequences.seq_Resveratrol_2x_r_oligo_Duplex = {};
sequences.seq_Resveratrol_2x_r_oligo_Duplex.varName = "seq_Resveratrol_2x_r_oligo_Duplex";
sequences.seq_Resveratrol_2x_r_oligo_Duplex.name = "Resveratrol 2x r_oligo Duplex";
sequences.seq_Resveratrol_2x_r_oligo_Duplex.seqType = "linear";
sequences.seq_Resveratrol_2x_r_oligo_Duplex.comp = true;
sequences.seq_Resveratrol_2x_r_oligo_Duplex.data = `LOCUS       Resveratrol_2x_r_oligo_D 111 bp ds-DNA     linear       07-JUL-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     misc_binding    19..41
                     /label="LacO"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site 42..50
                     /label="ZFc Site"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     misc_feature    53..61
                     /label="Zif268"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     misc_feature    64..72
                     /label="PBSII Site"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     misc_feature    75..83
                     /label="Zif268"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     misc_feature    86..94
                     /label="PBSII Site"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     primer          complement(75..94)
                     /label="Resveratrol 2x r_oligo Duplex 75-94 REV 1"
                     /note="sequence: TTTCCACACATCGCCCACGC"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     primer          11..33
                     /label="Resveratrol 2x r_oligo Duplex 11-33 FWD 1"
                     /note="sequence: TCCTAGCTGGAATTGTGAGCGGA"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
ORIGIN
        1 GAACAGGGTC TCCTAGCTGG AATTGTGAGC GGATAACAAT TGAGGACGGC ATGCGTGGGC
       61 GATGTGTGGA AAATGCGTGG GCGATGTGTG GAAAAAAACG AGACCAACCT G
//`
        
sequences.seq_Resveratrol_4x_Assembly = {};
sequences.seq_Resveratrol_4x_Assembly.varName = "seq_Resveratrol_4x_Assembly";
sequences.seq_Resveratrol_4x_Assembly.name = "Resveratrol 4x Assembly";
sequences.seq_Resveratrol_4x_Assembly.seqType = "both";
sequences.seq_Resveratrol_4x_Assembly.comp = true;
sequences.seq_Resveratrol_4x_Assembly.data = `LOCUS       Resveratrol_4x_Assembly 2492 bp ds-DNA     circular     25-JUN-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     Biobricking         2311..2332
                         /label="BioBrick Prefix "
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Promoter            2333..2367
                         /label="J23100 Anderson Promoter"
                         /ApEinfo_revcolor=#d59687
                         /ApEinfo_fwdcolor=#d59687
     Backbone            197..2310
                         /label="Mutated pSB1A3"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Zinc Finger Site    2392..2400
                         /label="ZFc Site"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
     terminator          2265..2308
                         /label="bacterial terminator"
                         /ApEinfo_revcolor=#ffef86
                         /ApEinfo_fwdcolor=#ffef86
     promoter            complement(2071..2175)
                         /label="AmpR promoter"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Biobricking         176..196
                         /label="BioBrick Suffix"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site    2447..2455
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    2469..2477
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    2458..2466
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     misc_feature        1351..1351
                         /label="Point Mutation"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     Zinc Finger Site    2403..2411
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     rep_origin          complement(451..1039)
                         /label="ori"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     Zinc Finger Site    2425..2433
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     primer_bind         1833..1852
                         /label="Amp-R"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     Zinc Finger Site    2436..2444
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     CDS                 complement(1210..2070)
                         /label="AmpR"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     misc_binding        2369..2391
                         /label="LacO"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     primer_bind         2243..2261
                         /label="pBRforEco"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    2414..2422
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     Terminator          107..175
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     primer_bind         complement(280..297)
                         /label="L4440"
                         /ApEinfo_revcolor=#75c6a9
                         /ApEinfo_fwdcolor=#75c6a9
     gBlock              53..196
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     HIV-RT Binding Site join(2489..2492,1..106)
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Zinc Finger Site    2480..2488
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     primer_bind         complement(531..550)
                         /label="pBR322ori-F"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
ORIGIN
        1 AAAACGTGGC GCCCGAACAG GGACGGATAG CTCAGTCGGT AGAGCATCAG ACTTTTAATC
       61 TGAGGGTCCA GGGTTCAAGT CCCTGTTCGG GCGCCACGTT TTTTTTatta gcagaaagtc
      121 aaaagcctcc gaccggaggc ttttgactaa aacttccctt ggggttatca ttgggtacta
      181 gtagcggccg ctgcagagtc cggcaaaaaa gggcaaggtg tcaccaccct gccctttttc
      241 tttaaaaccg aaaagattac ttcgcgttat gcaggcttcc tcgctcactg actcgctgcg
      301 ctcggtcgtt cggctgcggc gagcggtatc agctcactca aaggcggtaa tacggttatc
      361 cacagaatca ggggataacg caggaaagaa catgtgagca aaaggccagc aaaaggccag
      421 gaaccgtaaa aaggccgcgt tgctggcgtt tttccacagg ctccgccccc ctgacgagca
      481 tcacaaaaat cgacgctcaa gtcagaggtg gcgaaacccg acaggactat aaagatacca
      541 ggcgtttccc cctggaagct ccctcgtgcg ctctcctgtt ccgaccctgc cgcttaccgg
      601 atacctgtcc gcctttctcc cttcgggaag cgtggcgctt tctcatagct cacgctgtag
      661 gtatctcagt tcggtgtagg tcgttcgctc caagctgggc tgtgtgcacg aaccccccgt
      721 tcagcccgac cgctgcgcct tatccggtaa ctatcgtctt gagtccaacc cggtaagaca
      781 cgacttatcg ccactggcag cagccactgg taacaggatt agcagagcga ggtatgtagg
      841 cggtgctaca gagttcttga agtggtggcc taactacggc tacactagaa gaacagtatt
      901 tggtatctgc gctctgctga agccagttac cttcggaaaa agagttggta gctcttgatc
      961 cggcaaacaa accaccgctg gtagcggtgg tttttttgtt tgcaagcagc agattacgcg
     1021 cagaaaaaaa ggatctcaag aagatccttt gatcttttct acggggtctg acgctcagtg
     1081 gaacgaaaac tcacgttaag ggattttggt catgagatta tcaaaaagga tcttcaccta
     1141 gatcctttta aattaaaaat gaagttttaa atcaatctaa agtatatatg agtaaacttg
     1201 gtctgacagt taccaatgct taatcagtga ggcacctatc tcagcgatct gtctatttcg
     1261 ttcatccata gttgcctgac tccccgtcgt gtagataact acgatacggg agggcttacc
     1321 atctggcccc agtgctgcaa tgataccgcg cgacccacgc tcaccggctc cagatttatc
     1381 agcaataaac cagccagccg gaagggccga gcgcagaagt ggtcctgcaa ctttatccgc
     1441 ctccatccag tctattaatt gttgccggga agctagagta agtagttcgc cagttaatag
     1501 tttgcgcaac gttgttgcca ttgctacagg catcgtggtg tcacgctcgt cgtttggtat
     1561 ggcttcattc agctccggtt cccaacgatc aaggcgagtt acatgatccc ccatgttgtg
     1621 caaaaaagcg gttagctcct tcggtcctcc gatcgttgtc agaagtaagt tggccgcagt
     1681 gttatcactc atggttatgg cagcactgca taattctctt actgtcatgc catccgtaag
     1741 atgcttttct gtgactggtg agtactcaac caagtcattc tgagaatagt gtatgcggcg
     1801 accgagttgc tcttgcccgg cgtcaatacg ggataatacc gcgccacata gcagaacttt
     1861 aaaagtgctc atcattggaa aacgttcttc ggggcgaaaa ctctcaagga tcttaccgct
     1921 gttgagatcc agttcgatat aacccactcg tgcacccaac tgatcttcag catcttttac
     1981 tttcaccagc gtttctgggt gagcaaaaac aggaaggcaa aatgccgcaa aaaagggaat
     2041 aagggcgaca cggaaatgtt gaatactcat actcttcctt tttcaatatt attgaagcat
     2101 ttatcagggt tattgtctca tgagcggata catatttgaa tgtatttaga aaaataaaca
     2161 aataggggtt ccgcgcacat ttccccgaaa agtgccacct gacgtctaag aaaccattat
     2221 tatcatgaca ttaacctata aaaataggcg tatcacgagg cagaatttca gataaaaaaa
     2281 atccttagct ttcgctaagg atgatttctg gaattcgcgg ccgcttctag agTTGACGGC
     2341 TAGCTCAGTC CTAGGTACAG TGCTAGCTGG AATTGTGAGC GGATAACAAT TGAGGACGGC
     2401 ATGCGTGGGC GATGTGTGGA AAATGCGTGG GCGATGTGTG GAAAATGCGT GGGCGATGTG
     2461 TGGAAAATGC GTGGGCGATG TGTGGAAAAA AA
//`
        
sequences.seq_Resveratrol_4x_Comp_Assembly = {};
sequences.seq_Resveratrol_4x_Comp_Assembly.varName = "seq_Resveratrol_4x_Comp_Assembly";
sequences.seq_Resveratrol_4x_Comp_Assembly.name = "Resveratrol 4x Comp Assembly";
sequences.seq_Resveratrol_4x_Comp_Assembly.seqType = "both";
sequences.seq_Resveratrol_4x_Comp_Assembly.comp = true;
sequences.seq_Resveratrol_4x_Comp_Assembly.data = `LOCUS       Resveratrol_4x_Comp_Ass 2492 bp ds-DNA     circular     25-JUN-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     terminator          2265..2308
                         /label="bacterial terminator"
                         /ApEinfo_revcolor=#ffef86
                         /ApEinfo_fwdcolor=#ffef86
     Zinc Finger Site    complement(2469..2477)
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    complement(2392..2400)
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     Zinc Finger Site    complement(2458..2466)
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     primer_bind         complement(280..297)
                         /label="L4440"
                         /ApEinfo_revcolor=#75c6a9
                         /ApEinfo_fwdcolor=#75c6a9
     Zinc Finger Site    complement(2480..2488)
                         /label="ZFc Site"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
     promoter            complement(2071..2175)
                         /label="AmpR promoter"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     rep_origin          complement(451..1039)
                         /label="ori"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     misc_binding        2369..2391
                         /label="LacO"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     primer_bind         2243..2261
                         /label="pBRforEco"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Terminator          107..175
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     gBlock              53..196
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     CDS                 complement(1210..2070)
                         /label="AmpR"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     Zinc Finger Site    complement(2414..2422)
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     Zinc Finger Site    complement(2436..2444)
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     HIV-RT Binding Site join(2489..2492,1..106)
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Zinc Finger Site    complement(2425..2433)
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Backbone            197..2310
                         /label="Mutated pSB1A3"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Biobricking         176..196
                         /label="BioBrick Suffix"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     primer_bind         complement(531..550)
                         /label="pBR322ori-F"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     Biobricking         2311..2332
                         /label="BioBrick Prefix "
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site    complement(2403..2411)
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    complement(2447..2455)
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Promoter            2333..2367
                         /label="J23100 Anderson Promoter"
                         /ApEinfo_revcolor=#d59687
                         /ApEinfo_fwdcolor=#d59687
     misc_feature        1351..1351
                         /label="Point Mutation"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     primer_bind         1833..1852
                         /label="Amp-R"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
ORIGIN
        1 AAAACGTGGC GCCCGAACAG GGACGGATAG CTCAGTCGGT AGAGCATCAG ACTTTTAATC
       61 TGAGGGTCCA GGGTTCAAGT CCCTGTTCGG GCGCCACGTT TTTTTTatta gcagaaagtc
      121 aaaagcctcc gaccggaggc ttttgactaa aacttccctt ggggttatca ttgggtacta
      181 gtagcggccg ctgcagagtc cggcaaaaaa gggcaaggtg tcaccaccct gccctttttc
      241 tttaaaaccg aaaagattac ttcgcgttat gcaggcttcc tcgctcactg actcgctgcg
      301 ctcggtcgtt cggctgcggc gagcggtatc agctcactca aaggcggtaa tacggttatc
      361 cacagaatca ggggataacg caggaaagaa catgtgagca aaaggccagc aaaaggccag
      421 gaaccgtaaa aaggccgcgt tgctggcgtt tttccacagg ctccgccccc ctgacgagca
      481 tcacaaaaat cgacgctcaa gtcagaggtg gcgaaacccg acaggactat aaagatacca
      541 ggcgtttccc cctggaagct ccctcgtgcg ctctcctgtt ccgaccctgc cgcttaccgg
      601 atacctgtcc gcctttctcc cttcgggaag cgtggcgctt tctcatagct cacgctgtag
      661 gtatctcagt tcggtgtagg tcgttcgctc caagctgggc tgtgtgcacg aaccccccgt
      721 tcagcccgac cgctgcgcct tatccggtaa ctatcgtctt gagtccaacc cggtaagaca
      781 cgacttatcg ccactggcag cagccactgg taacaggatt agcagagcga ggtatgtagg
      841 cggtgctaca gagttcttga agtggtggcc taactacggc tacactagaa gaacagtatt
      901 tggtatctgc gctctgctga agccagttac cttcggaaaa agagttggta gctcttgatc
      961 cggcaaacaa accaccgctg gtagcggtgg tttttttgtt tgcaagcagc agattacgcg
     1021 cagaaaaaaa ggatctcaag aagatccttt gatcttttct acggggtctg acgctcagtg
     1081 gaacgaaaac tcacgttaag ggattttggt catgagatta tcaaaaagga tcttcaccta
     1141 gatcctttta aattaaaaat gaagttttaa atcaatctaa agtatatatg agtaaacttg
     1201 gtctgacagt taccaatgct taatcagtga ggcacctatc tcagcgatct gtctatttcg
     1261 ttcatccata gttgcctgac tccccgtcgt gtagataact acgatacggg agggcttacc
     1321 atctggcccc agtgctgcaa tgataccgcg cgacccacgc tcaccggctc cagatttatc
     1381 agcaataaac cagccagccg gaagggccga gcgcagaagt ggtcctgcaa ctttatccgc
     1441 ctccatccag tctattaatt gttgccggga agctagagta agtagttcgc cagttaatag
     1501 tttgcgcaac gttgttgcca ttgctacagg catcgtggtg tcacgctcgt cgtttggtat
     1561 ggcttcattc agctccggtt cccaacgatc aaggcgagtt acatgatccc ccatgttgtg
     1621 caaaaaagcg gttagctcct tcggtcctcc gatcgttgtc agaagtaagt tggccgcagt
     1681 gttatcactc atggttatgg cagcactgca taattctctt actgtcatgc catccgtaag
     1741 atgcttttct gtgactggtg agtactcaac caagtcattc tgagaatagt gtatgcggcg
     1801 accgagttgc tcttgcccgg cgtcaatacg ggataatacc gcgccacata gcagaacttt
     1861 aaaagtgctc atcattggaa aacgttcttc ggggcgaaaa ctctcaagga tcttaccgct
     1921 gttgagatcc agttcgatat aacccactcg tgcacccaac tgatcttcag catcttttac
     1981 tttcaccagc gtttctgggt gagcaaaaac aggaaggcaa aatgccgcaa aaaagggaat
     2041 aagggcgaca cggaaatgtt gaatactcat actcttcctt tttcaatatt attgaagcat
     2101 ttatcagggt tattgtctca tgagcggata catatttgaa tgtatttaga aaaataaaca
     2161 aataggggtt ccgcgcacat ttccccgaaa agtgccacct gacgtctaag aaaccattat
     2221 tatcatgaca ttaacctata aaaataggcg tatcacgagg cagaatttca gataaaaaaa
     2281 atccttagct ttcgctaagg atgatttctg gaattcgcgg ccgcttctag agTTGACGGC
     2341 TAGCTCAGTC CTAGGTACAG TGCTAGCTGG AATTGTGAGC GGATAACAAT TTTTCCACAC
     2401 ATCGCCCACG CATTTTCCAC ACATCGCCCA CGCATTTTCC ACACATCGCC CACGCATTTT
     2461 CCACACATCG CCCACGCATG CCGTCCTCAA AA
//`
        
sequences.seq_Resveratrol_4x_Full_Part = {};
sequences.seq_Resveratrol_4x_Full_Part.varName = "seq_Resveratrol_4x_Full_Part";
sequences.seq_Resveratrol_4x_Full_Part.name = "Resveratrol 4x Full Part";
sequences.seq_Resveratrol_4x_Full_Part.seqType = "both";
sequences.seq_Resveratrol_4x_Full_Part.comp = true;
sequences.seq_Resveratrol_4x_Full_Part.data = `LOCUS       Resveratrol_4x_Full_Par 2835 bp ds-DNA     circular     14-JUL-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     Zinc Finger Site    complement(2823..2831)
                         /label="ZFc Site"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
     Zinc Finger Site    complement(2768..2776)
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    2392..2400
                         /label="ZFc Site"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
     Zinc Finger Site    2403..2411
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    2480..2488
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     terminator          2265..2308
                         /label="bacterial terminator"
                         /ApEinfo_revcolor=#ffef86
                         /ApEinfo_fwdcolor=#ffef86
     Scar                2668..2675
                         /label="BioBrick Scar"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     primer_bind         complement(280..297)
                         /label="L4440"
                         /ApEinfo_revcolor=#75c6a9
                         /ApEinfo_fwdcolor=#75c6a9
     Zinc Finger Site    complement(2812..2820)
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     primer_bind         2243..2261
                         /label="pBRforEco"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    2414..2422
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     misc_feature        1351..1351
                         /label="Point Mutation"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     Promoter            2333..2367
                         /label="J23100 Anderson Promoter"
                         /ApEinfo_revcolor=#d59687
                         /ApEinfo_fwdcolor=#d59687
     Zinc Finger Site    complement(2779..2787)
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     Zinc Finger Site    2436..2444
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     primer_bind         complement(531..550)
                         /label="pBR322ori-F"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     Biobricking         2311..2332
                         /label="BioBrick Prefix "
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     HIV-RT Binding Site 2489..2598
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Zinc Finger Site    2458..2466
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     HIV-RT Binding Site join(2832..2835,1..106)
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Zinc Finger Site    complement(2735..2743)
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     misc_binding        2712..2734
                         /label="LacO"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Terminator          2599..2667
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    2425..2433
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site    2469..2477
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Backbone            197..2310
                         /label="Mutated pSB1A3"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Promoter            2676..2710
                         /label="J23100 Anderson Promoter"
                         /ApEinfo_revcolor=#d59687
                         /ApEinfo_fwdcolor=#d59687
     Zinc Finger Site    complement(2790..2798)
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     gBlock              2545..2669
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     promoter            complement(2071..2175)
                         /label="AmpR promoter"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     CDS                 complement(1210..2070)
                         /label="AmpR"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     Zinc Finger Site    complement(2757..2765)
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     Zinc Finger Site    2447..2455
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     primer_bind         1833..1852
                         /label="Amp-R"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     misc_binding        2369..2391
                         /label="LacO"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     gBlock              53..196
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Zinc Finger Site    complement(2801..2809)
                         /label="PBSII Site"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     rep_origin          complement(451..1039)
                         /label="ori"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     Zinc Finger Site    complement(2746..2754)
                         /label="Zif268 Site"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Biobricking         176..196
                         /label="BioBrick Suffix"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     Terminator          107..175
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
ORIGIN
        1 AAAACGTGGC GCCCGAACAG GGACGGATAG CTCAGTCGGT AGAGCATCAG ACTTTTAATC
       61 TGAGGGTCCA GGGTTCAAGT CCCTGTTCGG GCGCCACGTT TTTTTTatta gcagaaagtc
      121 aaaagcctcc gaccggaggc ttttgactaa aacttccctt ggggttatca ttgggtacta
      181 gtagcggccg ctgcagagtc cggcaaaaaa gggcaaggtg tcaccaccct gccctttttc
      241 tttaaaaccg aaaagattac ttcgcgttat gcaggcttcc tcgctcactg actcgctgcg
      301 ctcggtcgtt cggctgcggc gagcggtatc agctcactca aaggcggtaa tacggttatc
      361 cacagaatca ggggataacg caggaaagaa catgtgagca aaaggccagc aaaaggccag
      421 gaaccgtaaa aaggccgcgt tgctggcgtt tttccacagg ctccgccccc ctgacgagca
      481 tcacaaaaat cgacgctcaa gtcagaggtg gcgaaacccg acaggactat aaagatacca
      541 ggcgtttccc cctggaagct ccctcgtgcg ctctcctgtt ccgaccctgc cgcttaccgg
      601 atacctgtcc gcctttctcc cttcgggaag cgtggcgctt tctcatagct cacgctgtag
      661 gtatctcagt tcggtgtagg tcgttcgctc caagctgggc tgtgtgcacg aaccccccgt
      721 tcagcccgac cgctgcgcct tatccggtaa ctatcgtctt gagtccaacc cggtaagaca
      781 cgacttatcg ccactggcag cagccactgg taacaggatt agcagagcga ggtatgtagg
      841 cggtgctaca gagttcttga agtggtggcc taactacggc tacactagaa gaacagtatt
      901 tggtatctgc gctctgctga agccagttac cttcggaaaa agagttggta gctcttgatc
      961 cggcaaacaa accaccgctg gtagcggtgg tttttttgtt tgcaagcagc agattacgcg
     1021 cagaaaaaaa ggatctcaag aagatccttt gatcttttct acggggtctg acgctcagtg
     1081 gaacgaaaac tcacgttaag ggattttggt catgagatta tcaaaaagga tcttcaccta
     1141 gatcctttta aattaaaaat gaagttttaa atcaatctaa agtatatatg agtaaacttg
     1201 gtctgacagt taccaatgct taatcagtga ggcacctatc tcagcgatct gtctatttcg
     1261 ttcatccata gttgcctgac tccccgtcgt gtagataact acgatacggg agggcttacc
     1321 atctggcccc agtgctgcaa tgataccgcg cgacccacgc tcaccggctc cagatttatc
     1381 agcaataaac cagccagccg gaagggccga gcgcagaagt ggtcctgcaa ctttatccgc
     1441 ctccatccag tctattaatt gttgccggga agctagagta agtagttcgc cagttaatag
     1501 tttgcgcaac gttgttgcca ttgctacagg catcgtggtg tcacgctcgt cgtttggtat
     1561 ggcttcattc agctccggtt cccaacgatc aaggcgagtt acatgatccc ccatgttgtg
     1621 caaaaaagcg gttagctcct tcggtcctcc gatcgttgtc agaagtaagt tggccgcagt
     1681 gttatcactc atggttatgg cagcactgca taattctctt actgtcatgc catccgtaag
     1741 atgcttttct gtgactggtg agtactcaac caagtcattc tgagaatagt gtatgcggcg
     1801 accgagttgc tcttgcccgg cgtcaatacg ggataatacc gcgccacata gcagaacttt
     1861 aaaagtgctc atcattggaa aacgttcttc ggggcgaaaa ctctcaagga tcttaccgct
     1921 gttgagatcc agttcgatat aacccactcg tgcacccaac tgatcttcag catcttttac
     1981 tttcaccagc gtttctgggt gagcaaaaac aggaaggcaa aatgccgcaa aaaagggaat
     2041 aagggcgaca cggaaatgtt gaatactcat actcttcctt tttcaatatt attgaagcat
     2101 ttatcagggt tattgtctca tgagcggata catatttgaa tgtatttaga aaaataaaca
     2161 aataggggtt ccgcgcacat ttccccgaaa agtgccacct gacgtctaag aaaccattat
     2221 tatcatgaca ttaacctata aaaataggcg tatcacgagg cagaatttca gataaaaaaa
     2281 atccttagct ttcgctaagg atgatttctg gaattcgcgg ccgcttctag agTTGACGGC
     2341 TAGCTCAGTC CTAGGTACAG TGCTAGCTGG AATTGTGAGC GGATAACAAT TGAGGACGGC
     2401 ATGCGTGGGC GATGTGTGGA AAATGCGTGG GCGATGTGTG GAAAATGCGT GGGCGATGTG
     2461 TGGAAAATGC GTGGGCGATG TGTGGAAAAA AAAAAACGTG GCGCCCGAAC AGGGACGGAT
     2521 AGCTCAGTCG GTAGAGCATC AGACTTTTAA TCTGAGGGTC CAGGGTTCAA GTCCCTGTTC
     2581 GGGCGCCACG TTTTTTTTat tagcagaaag tcaaaagcct ccgaccggag gcttttgact
     2641 aaaacttccc ttggggttat cattgggtac tagagTTGAC GGCTAGCTCA GTCCTAGGTA
     2701 CAGTGCTAGC TGGAATTGTG AGCGGATAAC AATTTTTCCA CACATCGCCC ACGCATTTTC
     2761 CACACATCGC CCACGCATTT TCCACACATC GCCCACGCAT TTTCCACACA TCGCCCACGC
     2821 ATGCCGTCCT CAAAA
//`
        
sequences.seq_Resveratrol_4x_r_oligo_Complement_Duplex = {};
sequences.seq_Resveratrol_4x_r_oligo_Complement_Duplex.varName = "seq_Resveratrol_4x_r_oligo_Complement_Duplex";
sequences.seq_Resveratrol_4x_r_oligo_Complement_Duplex.name = "Resveratrol 4x r_oligo Complement Duplex";
sequences.seq_Resveratrol_4x_r_oligo_Complement_Duplex.seqType = "linear";
sequences.seq_Resveratrol_4x_r_oligo_Complement_Duplex.comp = true;
sequences.seq_Resveratrol_4x_r_oligo_Complement_Duplex.data = `LOCUS       Resveratrol_4x_r_oligo_C 155 bp ds-DNA     linear       25-JUN-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     misc_binding    19..41
                     /label="LacO"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_feature    complement(42..50)
                     /label="PBSII Site"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     misc_feature    complement(53..61)
                     /label="Zif268"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     misc_feature    complement(64..72)
                     /label="PBSII Site"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     misc_feature    complement(75..83)
                     /label="Zif268"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     misc_feature    complement(86..94)
                     /label="PBSII Site"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     misc_feature    complement(97..105)
                     /label="Zif268"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     misc_feature    complement(108..116)
                     /label="PBSII Site"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     misc_feature    complement(119..127)
                     /label="Zif268"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     Zinc Finger Site complement(130..138)
                     /label="ZFc Site"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
ORIGIN
        1 GAACAGGGTC TCCTAGCTGG AATTGTGAGC GGATAACAAT TTTTCCACAC ATCGCCCACG
       61 CATTTTCCAC ACATCGCCCA CGCATTTTCC ACACATCGCC CACGCATTTT CCACACATCG
      121 CCCACGCATG CCGTCCTCAA AACGAGACCA ACCTG
//`
        
sequences.seq_Resveratrol_4x_r_oligo_Duplex_109128_REV_1 = {};
sequences.seq_Resveratrol_4x_r_oligo_Duplex_109128_REV_1.varName = "seq_Resveratrol_4x_r_oligo_Duplex_109128_REV_1";
sequences.seq_Resveratrol_4x_r_oligo_Duplex_109128_REV_1.name = "Resveratrol 4x r_oligo Duplex 109-128 REV 1";
sequences.seq_Resveratrol_4x_r_oligo_Duplex_109128_REV_1.seqType = "linear";
sequences.seq_Resveratrol_4x_r_oligo_Duplex_109128_REV_1.comp = false;
sequences.seq_Resveratrol_4x_r_oligo_Duplex_109128_REV_1.data = `LOCUS       Resveratrol_4x_r_oligo_Du 20 bp ds-DNA     linear       07-JUL-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 TCGCCCACGC ATTTTCCACA
//`
        
sequences.seq_Resveratrol_4x_r_oligo_Duplex_3958_FWD_1 = {};
sequences.seq_Resveratrol_4x_r_oligo_Duplex_3958_FWD_1.varName = "seq_Resveratrol_4x_r_oligo_Duplex_3958_FWD_1";
sequences.seq_Resveratrol_4x_r_oligo_Duplex_3958_FWD_1.name = "Resveratrol 4x r_oligo Duplex 39-58 FWD 1";
sequences.seq_Resveratrol_4x_r_oligo_Duplex_3958_FWD_1.seqType = "linear";
sequences.seq_Resveratrol_4x_r_oligo_Duplex_3958_FWD_1.comp = false;
sequences.seq_Resveratrol_4x_r_oligo_Duplex_3958_FWD_1.data = `LOCUS       Resveratrol_4x_r_oligo_Du 20 bp ds-DNA     linear       07-JUL-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 ATTGAGGACG GCATGCGTGG
//`
        
sequences.seq_Resveratrol_4x_r_oligo_Duplex = {};
sequences.seq_Resveratrol_4x_r_oligo_Duplex.varName = "seq_Resveratrol_4x_r_oligo_Duplex";
sequences.seq_Resveratrol_4x_r_oligo_Duplex.name = "Resveratrol 4x r_oligo Duplex";
sequences.seq_Resveratrol_4x_r_oligo_Duplex.seqType = "linear";
sequences.seq_Resveratrol_4x_r_oligo_Duplex.comp = true;
sequences.seq_Resveratrol_4x_r_oligo_Duplex.data = `LOCUS       Resveratrol_4x_r_oligo_D 155 bp ds-DNA     linear       07-JUL-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     misc_binding    19..41
                     /label="LacO"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     Zinc Finger Site 42..50
                     /label="ZFc Site"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     misc_feature    53..61
                     /label="Zif268"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     misc_feature    64..72
                     /label="PBSII Site"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     misc_feature    75..83
                     /label="Zif268"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     misc_feature    86..94
                     /label="PBSII Site"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     misc_feature    97..105
                     /label="Zif268"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     misc_feature    108..116
                     /label="PBSII Site"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     misc_feature    119..127
                     /label="Zif268"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     misc_feature    130..138
                     /label="PBSII Site"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     primer          39..58
                     /label="Resveratrol 4x r_oligo Duplex 39-58 FWD 1"
                     /note="sequence: ATTGAGGACGGCATGCGTGG"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     primer          complement(109..128)
                     /label="Resveratrol 4x r_oligo Duplex 109-128 REV 1"
                     /note="sequence: TCGCCCACGCATTTTCCACA"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
ORIGIN
        1 GAACAGGGTC TCCTAGCTGG AATTGTGAGC GGATAACAAT TGAGGACGGC ATGCGTGGGC
       61 GATGTGTGGA AAATGCGTGG GCGATGTGTG GAAAATGCGT GGGCGATGTG TGGAAAATGC
      121 GTGGGCGATG TGTGGAAAAA AACGAGACCA ACCTG
//`
        
sequences.seq_r_oligo_Flipper = {};
sequences.seq_r_oligo_Flipper.varName = "seq_r_oligo_Flipper";
sequences.seq_r_oligo_Flipper.name = "r_oligo Flipper";
sequences.seq_r_oligo_Flipper.seqType = "both";
sequences.seq_r_oligo_Flipper.comp = true;
sequences.seq_r_oligo_Flipper.data = `LOCUS       r_oligo_Flipper         3220 bp ds-DNA     circular     02-SEP-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     Biobricking         2111..2132
                         /label="BioBrick Prefix "
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     primer_bind         2043..2061
                         /label="pBRforEco"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     BioBrick            2964..3009
                         /label="BBa_B0011"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     BioBrick            2915..2955
                         /label="BBa_B0012"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
     misc_feature        1151..1151
                         /label="Point Mutation"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     BioBrick            2915..3009
                         /label="BBa_B0014 (double terminator)"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     gBlock              2111..3072
                         /label="gBlock A"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     Scar                2956..2963
                         /label="BioBrick Scar"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     CDS                 complement(1010..1870)
                         /label="AmpR"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     BioBrick            2203..2908
                         /label="BBa_E1010 (RFP)"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     stem_loop           2976..2998
                         /label="stem loop"
                         /ApEinfo_revcolor=#ff9ccd
                         /ApEinfo_fwdcolor=#ff9ccd
     primer_bind         1633..1652
                         /label="Amp-R"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     primer_bind         complement(331..350)
                         /label="pBR322ori-F"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     HIV-RT Binding Site 3017..3126
                         /label="C* HTBS"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     terminator          2065..2108
                         /label="bacterial terminator"
                         /ApEinfo_revcolor=#ffef86
                         /ApEinfo_fwdcolor=#ffef86
     stop                2878..2883
                         /label="double stop codon"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     primer_bind         complement(80..97)
                         /label="L4440"
                         /ApEinfo_revcolor=#75c6a9
                         /ApEinfo_fwdcolor=#75c6a9
     Backbone            join(3217..3220,1..2110)
                         /label="Mutated pSB1A3"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
     gBlock              3073..3216
                         /label="gBlock B"
                         /ApEinfo_revcolor=#85dae9
                         /ApEinfo_fwdcolor=#85dae9
     Scar                2175..2182
                         /label="BioBrick Scar"
                         /ApEinfo_revcolor=#9eafd2
                         /ApEinfo_fwdcolor=#9eafd2
     rep_origin          complement(251..839)
                         /label="ori"
                         /ApEinfo_revcolor=#b1ff67
                         /ApEinfo_fwdcolor=#b1ff67
     rbs                 2190..2194
                         /label="strong RBS"
                         /ApEinfo_revcolor=#c7b0e3
                         /ApEinfo_fwdcolor=#c7b0e3
     protein             2203..2908
                         /label="RFP"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     Terminator          3127..3195
                         /label="B0054"
                         /ApEinfo_revcolor=#c6c9d1
                         /ApEinfo_fwdcolor=#c6c9d1
     Biobricking         3196..3216
                         /label="BioBrick Suffix"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     stop                2887..2892
                         /label="double stop codon"
                         /ApEinfo_revcolor=#75c6a9
                         /ApEinfo_fwdcolor=#75c6a9
     promoter            complement(1871..1975)
                         /label="AmpR promoter"
                         /ApEinfo_revcolor=#faac61
                         /ApEinfo_fwdcolor=#faac61
     start               2203..2205
                         /label="start codon"
                         /ApEinfo_revcolor=#84b0dc
                         /ApEinfo_fwdcolor=#84b0dc
     BioBrick            2183..2197
                         /label="BBa_B0030 (strong RBS)"
                         /ApEinfo_revcolor=#b4abac
                         /ApEinfo_fwdcolor=#b4abac
     misc_feature        2183..3009
                         /label="From BBa_K3114015"
                         /ApEinfo_revcolor=#b7e6d7
                         /ApEinfo_fwdcolor=#b7e6d7
     misc_feature        2133..2167
                         /label="BBa_J23105"
                         /ApEinfo_revcolor=#f58a5e
                         /ApEinfo_fwdcolor=#f58a5e
ORIGIN
        1 cggcaaaaaa gggcaaggtg tcaccaccct gccctttttc tttaaaaccg aaaagattac
       61 ttcgcgttat gcaggcttcc tcgctcactg actcgctgcg ctcggtcgtt cggctgcggc
      121 gagcggtatc agctcactca aaggcggtaa tacggttatc cacagaatca ggggataacg
      181 caggaaagaa catgtgagca aaaggccagc aaaaggccag gaaccgtaaa aaggccgcgt
      241 tgctggcgtt tttccacagg ctccgccccc ctgacgagca tcacaaaaat cgacgctcaa
      301 gtcagaggtg gcgaaacccg acaggactat aaagatacca ggcgtttccc cctggaagct
      361 ccctcgtgcg ctctcctgtt ccgaccctgc cgcttaccgg atacctgtcc gcctttctcc
      421 cttcgggaag cgtggcgctt tctcatagct cacgctgtag gtatctcagt tcggtgtagg
      481 tcgttcgctc caagctgggc tgtgtgcacg aaccccccgt tcagcccgac cgctgcgcct
      541 tatccggtaa ctatcgtctt gagtccaacc cggtaagaca cgacttatcg ccactggcag
      601 cagccactgg taacaggatt agcagagcga ggtatgtagg cggtgctaca gagttcttga
      661 agtggtggcc taactacggc tacactagaa gaacagtatt tggtatctgc gctctgctga
      721 agccagttac cttcggaaaa agagttggta gctcttgatc cggcaaacaa accaccgctg
      781 gtagcggtgg tttttttgtt tgcaagcagc agattacgcg cagaaaaaaa ggatctcaag
      841 aagatccttt gatcttttct acggggtctg acgctcagtg gaacgaaaac tcacgttaag
      901 ggattttggt catgagatta tcaaaaagga tcttcaccta gatcctttta aattaaaaat
      961 gaagttttaa atcaatctaa agtatatatg agtaaacttg gtctgacagt taccaatgct
     1021 taatcagtga ggcacctatc tcagcgatct gtctatttcg ttcatccata gttgcctgac
     1081 tccccgtcgt gtagataact acgatacggg agggcttacc atctggcccc agtgctgcaa
     1141 tgataccgcg cgacccacgc tcaccggctc cagatttatc agcaataaac cagccagccg
     1201 gaagggccga gcgcagaagt ggtcctgcaa ctttatccgc ctccatccag tctattaatt
     1261 gttgccggga agctagagta agtagttcgc cagttaatag tttgcgcaac gttgttgcca
     1321 ttgctacagg catcgtggtg tcacgctcgt cgtttggtat ggcttcattc agctccggtt
     1381 cccaacgatc aaggcgagtt acatgatccc ccatgttgtg caaaaaagcg gttagctcct
     1441 tcggtcctcc gatcgttgtc agaagtaagt tggccgcagt gttatcactc atggttatgg
     1501 cagcactgca taattctctt actgtcatgc catccgtaag atgcttttct gtgactggtg
     1561 agtactcaac caagtcattc tgagaatagt gtatgcggcg accgagttgc tcttgcccgg
     1621 cgtcaatacg ggataatacc gcgccacata gcagaacttt aaaagtgctc atcattggaa
     1681 aacgttcttc ggggcgaaaa ctctcaagga tcttaccgct gttgagatcc agttcgatat
     1741 aacccactcg tgcacccaac tgatcttcag catcttttac tttcaccagc gtttctgggt
     1801 gagcaaaaac aggaaggcaa aatgccgcaa aaaagggaat aagggcgaca cggaaatgtt
     1861 gaatactcat actcttcctt tttcaatatt attgaagcat ttatcagggt tattgtctca
     1921 tgagcggata catatttgaa tgtatttaga aaaataaaca aataggggtt ccgcgcacat
     1981 ttccccgaaa agtgccacct gacgtctaag aaaccattat tatcatgaca ttaacctata
     2041 aaaataggcg tatcacgagg cagaatttca gataaaaaaa atccttagct ttcgctaagg
     2101 atgatttctg gaattcgcgg ccgcttctag agtttacggc tagctcagtc ctaggtacta
     2161 tgctagcCGA GACCtactag agattaaaga ggagaaatac taatggcttc ctccgaagac
     2221 gttatcaaag agttcatgcg tttcaaagtt cgtatggaag gttccgttaa cggtcacgag
     2281 ttcgaaatcg aaggtgaagg tgaaggtcgt ccgtacgaag gtacccagac cgctaaactg
     2341 aaagttacca aaggtggtcc gctgccgttc gcttgggaca tcctgtcccc gcagttccag
     2401 tacggttcca aagcttacgt taaacacccg gctgacatcc cggactacct gaaactgtcc
     2461 ttcccggaag gtttcaaatg ggaacgtgtt atgaacttcg aagacggtgg tgttgttacc
     2521 gttacccagg actcctccct gcaagacggt gagttcatct acaaagttaa actgcgtggt
     2581 accaacttcc cgtccgacgg tccggttatg cagaaaaaaa ccatgggttg ggaagcttcc
     2641 accgaacgta tgtacccgga agacggtgct ctgaaaggtg aaatcaaaat gcgtctgaaa
     2701 ctgaaagacg gtggtcacta cgacgctgaa gttaaaacca cctacatggc taaaaaaccg
     2761 gttcagctgc cgggtgctta caaaaccgac atcaaactgg acatcacctc ccacaacgaa
     2821 gactacacca tcgttgaaca gtacgaacgt gctgaaggtc gtcactccac cggtgcttaa
     2881 taacgctgat agtgctagtg tagatcgcta ataatcacac tggctcacct tcgggtgggc
     2941 ctttctgcgt ttatatacta gagagagaat ataaaaagcc agattattaa tccggctttt
     3001 ttattatttG GTCTCGAAAA AAAACGTGGC GCCCGAACAG GGACGGATAG CTCAGTCGGT
     3061 AGAGCATCAG ACTTTTAATC TGAGGGTCCA GGGTTCAAGT CCCTGTTCGG GCGCCACGTT
     3121 TTTTTTatta gcagaaagtc aaaagcctcc gaccggaggc ttttgactaa aacttccctt
     3181 ggggttatca ttgggtacta gtagcggccg ctgcagagtc
//`
        
sequences.seq_SapI_FWD_Primer = {};
sequences.seq_SapI_FWD_Primer.varName = "seq_SapI_FWD_Primer";
sequences.seq_SapI_FWD_Primer.name = "SapI FWD Primer";
sequences.seq_SapI_FWD_Primer.seqType = "linear";
sequences.seq_SapI_FWD_Primer.comp = false;
sequences.seq_SapI_FWD_Primer.data = `LOCUS       SapI_FWD_Primer           32 bp ds-DNA     linear       25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 AAAGCTCTTC AGGAagtccg gcaaaaaagg gc
//`
        
sequences.seq_SapI_Rev_Primer = {};
sequences.seq_SapI_Rev_Primer.varName = "seq_SapI_Rev_Primer";
sequences.seq_SapI_Rev_Primer.name = "SapI Rev Primer";
sequences.seq_SapI_Rev_Primer.seqType = "linear";
sequences.seq_SapI_Rev_Primer.comp = false;
sequences.seq_SapI_Rev_Primer.data = `LOCUS       SapI_Rev_Primer           37 bp ds-DNA     linear       25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
ORIGIN
        1 CCCGCTCTTC AGTGcagaaa tcatccttag cgaaagc
//`
        
sequences.seq_STS_intro_gblock = {};
sequences.seq_STS_intro_gblock.varName = "seq_STS_intro_gblock";
sequences.seq_STS_intro_gblock.name = "STS intro gblock";
sequences.seq_STS_intro_gblock.seqType = "linear";
sequences.seq_STS_intro_gblock.comp = true;
sequences.seq_STS_intro_gblock.data = `LOCUS       STS_intro_gblock         474 bp ds-DNA     linear       25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     misc_feature    40..74
                     /label="BBa_J23111"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     misc_feature    123..431
                     /label="PBSII"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     misc_feature    99..112
                     /label="BBa_J61101"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     Biobricking     18..39
                     /label="BioBrick Prefix "
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_binding    75..98
                     /label="LacO"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_feature    432..461
                     /label="Spacer"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     primer          18..41
                     /label="forward Prefix-Promoter-PBS2-sapI primer"
                     /note="sequence: AAAGCTCTTCACACgaattcgcggccgcttctagagtt"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     primer          complement(439..461)
                     /label="reverse Prefix-Promoter-PBS2-sapI primer"
                     /note="sequence: AAAGCTCTTCAACTactacctccacttccacctccac"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
ORIGIN
        1 ACCATCGGTC TCACGTTgaa ttcgcggccg cttctagagt tgacggctag ctcagtccta
       61 ggtatagtgc tagcTGGAAT TGTGAGCGGA TAACAATTGA AAGACAGGAC CCtaaataca
      121 tgATGCATCA CCATCACCAT CATCCAGGCG AGAAACCGTA CGCCTGCCCC GAATGCGGTA
      181 AATCATTTAG TCAGCGGGCG AACTTACGCG CACACCAGCG AACCCATACC GGAGAAAAAC
      241 CGTATAAATG TCCGGAATGT GGTAAAAGCT TTAGCCGTTC GGATCATCTG ACGACTCACC
      301 AACGCACACA CACCGGGGAA AAGCCGTATA AATGCCCTGA GTGTGGTAAG TCGTTCTCCC
      361 GTTCTGACGT TCTGGTGCGC CATCAGCGTA CGCATACTGG TGGCGGGAGC GGCGGCGGAA
      421 GTGGTGGCTC Cggtggaagt ggaggtggaa gtggaggtag tAGAGACCTC CTTT
//`
        
sequences.seq_STS_outro_gblock = {};
sequences.seq_STS_outro_gblock.varName = "seq_STS_outro_gblock";
sequences.seq_STS_outro_gblock.name = "STS outro gblock";
sequences.seq_STS_outro_gblock.seqType = "linear";
sequences.seq_STS_outro_gblock.comp = true;
sequences.seq_STS_outro_gblock.data = `LOCUS       STS_outro_gblock         129 bp ds-DNA     linear       25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     stem_loop       27..78
                     /label="T0 terminator"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     Biobricking     79..99
                     /label="BioBrick Suffix"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
ORIGIN
        1 gtcaagctgc catgacgagG GTCTCAttgt tcagaacgct cggtcttgca caccgggcgt
       61 tttttctttg tgagtccata ctagtagcgg ccgctgcagT GCCAGAGACC tccaagagag
      121 tgaagggat
//`
        
sequences.seq_ultramer_duplex_2 = {};
sequences.seq_ultramer_duplex_2.varName = "seq_ultramer_duplex_2";
sequences.seq_ultramer_duplex_2.name = "ultramer duplex 2";
sequences.seq_ultramer_duplex_2.seqType = "linear";
sequences.seq_ultramer_duplex_2.comp = true;
sequences.seq_ultramer_duplex_2.data = `LOCUS       ultramer_duplex_2        215 bp ds-DNA     linear       06-SEP-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     misc_binding    54..76
                     /label="LacO"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     RBS             87..98
                     /label="strong bacterial ribosome binding site (Elowitz and Leibler, 2000)"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     CDS             111..146
                     /label="6xHN"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
     misc_feature    18..52
                     /label="'BBa_J23109'"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
     CDS             153..167
                     /label="enterokinase site"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
ORIGIN
        1 TTATCCCGTC TCATGCGttt acagctagct cagtcctagg gactgtgcta gcTGGAATTG
       61 TGAGCGGATA ACAATTcgtt gcaactaaag aggagaaagg taccatgggt cataatcata
      121 atcataatca taatcataat cacaacggtg gagatgacga tgacaagggt ggtcgacaag
      181 cttggatccc agcaggccTT GGTGAGACGG TGATT
//`
        
sequences.seq_Updated_Assembly_in_Amp = {};
sequences.seq_Updated_Assembly_in_Amp.varName = "seq_Updated_Assembly_in_Amp";
sequences.seq_Updated_Assembly_in_Amp.name = "Updated Assembly in Amp";
sequences.seq_Updated_Assembly_in_Amp.seqType = "both";
sequences.seq_Updated_Assembly_in_Amp.comp = true;
sequences.seq_Updated_Assembly_in_Amp.data = `LOCUS       Updated_Assembly_in_Amp 7888 bp ds-DNA     circular     24-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     None            5477..5511
                     /label="'BBa_J23109'"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
     Scar            5415..5422
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     terminator      2065..2108
                     /label="bacterial terminator"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     misc_feature    1151..1151
                     /label="Point Mutation"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     Scar            7678..7685
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     terminator      7777..7863
                     /label="rrnB T1 terminator"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     misc_binding    5513..5535
                     /label="LacO"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     primer_bind     1633..1652
                     /label="Amp-R"
                     /ApEinfo_revcolor=#b4abac
                     /ApEinfo_fwdcolor=#b4abac
     misc_feature    2283..3968
                     /label="HIVRT p66"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     primer_bind     2043..2061
                     /label="pBRforEco"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     CDS             5570..5605
                     /label="6xHN"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
     misc_binding    2169..2191
                     /label="LacO"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     RBS             3977..3988
                     /label="strong bacterial ribosome binding site (Elowitz and Leibler, 2000)"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     CDS             complement(1010..1870)
                     /label="AmpR"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     Biobricking     7864..7884
                     /label="BioBrick Suffix"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     Biobricking     2111..2132
                     /label="BioBrick Prefix "
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     RBS             5546..5557
                     /label="strong bacterial ribosome binding site (Elowitz and Leibler, 2000)"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     RBS             2265..2276
                     /label="strong bacterial ribosome binding site (Elowitz and Leibler, 2000)"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     terminator      7606..7677
                     /label="rrnB T1 terminator"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     misc_feature    3995..5320
                     /label="HIVRT P51"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     terminator      7693..7720
                     /label="T7Te terminator"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     rep_origin      complement(251..839)
                     /label="ori"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     Scar            7590..7597
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     misc_feature    2133..2167
                     /label="BBa_J23109'"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
     misc_feature    5564..7564
                     /label="MLRT ORF"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     misc_feature    2207..2256
                     /label="sTRSV HHRz"
                     /ApEinfo_revcolor=#f8d3a9
                     /ApEinfo_fwdcolor=#f8d3a9
     primer_bind     complement(331..350)
                     /label="pBR322ori-F"
                     /ApEinfo_revcolor=#b4abac
                     /ApEinfo_fwdcolor=#b4abac
     primer_bind     complement(80..97)
                     /label="L4440"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     terminator      5343..5414
                     /label="rrnB T1 terminator"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     terminator      5430..5457
                     /label="T7Te terminator"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     promoter        complement(1871..1975)
                     /label="AmpR promoter"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     Scar            5327..5334
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     misc_feature    5612..5626
                     /label="Enterokinase Site"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
ORIGIN
        1 cggcaaaaaa gggcaaggtg tcaccaccct gccctttttc tttaaaaccg aaaagattac
       61 ttcgcgttat gcaggcttcc tcgctcactg actcgctgcg ctcggtcgtt cggctgcggc
      121 gagcggtatc agctcactca aaggcggtaa tacggttatc cacagaatca ggggataacg
      181 caggaaagaa catgtgagca aaaggccagc aaaaggccag gaaccgtaaa aaggccgcgt
      241 tgctggcgtt tttccacagg ctccgccccc ctgacgagca tcacaaaaat cgacgctcaa
      301 gtcagaggtg gcgaaacccg acaggactat aaagatacca ggcgtttccc cctggaagct
      361 ccctcgtgcg ctctcctgtt ccgaccctgc cgcttaccgg atacctgtcc gcctttctcc
      421 cttcgggaag cgtggcgctt tctcatagct cacgctgtag gtatctcagt tcggtgtagg
      481 tcgttcgctc caagctgggc tgtgtgcacg aaccccccgt tcagcccgac cgctgcgcct
      541 tatccggtaa ctatcgtctt gagtccaacc cggtaagaca cgacttatcg ccactggcag
      601 cagccactgg taacaggatt agcagagcga ggtatgtagg cggtgctaca gagttcttga
      661 agtggtggcc taactacggc tacactagaa gaacagtatt tggtatctgc gctctgctga
      721 agccagttac cttcggaaaa agagttggta gctcttgatc cggcaaacaa accaccgctg
      781 gtagcggtgg tttttttgtt tgcaagcagc agattacgcg cagaaaaaaa ggatctcaag
      841 aagatccttt gatcttttct acggggtctg acgctcagtg gaacgaaaac tcacgttaag
      901 ggattttggt catgagatta tcaaaaagga tcttcaccta gatcctttta aattaaaaat
      961 gaagttttaa atcaatctaa agtatatatg agtaaacttg gtctgacagt taccaatgct
     1021 taatcagtga ggcacctatc tcagcgatct gtctatttcg ttcatccata gttgcctgac
     1081 tccccgtcgt gtagataact acgatacggg agggcttacc atctggcccc agtgctgcaa
     1141 tgataccgcg cgacccacgc tcaccggctc cagatttatc agcaataaac cagccagccg
     1201 gaagggccga gcgcagaagt ggtcctgcaa ctttatccgc ctccatccag tctattaatt
     1261 gttgccggga agctagagta agtagttcgc cagttaatag tttgcgcaac gttgttgcca
     1321 ttgctacagg catcgtggtg tcacgctcgt cgtttggtat ggcttcattc agctccggtt
     1381 cccaacgatc aaggcgagtt acatgatccc ccatgttgtg caaaaaagcg gttagctcct
     1441 tcggtcctcc gatcgttgtc agaagtaagt tggccgcagt gttatcactc atggttatgg
     1501 cagcactgca taattctctt actgtcatgc catccgtaag atgcttttct gtgactggtg
     1561 agtactcaac caagtcattc tgagaatagt gtatgcggcg accgagttgc tcttgcccgg
     1621 cgtcaatacg ggataatacc gcgccacata gcagaacttt aaaagtgctc atcattggaa
     1681 aacgttcttc ggggcgaaaa ctctcaagga tcttaccgct gttgagatcc agttcgatat
     1741 aacccactcg tgcacccaac tgatcttcag catcttttac tttcaccagc gtttctgggt
     1801 gagcaaaaac aggaaggcaa aatgccgcaa aaaagggaat aagggcgaca cggaaatgtt
     1861 gaatactcat actcttcctt tttcaatatt attgaagcat ttatcagggt tattgtctca
     1921 tgagcggata catatttgaa tgtatttaga aaaataaaca aataggggtt ccgcgcacat
     1981 ttccccgaaa agtgccacct gacgtctaag aaaccattat tatcatgaca ttaacctata
     2041 aaaataggcg tatcacgagg cagaatttca gataaaaaaa atccttagct ttcgctaagg
     2101 atgatttctg GAATTCGCGG CCGCTTCTAG AGtttacagc tagctcagtc ctagggactg
     2161 tgctagcTGG AATTGTGAGC GGATAACAAT Tctatggact atgtttCTGT CACCGGATGT
     2221 GCTTTCCGGT CTGATGAGTC CGTGAGGACG AAACAGtacc agtgaaagag gagaaaGGAT
     2281 agatgccgat tagcccgatt gaaaccgttc cggttaaact gaaaccgggt atggatggtc
     2341 cgaaagttaa acagtggcct ctgaccgaag aaaaaatcaa agcactggtt gaaatctgca
     2401 ccgagatgga aaaagaaggc aaaattagca aaatcggtcc ggaaaatccg tataatacac
     2461 cggtttttgc cattaagaaa aaagatagca ccaaatggcg caaactggtg gattttcgtg
     2521 aactgaataa acgcacccag gatttttggg aagttcagct gggtattccg catccggcag
     2581 gtctgaaaca gaaaaaaagc gttaccgttc tggatgttgg tgatgcatat tttagcgttc
     2641 cgctggataa agatttccgt aaatataccg catttaccat cccgagcatt aataacgaaa
     2701 caccgggtat tcgctatcag tataatgttc tgccgcaggg ttggaaaggt agtccggcaa
     2761 tttttcagtg tagcatgacc aaaattctgg aaccgtttcg taaacagaat ccggatattg
     2821 tgatctacca gtatatggat gatctgtatg ttggtagcga tctggaaatt ggtcagcatc
     2881 gtaccaaaat tgaagaactg cgtcagcatc tgctgcgttg gggttttacc acaccggata
     2941 aaaaacatca gaaagaaccg ccttttctgt ggatgggtta tgaactgcat ccggataaat
     3001 ggaccgttca gccgattgtt ctgccggaaa aagatagctg gaccgttaat gatattcaga
     3061 aactggtggg taaactgaat tgggcaagcc agatttatgc cggtattaaa gttcgtcagc
     3121 tgtgtaaact gctgcgtggc accaaagcac tgaccgaagt tgttccgctg acagaagaag
     3181 cagaactgga actggcagaa aatcgtgaaa ttctgaaaga accggttcac ggcgtttatt
     3241 atgatccgag caaagatctg attgccgaaa ttcagaaaca gggtcagggt cagtggacct
     3301 atcagattta tcaagaaccg tttaaaaacc tgaaaaccgg caaatatgca cgtatgaaag
     3361 gtgcacatac caacgatgtt aaacagctga ccgaagcagt tcagaaaatt gcaaccgaaa
     3421 gcattgtgat ttggggtaaa accccgaaat tcaaactgcc gattcagaaa gaaacctggg
     3481 aagcatggtg gaccgaatat tggcaggcaa cctggattcc ggaatgggaa tttgttaata
     3541 cccctccgct ggttaaactg tggtatcagc tggaaaaaga accgattatt ggtgccgaaa
     3601 ccttttatgt tgatggtgca gccaatcgtg aaaccaaact gggtaaagca ggttatgtta
     3661 ccgatcgtgg tcgtcagaaa gtggtgccgc tgaccgatac caccaatcag aaaaccgaac
     3721 tacaggcaat tcatctggca ctacaggata gcggtctgga agttaatatt gttaccgata
     3781 gccagtatgc cctgggtatt attcaggcac agccggataa aagcgaaagc gaactggtta
     3841 gccagattat tgaacagctg atcaaaaaag aaaaagtgta cctggcatgg gttccggcac
     3901 ataaaggtat tggtggtaat gaacaggttg atggtctggt tagcgcaggt attcgtaaag
     3961 ttctgtaata ttagtgaaag aggagaaata ctagatgccg attagcccga ttgaaaccgt
     4021 tccggttaaa ctgaaaccgg gtatggatgg tccgaaagtt aaacagtggc ctctgaccga
     4081 agaaaaaatc aaagcactgg ttgaaatctg caccgagatg gaaaaagaag gcaaaattag
     4141 caaaatcggt ccggaaaatc cgtataatac accggttttt gccattaaga aaaaagatag
     4201 caccaaatgg cgcaaactgg tggattttcg tgaactgaat aaacgcaccc aggatttttg
     4261 ggaagttcag ctgggtattc cgcatccggc aggtctgaaa cagaaaaaaa gcgttaccgt
     4321 tctggatgtt ggtgatgcat attttagcgt tccgctggat aaagatttcc gtaaatatac
     4381 cgcatttacc atcccgagca ttaataacga aacaccgggt attcgctatc agtataatgt
     4441 tctgccgcag ggttggaaag gtagtccggc aatttttcag tgtagcatga ccaaaattct
     4501 ggaaccgttt cgtaaacaga atccggatat tgtgatctac cagtatatgg atgatctgta
     4561 tgttggtagc gatctggaaa ttggtcagca tcgtaccaaa attgaagaac tgcgtcagca
     4621 tctgctgcgt tggggtttta ccacaccgga taaaaaacat cagaaagaac cgccttttct
     4681 gtggatgggt tatgaactgc atccggataa atggaccgtt cagccgattg ttctgccgga
     4741 aaaagatagc tggaccgtta atgatattca gaaactggtg ggtaaactga attgggcaag
     4801 ccagatttat gccggtatta aagttcgtca gctgtgtaaa ctgctgcgtg gcaccaaagc
     4861 actgaccgaa gttgttccgc tgacagaaga agcagaactg gaactggcag aaaatcgtga
     4921 aattctgaaa gaaccggttc acggcgttta ttatgatccg agcaaagatc tgattgccga
     4981 aattcagaaa cagggtcagg gtcagtggac ctatcagatt tatcaagaac cgtttaaaaa
     5041 cctgaaaacc ggcaaatatg cacgtatgaa aggtgcacat accaacgatg ttaaacagct
     5101 gaccgaagca gttcagaaaa ttgcaaccga aagcattgtg atttggggta aaaccccgaa
     5161 attcaaactg ccgattcaga aagaaacctg ggaagcatgg tggaccgaat attggcaggc
     5221 aacctggatt ccggaatggg aatttgttaa tacccctccg ctggttaaac tgtggtatca
     5281 gctggaaaaa gaaccgatta ttggtgccga aaccttttaa gatcgctact agagccaggc
     5341 atcaaataaa acgaaaggct cagtcgaaag actgggcctt tcgttttatc tgttgtttgt
     5401 cggtgaacgc tctctactag agtcacactg gctcaccttc gggtgggcct ttctgcgttt
     5461 atatactaga agcggcTTTA CAGCTAGCTC AGTCCTAGGG ACTGTGCTAG CTGGAATTGT
     5521 GAGCGGATAA CAATTCGTTG CAACTAAAGA GGAGAAAGGT ACCATGGGGC ATAATCACAA
     5581 CCACAATCAC AATCATAACC ACAATGGAGG TGACGATGAC GATAAGGGTG GCCGCCAGGC
     5641 CTGGATCCCA GCCGGCCCCA Aggcccgatc gatgggacca atggggcagc ccctgcaagt
     5701 gttgacccta aatatagaag atgagtatcg gctacatgag acctcaaaag agccagatgt
     5761 ttctctaggg tccacatggc tgtctgattt tcctcaggcc tgggcggaaa ccgggggcat
     5821 gggactggca gttcgccaag ctcctctgat catacctctg aaagcaacct ctacccccgt
     5881 gtccataaaa caatacccca tgtcacaaga agccagactg gggatcaagc cccacataca
     5941 gagactgttg gaccagggaa tactggtacc ctgccagtcc ccctggaaca cgcccctgct
     6001 acccgttaag aaaccaggga ctaatgatta taggcctgtc caggatctga gagaagtcaa
     6061 caagcgggtg gaagacatcc accccaccgt gcccaaccct tacaacctct tgagcgggct
     6121 cccaccgtcc caccagtggt acactgtgct tgatttaaag gatgcctttt tctgcctgag
     6181 actccacccc accagtcagc ctctcttcgc ctttgagtgg agagatccag agatgggaat
     6241 ctcaggacaa ttgacctgga ccagactccc acagggtttc aaaaacagtc ccaccctgtt
     6301 tgatgaggca ctgcacagag acctagcaga cttccggatc cagcacccag acttgatcct
     6361 gctacagtac gtggatgact tactgctggc cgccacttct gagctagact gccaacaagg
     6421 tactcgggcc ctgttacaaa ccctagggaa cctcgggtat cgggcctcgg ccaagaaagc
     6481 ccaaatttgc cagaaacagg tcaagtatct ggggtatctt ctaaaagagg gtcagagatg
     6541 gctgactgag gccagaaaag agactgtgat ggggcagcct actccgaaga cccctcgaca
     6601 actaagggag ttcctaggga cggcaggctt ctgtcgcctc tggatccctg ggtttgcaga
     6661 aatggcagcc cccttgtacc ctctcaccaa aacggggact ctgtttaatt ggggcccaga
     6721 ccaacaaaag gcctatcaag aaatcaagca agctcttcta actgccccag ccctggggtt
     6781 gccagatttg actaagccct ttgaactctt tgtcgacgag aagcagggct acgccaaagg
     6841 tgtcctaacg caaaaactgg gaccttggcg tcggccggtg gcctacctgt ccaaaaagct
     6901 agacccagta gcagctgggt ggcccccttg cctacggatg gtagcagcca ttgccgtact
     6961 gacaaaggat gcaggcaagc taaccatggg acagccactt gtcattctgg ccccccatgc
     7021 agtagaggca cttgtcaaac aaccccccga ccgctggctt tccaacgccc ggatgactca
     7081 ctatcaggcc ttgcttttgg acacggaccg ggtccagttc ggaccggtgg tagccctgaa
     7141 cccggctacg ctgctcccac tgcctgagga agggctgcaa cacaactgcc ttgatatcct
     7201 ggccgaagcc cacggaaccc gacccgacct aacggaccag ccgctcccag acgccgacca
     7261 cacctggtac acggatggaa gcagtctctt acaagaggga cagcgtaagg cgggagctgc
     7321 ggtgaccacc gagaccgagg taatctgggc taaagccctg ccagccggga catccgctca
     7381 gcgggctgaa ctgatagcac tcacccaggc cctaaagatg gcagaaggta agaagctaaa
     7441 tgtttatact gatagccgtt atgcttttgc tactgcccat atccatggag aaatatacag
     7501 aaggcgtggg ttgctcacat cagaaggcaa agagatcaaa aataaagacg agatctttaa
     7561 atgacgctga tagtgctagt gtagatcgct actagagcca ggcatcaaat aaaacgaaag
     7621 gctcagtcga aagactgggc ctttcgtttt atctgttgtt tgtcggtgaa cgctctctac
     7681 tagagtcaca ctggctcacc ttcgggtggg cctttctgcg tttatatata ataaatgtcc
     7741 agaAGGGcct tcaggcatgc aagcctctgg aggcatcaaa taaaacgaaa ggctcagtcg
     7801 aaagactggg cctttcgttt tatctgttgt ttgtcggtga acgctctcct gagtaggaca
     7861 aatTACTAGT AGCGGCCGCT GCAGAGTC
//`
        
sequences.seq_Updated_Assembly_in_Kan = {};
sequences.seq_Updated_Assembly_in_Kan.varName = "seq_Updated_Assembly_in_Kan";
sequences.seq_Updated_Assembly_in_Kan.name = "Updated Assembly in Kan";
sequences.seq_Updated_Assembly_in_Kan.seqType = "both";
sequences.seq_Updated_Assembly_in_Kan.comp = true;
sequences.seq_Updated_Assembly_in_Kan.data = `LOCUS       Updated_Assembly_in_Kan 7935 bp ds-DNA     circular     24-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     terminator      7746..7789
                     /label="bacterial terminator"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
     misc_feature    1741..3066
                     /label="HIVRT P51"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     misc_feature    5626..5630
                     /label="BioBrick suffix"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     RBS             11..22
                     /label="strong bacterial ribosome binding site (Elowitz and Leibler, 2000)"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     misc_feature    3358..3372
                     /label="Enterokinase Site"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_feature    7792..7792
                     /label="BioBrick prefix"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     Biobricking     7793..7813
                     /label="BioBrick Prefix "
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     CDS             complement(6704..7519)
                     /label="KanR"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     Scar            3073..3080
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     primer_bind     7427..7446
                     /label="Kan-R"
                     /ApEinfo_revcolor=#c6c9d1
                     /ApEinfo_fwdcolor=#c6c9d1
     misc_binding    7850..7872
                     /label="LacO"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     misc_feature    29..1714
                     /label="HIVRT p66"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     Scar            5336..5343
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     terminator      3176..3203
                     /label="T7Te terminator"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     terminator      3089..3160
                     /label="rrnB T1 terminator"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     CDS             3316..3351
                     /label="6xHN"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
     source          5626..7792
                     /label="source"
                     /ApEinfo_revcolor=#b4abac
                     /ApEinfo_fwdcolor=#b4abac
     terminator      5439..5466
                     /label="T7Te terminator"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     misc_feature    7814..7848
                     /label="BBa_J23109'"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
     misc_feature    join(7888..7935,1..2)
                     /label="sTRSV HHRz"
                     /ApEinfo_revcolor=#f8d3a9
                     /ApEinfo_fwdcolor=#f8d3a9
     terminator      5523..5609
                     /label="rrnB T1 terminator"
                     /ApEinfo_revcolor=#b7e6d7
                     /ApEinfo_fwdcolor=#b7e6d7
     primer_bind     7724..7742
                     /label="pBRforEco"
                     /ApEinfo_revcolor=#75c6a9
                     /ApEinfo_fwdcolor=#75c6a9
     RBS             1723..1734
                     /label="strong bacterial ribosome binding site (Elowitz and Leibler, 2000)"
                     /ApEinfo_revcolor=#c7b0e3
                     /ApEinfo_fwdcolor=#c7b0e3
     Biobricking     5610..5625
                     /label="BioBrick Suffix"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
     None            3223..3257
                     /label="'BBa_J23109'"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
     primer_bind     7511..7530
                     /label="pENTR-R"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     primer_bind     complement(5963..5982)
                     /label="pBR322ori-F"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     Scar            3161..3168
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     RBS             3292..3303
                     /label="strong bacterial ribosome binding site (Elowitz and Leibler, 2000)"
                     /ApEinfo_revcolor=#faac61
                     /ApEinfo_fwdcolor=#faac61
     rep_origin      complement(5883..6471)
                     /label="ori"
                     /ApEinfo_revcolor=#85dae9
                     /ApEinfo_fwdcolor=#85dae9
     primer_bind     complement(5712..5729)
                     /label="L4440"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
     terminator      5631..5688
                     /label="his operon terminator"
                     /ApEinfo_revcolor=#b1ff67
                     /ApEinfo_fwdcolor=#b1ff67
     Scar            5424..5431
                     /label="BioBrick Scar"
                     /ApEinfo_revcolor=#9eafd2
                     /ApEinfo_fwdcolor=#9eafd2
     terminator      5352..5423
                     /label="rrnB T1 terminator"
                     /ApEinfo_revcolor=#f58a5e
                     /ApEinfo_fwdcolor=#f58a5e
     misc_feature    3310..5310
                     /label="MLRT ORF"
                     /ApEinfo_revcolor=#ffef86
                     /ApEinfo_fwdcolor=#ffef86
     misc_binding    3259..3281
                     /label="LacO"
                     /ApEinfo_revcolor=#84b0dc
                     /ApEinfo_fwdcolor=#84b0dc
ORIGIN
        1 AGtaccagtg aaagaggaga aaGGATagat gccgattagc ccgattgaaa ccgttccggt
       61 taaactgaaa ccgggtatgg atggtccgaa agttaaacag tggcctctga ccgaagaaaa
      121 aatcaaagca ctggttgaaa tctgcaccga gatggaaaaa gaaggcaaaa ttagcaaaat
      181 cggtccggaa aatccgtata atacaccggt ttttgccatt aagaaaaaag atagcaccaa
      241 atggcgcaaa ctggtggatt ttcgtgaact gaataaacgc acccaggatt tttgggaagt
      301 tcagctgggt attccgcatc cggcaggtct gaaacagaaa aaaagcgtta ccgttctgga
      361 tgttggtgat gcatatttta gcgttccgct ggataaagat ttccgtaaat ataccgcatt
      421 taccatcccg agcattaata acgaaacacc gggtattcgc tatcagtata atgttctgcc
      481 gcagggttgg aaaggtagtc cggcaatttt tcagtgtagc atgaccaaaa ttctggaacc
      541 gtttcgtaaa cagaatccgg atattgtgat ctaccagtat atggatgatc tgtatgttgg
      601 tagcgatctg gaaattggtc agcatcgtac caaaattgaa gaactgcgtc agcatctgct
      661 gcgttggggt tttaccacac cggataaaaa acatcagaaa gaaccgcctt ttctgtggat
      721 gggttatgaa ctgcatccgg ataaatggac cgttcagccg attgttctgc cggaaaaaga
      781 tagctggacc gttaatgata ttcagaaact ggtgggtaaa ctgaattggg caagccagat
      841 ttatgccggt attaaagttc gtcagctgtg taaactgctg cgtggcacca aagcactgac
      901 cgaagttgtt ccgctgacag aagaagcaga actggaactg gcagaaaatc gtgaaattct
      961 gaaagaaccg gttcacggcg tttattatga tccgagcaaa gatctgattg ccgaaattca
     1021 gaaacagggt cagggtcagt ggacctatca gatttatcaa gaaccgttta aaaacctgaa
     1081 aaccggcaaa tatgcacgta tgaaaggtgc acataccaac gatgttaaac agctgaccga
     1141 agcagttcag aaaattgcaa ccgaaagcat tgtgatttgg ggtaaaaccc cgaaattcaa
     1201 actgccgatt cagaaagaaa cctgggaagc atggtggacc gaatattggc aggcaacctg
     1261 gattccggaa tgggaatttg ttaatacccc tccgctggtt aaactgtggt atcagctgga
     1321 aaaagaaccg attattggtg ccgaaacctt ttatgttgat ggtgcagcca atcgtgaaac
     1381 caaactgggt aaagcaggtt atgttaccga tcgtggtcgt cagaaagtgg tgccgctgac
     1441 cgataccacc aatcagaaaa ccgaactaca ggcaattcat ctggcactac aggatagcgg
     1501 tctggaagtt aatattgtta ccgatagcca gtatgccctg ggtattattc aggcacagcc
     1561 ggataaaagc gaaagcgaac tggttagcca gattattgaa cagctgatca aaaaagaaaa
     1621 agtgtacctg gcatgggttc cggcacataa aggtattggt ggtaatgaac aggttgatgg
     1681 tctggttagc gcaggtattc gtaaagttct gtaatattag tgaaagagga gaaatactag
     1741 atgccgatta gcccgattga aaccgttccg gttaaactga aaccgggtat ggatggtccg
     1801 aaagttaaac agtggcctct gaccgaagaa aaaatcaaag cactggttga aatctgcacc
     1861 gagatggaaa aagaaggcaa aattagcaaa atcggtccgg aaaatccgta taatacaccg
     1921 gtttttgcca ttaagaaaaa agatagcacc aaatggcgca aactggtgga ttttcgtgaa
     1981 ctgaataaac gcacccagga tttttgggaa gttcagctgg gtattccgca tccggcaggt
     2041 ctgaaacaga aaaaaagcgt taccgttctg gatgttggtg atgcatattt tagcgttccg
     2101 ctggataaag atttccgtaa atataccgca tttaccatcc cgagcattaa taacgaaaca
     2161 ccgggtattc gctatcagta taatgttctg ccgcagggtt ggaaaggtag tccggcaatt
     2221 tttcagtgta gcatgaccaa aattctggaa ccgtttcgta aacagaatcc ggatattgtg
     2281 atctaccagt atatggatga tctgtatgtt ggtagcgatc tggaaattgg tcagcatcgt
     2341 accaaaattg aagaactgcg tcagcatctg ctgcgttggg gttttaccac accggataaa
     2401 aaacatcaga aagaaccgcc ttttctgtgg atgggttatg aactgcatcc ggataaatgg
     2461 accgttcagc cgattgttct gccggaaaaa gatagctgga ccgttaatga tattcagaaa
     2521 ctggtgggta aactgaattg ggcaagccag atttatgccg gtattaaagt tcgtcagctg
     2581 tgtaaactgc tgcgtggcac caaagcactg accgaagttg ttccgctgac agaagaagca
     2641 gaactggaac tggcagaaaa tcgtgaaatt ctgaaagaac cggttcacgg cgtttattat
     2701 gatccgagca aagatctgat tgccgaaatt cagaaacagg gtcagggtca gtggacctat
     2761 cagatttatc aagaaccgtt taaaaacctg aaaaccggca aatatgcacg tatgaaaggt
     2821 gcacatacca acgatgttaa acagctgacc gaagcagttc agaaaattgc aaccgaaagc
     2881 attgtgattt ggggtaaaac cccgaaattc aaactgccga ttcagaaaga aacctgggaa
     2941 gcatggtgga ccgaatattg gcaggcaacc tggattccgg aatgggaatt tgttaatacc
     3001 cctccgctgg ttaaactgtg gtatcagctg gaaaaagaac cgattattgg tgccgaaacc
     3061 ttttaagatc gctactagag ccaggcatca aataaaacga aaggctcagt cgaaagactg
     3121 ggcctttcgt tttatctgtt gtttgtcggt gaacgctctc tactagagtc acactggctc
     3181 accttcgggt gggcctttct gcgtttatat actagaagcg gcTTTACAGC TAGCTCAGTC
     3241 CTAGGGACTG TGCTAGCTGG AATTGTGAGC GGATAACAAT TCGTTGCAAC TAAAGAGGAG
     3301 AAAGGTACCA TGGGGCATAA TCACAACCAC AATCACAATC ATAACCACAA TGGAGGTGAC
     3361 GATGACGATA AGGGTGGCCG CCAGGCCTGG ATCCCAGCCG GCCCCAAggc ccgatcgatg
     3421 ggaccaatgg ggcagcccct gcaagtgttg accctaaata tagaagatga gtatcggcta
     3481 catgagacct caaaagagcc agatgtttct ctagggtcca catggctgtc tgattttcct
     3541 caggcctggg cggaaaccgg gggcatggga ctggcagttc gccaagctcc tctgatcata
     3601 cctctgaaag caacctctac ccccgtgtcc ataaaacaat accccatgtc acaagaagcc
     3661 agactgggga tcaagcccca catacagaga ctgttggacc agggaatact ggtaccctgc
     3721 cagtccccct ggaacacgcc cctgctaccc gttaagaaac cagggactaa tgattatagg
     3781 cctgtccagg atctgagaga agtcaacaag cgggtggaag acatccaccc caccgtgccc
     3841 aacccttaca acctcttgag cgggctccca ccgtcccacc agtggtacac tgtgcttgat
     3901 ttaaaggatg cctttttctg cctgagactc caccccacca gtcagcctct cttcgccttt
     3961 gagtggagag atccagagat gggaatctca ggacaattga cctggaccag actcccacag
     4021 ggtttcaaaa acagtcccac cctgtttgat gaggcactgc acagagacct agcagacttc
     4081 cggatccagc acccagactt gatcctgcta cagtacgtgg atgacttact gctggccgcc
     4141 acttctgagc tagactgcca acaaggtact cgggccctgt tacaaaccct agggaacctc
     4201 gggtatcggg cctcggccaa gaaagcccaa atttgccaga aacaggtcaa gtatctgggg
     4261 tatcttctaa aagagggtca gagatggctg actgaggcca gaaaagagac tgtgatgggg
     4321 cagcctactc cgaagacccc tcgacaacta agggagttcc tagggacggc aggcttctgt
     4381 cgcctctgga tccctgggtt tgcagaaatg gcagccccct tgtaccctct caccaaaacg
     4441 gggactctgt ttaattgggg cccagaccaa caaaaggcct atcaagaaat caagcaagct
     4501 cttctaactg ccccagccct ggggttgcca gatttgacta agccctttga actctttgtc
     4561 gacgagaagc agggctacgc caaaggtgtc ctaacgcaaa aactgggacc ttggcgtcgg
     4621 ccggtggcct acctgtccaa aaagctagac ccagtagcag ctgggtggcc cccttgccta
     4681 cggatggtag cagccattgc cgtactgaca aaggatgcag gcaagctaac catgggacag
     4741 ccacttgtca ttctggcccc ccatgcagta gaggcacttg tcaaacaacc ccccgaccgc
     4801 tggctttcca acgcccggat gactcactat caggccttgc ttttggacac ggaccgggtc
     4861 cagttcggac cggtggtagc cctgaacccg gctacgctgc tcccactgcc tgaggaaggg
     4921 ctgcaacaca actgccttga tatcctggcc gaagcccacg gaacccgacc cgacctaacg
     4981 gaccagccgc tcccagacgc cgaccacacc tggtacacgg atggaagcag tctcttacaa
     5041 gagggacagc gtaaggcggg agctgcggtg accaccgaga ccgaggtaat ctgggctaaa
     5101 gccctgccag ccgggacatc cgctcagcgg gctgaactga tagcactcac ccaggcccta
     5161 aagatggcag aaggtaagaa gctaaatgtt tatactgata gccgttatgc ttttgctact
     5221 gcccatatcc atggagaaat atacagaagg cgtgggttgc tcacatcaga aggcaaagag
     5281 atcaaaaata aagacgagat ctttaaatga cgctgatagt gctagtgtag atcgctacta
     5341 gagccaggca tcaaataaaa cgaaaggctc agtcgaaaga ctgggccttt cgttttatct
     5401 gttgtttgtc ggtgaacgct ctctactaga gtcacactgg ctcaccttcg ggtgggcctt
     5461 tctgcgttta tatataataa atgtccagaA GGGccttcag gcatgcaagc ctctggaggc
     5521 atcaaataaa acgaaaggct cagtcgaaag actgggcctt tcgttttatc tgttgtttgt
     5581 cggtgaacgc tctcctgagt aggacaaatT ACTAGTAGCG GCCGCtgcag tccggcaaaa
     5641 aagggcaagg tgtcaccacc ctgccctttt tctttaaaac cgaaaagatt acttcgcgtt
     5701 atgcaggctt cctcgctcac tgactcgctg cgctcggtcg ttcggctgcg gcgagcggta
     5761 tcagctcact caaaggcggt aatacggtta tccacagaat caggggataa cgcaggaaag
     5821 aacatgtgag caaaaggcca gcaaaaggcc aggaaccgta aaaaggccgc gttgctggcg
     5881 tttttccaca ggctccgccc ccctgacgag catcacaaaa atcgacgctc aagtcagagg
     5941 tggcgaaacc cgacaggact ataaagatac caggcgtttc cccctggaag ctccctcgtg
     6001 cgctctcctg ttccgaccct gccgcttacc ggatacctgt ccgcctttct cccttcggga
     6061 agcgtggcgc tttctcatag ctcacgctgt aggtatctca gttcggtgta ggtcgttcgc
     6121 tccaagctgg gctgtgtgca cgaacccccc gttcagcccg accgctgcgc cttatccggt
     6181 aactatcgtc ttgagtccaa cccggtaaga cacgacttat cgccactggc agcagccact
     6241 ggtaacagga ttagcagagc gaggtatgta ggcggtgcta cagagttctt gaagtggtgg
     6301 cctaactacg gctacactag aagaacagta tttggtatct gcgctctgct gaagccagtt
     6361 accttcggaa aaagagttgg tagctcttga tccggcaaac aaaccaccgc tggtagcggt
     6421 ggtttttttg tttgcaagca gcagattacg cgcagaaaaa aaggatctca agaagatcct
     6481 ttgatctttt ctacggggtc tgacgctcag tggaacgaaa actcacgtta agggattttg
     6541 gtcatgagat tatcaaaaag gatcttcacc tagatccttt taaattaaaa atgaagtttt
     6601 aaatcaatct aaagtatata tgagtaaact tggtctgaca gctcgagtcc cgtcaagtca
     6661 gcgtaatgct ctgccagtgt tacaaccaat taaccaattc tgattagaaa aactcatcga
     6721 gcatcaaatg aaactgcaat ttattcatat caggattatc aataccatat ttttgaaaaa
     6781 gccgtttctg taatgaagga gaaaactcac cgaggcagtt ccataggatg gcaagatcct
     6841 ggtatcggtc tgcgattccg actcgtccaa catcaataca acctattaat ttcccctcgt
     6901 caaaaataag gttatcaagt gagaaatcac catgagtgac gactgaatcc ggtgagaatg
     6961 gcaaaagctt atgcatttct ttccagactt gttcaacagg ccagccatta cgctcgtcat
     7021 caaaatcact cgcatcaacc aaaccgttat tcattcgtga ttgcgcctga gcgagacgaa
     7081 atacgcgatc gctgttaaaa ggacaattac aaacaggaat cgaatgcaac cggcgcagga
     7141 acactgccag cgcatcaaca atattttcac ctgaatcagg atattcttct aatacctgga
     7201 atgctgtttt cccggggatc gcagtggtga gtaaccatgc atcatcagga gtacggataa
     7261 aatgcttgat ggtcggaaga ggcataaatt ccgtcagcca gtttagtctg accatctcat
     7321 ctgtaacatc attggcaacg ctacctttgc catgtttcag aaacaactct ggcgcatcgg
     7381 gcttcccata caatcgatag attgtcgcac ctgattgccc gacattatcg cgagcccatt
     7441 tatacccata taaatcagca tccatgttgg aatttaatcg cggcctggag caagacgttt
     7501 cccgttgaat atggctcata acaccccttg tattactgtt tatgtaagca gacagtttta
     7561 ttgttcatga tgatatattt ttatcttgtg caatgtaaca tcagagattt tgagacacaa
     7621 cgtggctttg ttgaataaat cgaacttttg ctgagttgaa ggatcagctc gagtgccact
     7681 tgacgtctaa gaaaccatta ttatcatgac attaacctat aaaaataggc gtatcacgag
     7741 gcagaatttc agataaaaaa aatccttagc tttcgctaag gatgatttct ggAATTCGCG
     7801 GCCGCTTCTA GAGtttacag ctagctcagt cctagggact gtgctagcTG GAATTGTGAG
     7861 CGGATAACAA TTctatggac tatgtttCTG TCACCGGATG TGCTTTCCGG TCTGATGAGT
     7921 CCGTGAGGAC GAAAC
//`
        
sequences.seq_ZFc_codon_optimized_1 = {};
sequences.seq_ZFc_codon_optimized_1.varName = "seq_ZFc_codon_optimized_1";
sequences.seq_ZFc_codon_optimized_1.name = "ZFc (codon optimized) (1)";
sequences.seq_ZFc_codon_optimized_1.seqType = "linear";
sequences.seq_ZFc_codon_optimized_1.comp = true;
sequences.seq_ZFc_codon_optimized_1.data = `LOCUS       ZFc_(codon_optimized)    331 bp ds-DNA     linear       25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     misc_feature    18..311
                     /label="ZFc with linker"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
ORIGIN
        1 TGACTAGGTC TCATAGCACG TCAGCAGCGG CGCCGGGGGA ACGACCGTTT CAGTGCCGCA
       61 TTTGTATGCG TAACTTCTCC GATAGTCCAA CCCTGAGACG CCATACTCGC ACCCACACCG
      121 GTGAAAAGCC GTTCCAATGC CGCATTTGTA TGCGTAACTT TTCGGTTCGC CACAATCTTA
      181 CACGTCACTT ACGTACGCAT ACCGGCGAGA AACCCTTCCA GTGCCGTATC TGTATGCGCA
      241 ATTTTAGCGA TCGGACGTCT TTGGCCCGGC ATCTGAAAAC TCATTATCCT TACGATGTGC
      301 CGGACTATGC TTAAGAGTAG AGACCTGCGA T
//`
        
sequences.seq_ZFc_codon_optimized = {};
sequences.seq_ZFc_codon_optimized.varName = "seq_ZFc_codon_optimized";
sequences.seq_ZFc_codon_optimized.name = "ZFc (codon optimized)";
sequences.seq_ZFc_codon_optimized.seqType = "linear";
sequences.seq_ZFc_codon_optimized.comp = true;
sequences.seq_ZFc_codon_optimized.data = `LOCUS       ZFc_(codon_optimized)    331 bp ds-DNA     linear       25-OCT-2020
DEFINITION  .
FEATURES             Location/Qualifiers
     misc_feature    18..311
                     /label="ZFc with linker"
                     /ApEinfo_revcolor=#ff9ccd
                     /ApEinfo_fwdcolor=#ff9ccd
ORIGIN
        1 TGACTAGGTC TCATAGCACG TCAGCAGCGG CGCCGGGGGA ACGACCGTTT CAGTGCCGCA
       61 TTTGTATGCG TAACTTCTCC GATAGTCCAA CCCTGAGACG CCATACTCGC ACCCACACCG
      121 GTGAAAAGCC GTTCCAATGC CGCATTTGTA TGCGTAACTT TTCGGTTCGC CACAATCTTA
      181 CACGTCACTT ACGTACGCAT ACCGGCGAGA AACCCTTCCA GTGCCGTATC TGTATGCGCA
      241 ATTTTAGCGA TCGGACGTCT TTGGCCCGGC ATCTGAAAAC TCATTATCCT TACGATGTGC
      301 CGGACTATGC TTAAGAGTAG AGACCTGCGA T
//`