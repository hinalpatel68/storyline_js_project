var bottomTableData = [];
var planningScenarioData = [];
function defineStaticValueForMainTable(){
    // ==== main table
    var player = GetPlayer();
    var staticD21=16.25;
    setVariableData("D21",staticD21, "amount",2); // Discounts/ 9L Case
    var staticD27=28.75;
    setVariableData("D27",staticD27, "amount",2); // Excise Tax/ 9L Case
    var staticD39=3578183.33760167;
    setVariableData("D39",convertAmount(staticD39,true), "amount",0); // BRAND EXPENSE
    var staticD44=5311157.84594032;
    setVariableData("D44",convertAmount(staticD44,true), "amount",0); // SG&A
    //...
    var staticE21=14.77125;
    setVariableData("E21",convertAmount(staticE21),"amount",2); // Discounts/ 9L Case   
    var staticE27=28.75;
    setVariableData("E27",staticE27, "amount",2); // Excise Tax/ 9L Case
    var staticE39=3815575.45976621;
    setVariableData("E39",convertAmount(staticE39,true), "amount",0); // BRAND EXPENSE
    var staticE44=5366175.72982854;
    setVariableData("E44",convertAmount(staticE44,true), "amount",0); // SG&A
    //...
    var staticF27=28.75;
    setVariableData("H27",staticF27, "amount",2); // Excise Tax/ 9L Case

    // Dollars in thousands
    var staticD53=1667433.43532238;
    setVariableData("D53",convertAmount(staticD53,true), "amount",0); // Paid Media TV, Digital, Etc.
    var staticD54=926749.484438831;
    setVariableData("D54",convertAmount(staticD54,true), "amount",0); // Other Activation Promotions, PR, Sponsorship, etc.
    var staticD55=984000.417840458;
    setVariableData("D55",convertAmount(staticD55,true), "amount",0); // Non Working Agency Fees, Market Research, etc.
    //...
    var staticE53=1907787.72988311;
    setVariableData("E53",convertAmount(staticE53,true), "amount",0); // Paid Media TV, Digital, Etc.
    var staticE54=953893.864941554;
    setVariableData("E54",convertAmount(staticE54,true), "amount",0); // Other Activation Promotions, PR, Sponsorship, etc.
    var staticE55=953893.864941554;
    setVariableData("E55",convertAmount(staticE55,true), "amount",0); // Non Working Agency Fees, Market Research, etc.


}
function defineStaticValueForBottomTable(){
    // ==== bottom table
    // 1.75L
    var staticD73=0;
    bottomTableData["D73"] = staticD73; // Case Volume
    var staticD74=147.9;
    bottomTableData["D74"] = staticD74; // Price/9L (SNS)
    var staticD76=36.24;
    bottomTableData["D76"] = staticD76; // COS/9L
    //..
    var staticE73=0;
    bottomTableData["E73"] = staticE73; // Case Volume
    var staticE74=147.9;
    bottomTableData["E74"] = staticE74; // Price/9L (SNS)
    var staticE76=36.24;
    bottomTableData["E76"] = staticE76; // COS/9L
    // 1L
    var staticD82=13647.52;
    bottomTableData["D82"] = staticD82; // Case Volume
    var staticD83=179.89;
    bottomTableData["D83"] = staticD83; // Price/9L (SNS)
    var staticD85=35.22;
    bottomTableData["D85"] = staticD85; // COS/9L
    //..
    var staticE82=16717.8;
    bottomTableData["E82"] = staticE82; // Case Volume
    var staticE83=179.89;
    bottomTableData["E83"] = staticE83; // Price/9L (SNS)
    var staticE85=34.8197857684114;
    bottomTableData["E85"] = staticE85; // COS/9L
    // 750 ml
    var staticD91=156946.48;
    bottomTableData["D91"] = staticD91; // Case Volume
    var staticD92=177.73;
    bottomTableData["D92"] = staticD92; // Price/9L (SNS)
    var staticD94=42.5;
    bottomTableData["D94"] = staticD94; // COS/9L
    //..
    var staticE91 = 150460.2;
    bottomTableData["E91"] = staticE91; // Case Volume
    var staticE92=182.323215254838;
    bottomTableData["E92"] = staticE92; // Price/9L (SNS)
    var staticE94=42.0170611912971;
    bottomTableData["E94"] = staticE94; // COS/9L
    // 375 ml
    var staticD100=0;
    bottomTableData["D100"] = staticD100; // Case Volume
    var staticD101=192.53;
    bottomTableData["D101"] = staticD101; // Price/9L (SNS)
    var staticD103=50.51;
    bottomTableData["D103"] = staticD103; // COS/9L
    //..
    var staticE100=0;
    bottomTableData["E100"] = staticE100; // Case Volume
    var staticE101=192.53;
    bottomTableData["E101"] = staticE101; // Price/9L (SNS)
    var staticE103=81.4327585548791;
    bottomTableData["E103"] = staticE103; // COS/9L
    // 200 ml
    var staticD109=0;
    bottomTableData["D109"] = staticD109; // Case Volume
    var staticD110=197.44;
    bottomTableData["D110"] = staticD110; // Price/9L (SNS)
    var staticD112=67.85;
    bottomTableData["D112"] = staticD112; // COS/9L
    //..
    var staticE109=0;
    bottomTableData["E109"] = staticE109; // Case Volume
    var staticE110=197.44;
    bottomTableData["E110"] = staticE110; // Price/9L (SNS)
    var staticE112=67.85;
    bottomTableData["E112"] = staticE112; // COS/9L
    //..
    var staticH109=0;
    bottomTableData["H109"] = staticH109; // Case Volume
    var staticH110=197.44;
    bottomTableData["H110"] = staticH110; // Price/9L (SNS)
    var staticH112=67.85;
    bottomTableData["H112"] = staticH112; // COS/9L
    // 50 ml
    var staticD118=0;
    bottomTableData["D118"] = staticD118; // Case Volume
    var staticD119=244.53;
    bottomTableData["D119"] = staticD119; // Price/9L (SNS)
    var staticD121=170.67;
    bottomTableData["D121"] = staticD121; // COS/9L
    //..
    var staticE118=0;
    bottomTableData["E118"] = staticE118; // Case Volume
    var staticE119=244.53;
    bottomTableData["E119"] = staticE119; // Price/9L (SNS)
    var staticE121=170.67;
    bottomTableData["E121"] = staticE121; // COS/9L
    // 750ml VAP
    var staticD127=0;
    bottomTableData["D127"] = staticD127; // Case Volume
    var staticD128=177.73;
    bottomTableData["D128"] = staticD128; // Price/9L (SNS)
    var staticD130=68.518951466687;
    bottomTableData["D130"] = staticD130; // COS/9L
    //..
    var staticE127=0;
    bottomTableData["E127"] = staticE127; // Case Volume
    var staticE128=182.323215254838;
    bottomTableData["E128"] = staticE128; // Price/9L (SNS)
    var staticE130=68.518951466687;
    bottomTableData["E130"] = staticE130; // COS/9L
    // 7 Grain 750 ml
    var staticD136=0;
    bottomTableData["D136"] = staticD136; // Case Volume
    var staticD137=177.73;
    bottomTableData["D137"] = staticD137; // Price/9L (SNS)
    //..
    var staticE136=0;
    bottomTableData["E136"] = staticE136; // Case Volume
    var staticE137=182.323215254838;
    bottomTableData["E137"] = staticE137; // Price/9L (SNS)
}
function defineStaticPlanningScenarioData() {
    var player = GetPlayer();
    // input textbox variables
    var L15 = player.GetVar("L15"); // Category Growth
    // packaging change
    planningScenarioData['G46'] = 4;
    planningScenarioData['G47'] = 0;
    planningScenarioData['G48'] = -2.40;
    //..........
    planningScenarioData['F20'] = 5/100;// (perc)
    planningScenarioData['F21'] = 0/100;// (perc)
    planningScenarioData['F22'] = -5/100;// (perc)
    planningScenarioData['D16'] = L15/100;// (perc)
    planningScenarioData['D17'] = 5/100;// (perc)
    planningScenarioData['D20'] = -4/100;// (perc)
    planningScenarioData['D21'] = 0/100;// (perc)
    planningScenarioData['D22'] = 4/100;// (perc)

    planningScenarioData['D40'] = 5/100;// (perc)
    planningScenarioData['D41'] = 4/100;// (perc)
    planningScenarioData['D42'] = 0/100;// (perc)
    planningScenarioData['D43'] = -4/100;// (perc)

    planningScenarioData['D36'] = 1/100;// (perc)
    planningScenarioData['E36'] = 0.5/100;// (perc)
    planningScenarioData['F36'] = 0/100;// (perc)

    planningScenarioData['D37'] = -1/100;// (perc)
    planningScenarioData['E37'] = -0.05/100;// (perc)
    planningScenarioData['F37'] = 0/100;// (perc)

    planningScenarioData['D46'] = 0.5/100;// (perc)
    planningScenarioData['D47'] = 0/100;// (perc)
    planningScenarioData['D48'] = 0/100;// (perc)

    planningScenarioData['D51'] = 10000;
    planningScenarioData['D52'] = 15000;
    planningScenarioData['D53'] = 10000;
    planningScenarioData['D54'] = 0;

    planningScenarioData['D56'] = -4000;
    planningScenarioData['D57'] = -7500;
    planningScenarioData['D58'] = -5000;
    planningScenarioData['D59'] = 0;
    planningScenarioData['D62'] = 0/100; // (perc)
    planningScenarioData['D63'] = 2/100; // (perc)
    planningScenarioData['D64'] = 3/100; // (perc)

    planningScenarioData['D30'] = 10/100; // (perc)
    planningScenarioData['E30'] = 0/100; // (perc)
    planningScenarioData['F30'] = 0/100; // (perc)

    planningScenarioData['D31'] = 5/100; // (perc)
    planningScenarioData['E31'] = 0/100; // (perc)
    planningScenarioData['F31'] = 0/100; // (perc)

    planningScenarioData['D32'] = 2/100; // (perc)
    planningScenarioData['E32'] = 0/100; // (perc)
    planningScenarioData['F32'] = 0/100; // (perc)

    planningScenarioData['D34'] = 7/100; // (perc)
    planningScenarioData['E34'] = 15/100; // (perc)
    planningScenarioData['F34'] = 0/100; // (perc)
    
    planningScenarioData['F40'] = -3.5/100; // (perc)
    planningScenarioData['F41'] = -1.4/100; // (perc)
    planningScenarioData['F42'] = 0/100; // (perc)
    planningScenarioData['F43'] = 1.4/100; // (perc)
    planningScenarioData['F51'] = 48;
    planningScenarioData['F52'] = 36;
    planningScenarioData['F53'] = 36;
    planningScenarioData['F54'] = 0;

    planningScenarioData['H62'] = 0.00;
    planningScenarioData['H63'] = 500000.00;
    planningScenarioData['H64'] = 1000000.00;

    planningScenarioData['E40'] = 24.00;
    planningScenarioData['E41'] = 20.00;
    planningScenarioData['E42'] = 16.4125;
    planningScenarioData['E43'] = 12.2187249864323;
}
// Main Function
function calculateFormulas() {
    var player = GetPlayer();
    // input textbox variables
    var D15 = player.GetVar("LastYearD15"); // Last Year
    var E15 = player.GetVar("ThisYearE15"); // This Year
    
    setVariableData("D15",D15, "amount",0);
    setVariableData("E15",E15, "amount",0);

    // static variable===============
    // ==== main table
    defineStaticValueForMainTable();
    // ==== bottom table 
    defineStaticValueForBottomTable();
    
    // bottom table calculation==================
    calculateBottomTable("D", "last_year");
    calculateBottomTable("E", "this_year");
    calculateKToRColumn(); // K to R Column
    calculateBottomTable("H", "next_year");
    
    // total field of bottom table calculation
    calculateTotalOfBottomTable("D", "last_year");
    calculateTotalOfBottomTable("E", "this_year");
    calculateTotalOfBottomTable("H", "next_year");

    // main Table calculation=====================
    calculateMainTable("D", "last_year");
    calculateMainTable("E", "this_year");
    // main table: next year calculation
    calculateTotalOfMainTable("H", "next_year");
    calculateMainTable("H", "next_year");
    calculateWorkingTotalOfMainTable("H", "next_year");

    // total section of main table
    calculateTotalOfMainTable("D", "last_year");
    calculateTotalOfMainTable("E", "this_year");
    calculateWorkingTotalOfMainTable("D", "last_year");
    calculateWorkingTotalOfMainTable("E", "this_year");

    calculateChangesInYearOfMainTable("F","D","E","this_year_changes");
    calculateChangesInYearOfMainTable("I","E","H","next_year_changes");
    calculateChangesInTotalOfMainTable("F","D","E","this_year_changes");
    calculateChangesInTotalOfMainTable("I","E","H","next_year_changes");

    displayValuesForColoredTable();
    // console.log(bottomTableData);
    // console.log(" finish calculation ====");
}
function calculateMainTable(columnIndex,columnName="") {
    var player = GetPlayer();
    // last year === D17 to D48
    if(columnIndex == "H"){
        setVariableData("H15",bottomTableData[columnIndex+'64'], "amount",0); // VOLUME
        // setVariableData("H15",167178); // temp
        setVariableData("H39",bottomTableData["H52"], "amount",0); // BRAND EXPENSE
    }
    var Formula29 = convertAmount((bottomTableData[columnIndex+'66'] || 0),true); // 'D66'
    setVariableData(columnIndex+"29",Formula29, "amount", 0); // STRIPPED NET SALES
    var Formula30 = convertAmount((evaluateFormula(columnIndex+'29/'+columnIndex+'15')) * 1000,false); // '(D29/D15)*1000'
    setVariableData(columnIndex+"30",Formula30, "amount",2); // SNS/ 9L Case
    var Formula26 = convertAmount(evaluateFormula(columnIndex+'27*'+columnIndex+'15'),true); // 'D27*D15'
    setVariableData(columnIndex+"26",Formula26, "amount",0); // EXCISE TAXES
    var Formula23 = convertAmount(evaluateFormula(columnIndex+'29+'+columnIndex+'26')); // 'D29+D26'
    setVariableData(columnIndex+"23",Formula23, "amount",0); // NET SALES
    var Formula24 = convertAmount((evaluateFormula(columnIndex+'23/'+columnIndex+'15')) * 1000); // '(D23/D15)*1000'
    setVariableData(columnIndex+"24",Formula24, "amount",2); // Net Sales/ 9L Case
    if(columnIndex == "H"){
        // main table
        var Formula20 = convertAmount(evaluateFormula(bottomTableData[columnIndex+'91']+'*'+bottomTableData['N90']),true); // 'H91*N90'
        setVariableData(columnIndex+"20",Formula20, "amount",0); // DISCOUNTS
        var Formula21 = convertAmount(evaluateFormula(columnIndex+'20/'+columnIndex+'15') * 1000); // 'H20*H15'
        setVariableData(columnIndex+"21",Formula21, "amount",2); // DISCOUNTS/ 9L Case
        var ForumulaI29= convertAmount(evaluateFormula(columnIndex+'29/E29-1') * 100) // (H29/E29-1)*100 (perc)
        setVariableData("I29",ForumulaI29, "amount",1); 
        // var Formula44 = convertAmount(evaluateFormula('E44*(1+((I29/100)/2))',true)); // E44*(1+(I29/2))
        var Formula44 = convertAmount(evaluateFormula('E44*(1+('+planningScenarioData['D17']+'))')); // E44*(1+(planningScenarioD17))
        setVariableData(columnIndex+"44",Formula44, "amount",0); // SG&A

        // total calculation for H column
        var Formula53 = convertAmount(evaluateFormula('(E53*1000)*(1+(I29/100))+'+bottomTableData['R65']),true); // E53*(1+I$29)+R65
        setVariableData(columnIndex+"53",Formula53, "amount",0);// Paid Media
        var Formula54 = convertAmount(evaluateFormula('E54*(1+(I29/100))')); // E54*(1+I29)
        setVariableData(columnIndex+"54",Formula54, "amount",0);// Activation
        var Formula55 = convertAmount(evaluateFormula('E55*(1+(I29/100))')); // E55*(1+I29)
        setVariableData(columnIndex+"55",Formula55, "amount",0);// Activation
        var Formula52 = convertAmount(evaluateFormula(columnIndex+'53+'+columnIndex+'54+'+columnIndex+'55')); // 'H53+H54+H55'
        setVariableData(columnIndex+"52",Formula52, "amount",0);// Total Brand Spend

        // main table 
        setVariableData(columnIndex+"39",Formula52, "amount",0);// Brand Expense
    }
    else{
        var Formula20 = convertAmount(evaluateFormula(columnIndex+'21*'+columnIndex+'15'),true); // 'D21*D15'
        setVariableData(columnIndex+"20",Formula20, "amount",0); // DISCOUNTS
    }
    var Formula17 = convertAmount(evaluateFormula(columnIndex+'20+'+columnIndex+'23')); // 'D20+D23'
    setVariableData(columnIndex+"17",Formula17,"amount",0); // Gross Sales
    var Formula18 = convertAmount((evaluateFormula(columnIndex+'17/'+columnIndex+'15') * 1000)); // '(D17/D15)*1000'
    setVariableData(columnIndex+"18",Formula18, "amount",2); // GS/ 9L Case (Front Line)

    var Formula32 = convertAmount((bottomTableData[columnIndex+'68'] || 0),true); // 'D68'
    setVariableData(columnIndex+"32",Formula32, "amount",0); // COST OF SALES
    var Formula33 = convertAmount((evaluateFormula(columnIndex+'32/'+columnIndex+'15')) * 1000); // '(D32/D15)*1000'
    setVariableData(columnIndex+"33",Formula33, "amount",2); // COS/ 9L Case

    var Formula35 = convertAmount(evaluateFormula(columnIndex+'29-'+columnIndex+'32')); // 'D29-D32'
    setVariableData(columnIndex+"35",Formula35, "amount",0); // GROSS PROFIT
    var Formula36 = convertAmount((evaluateFormula(columnIndex+'35/'+columnIndex+'15')) * 1000); // '(D35/D15)*1000'
    setVariableData(columnIndex+"36",Formula36, "amount",2); // GP/ 9L
    var Formula37 = convertAmount((evaluateFormula(columnIndex+'35/'+columnIndex+'29')) * 100); // '(D35/D29)*100 (perc)'
    setVariableData(columnIndex+"37",Formula37, "percentage",1); // Gross Margin (GP/ SNS)
    
    var Formula40 = convertAmount((evaluateFormula(columnIndex+'39/'+columnIndex+'29')) * 100); // '(D39/D29)*100 (perc)'
    setVariableData(columnIndex+"40",Formula40, "percentage",1); // Reinvestment Rate  (BE/ SNS)

    var Formula42 = convertAmount(evaluateFormula(columnIndex+'35-'+columnIndex+'39')); // 'D35-D39'
    setVariableData(columnIndex+"42",Formula42, "amount",0); // BRAND PROFIT

    var Formula45 = convertAmount((evaluateFormula(columnIndex+'44/'+columnIndex+'29')) * 100); // '(D44/D29)*100 (perc)'
    setVariableData(columnIndex+"45",Formula45, "percentage",1); // SG&A Efficiency (SG&A/ SNS)

    var Formula47 = convertAmount(evaluateFormula(columnIndex+'42-'+columnIndex+'44')); // 'D42-D44'
    setVariableData(columnIndex+"47",Formula47, "amount",0);// OPERATING INCOME
    var Formula48 = convertAmount((evaluateFormula(columnIndex+'47/'+columnIndex+'29')) * 100); // '(D47/D29)*100 (perc)'
    setVariableData(columnIndex+"48",Formula48, "percentage",1);// Operating Margin (OI/ SNS)
}
function calculateTotalOfMainTable(columnIndex,columnName="") {
    // Dollars in thousands
    // last year  D52 to D55
    var Formula52 = convertAmount(evaluateFormula(columnIndex+'39')); // 'D39'
    setVariableData(columnIndex+"52",Formula52, "amount",0);// Total Brand Spend
}
function calculateWorkingTotalOfMainTable(columnIndex,columnName="") {
    // Working as % of Total
    // last year  D57 to D60
    var Formula57 = convertAmount(evaluateFormula('('+columnIndex+'53+'+columnIndex+'54)/'+columnIndex+'39') * 100); //( SUM(D53:D54)/D39)*100 (perc)
    setVariableData(columnIndex+"57",Formula57, "percentage",1); // Working as % of Total
    var Formula58 = convertAmount(evaluateFormula(columnIndex+'53/'+columnIndex+'52') * 100); // (D53/D52)*100 (perc)
    setVariableData(columnIndex+"58",Formula58, "percentage",1); // Paid Media
    var Formula59 = convertAmount(evaluateFormula(columnIndex+'54/'+columnIndex+'52') * 100); // (D54/D52)*100 (perc)
    setVariableData(columnIndex+"59",Formula59, "percentage",1); // Activation
    var Formula60 = convertAmount(evaluateFormula(columnIndex+'55/'+columnIndex+'52') * 100); // (D55/D52)*100 (perc)
    setVariableData(columnIndex+"60",Formula60, "percentage",1); // NonWorking
    
}
function calculateChangesInYearOfMainTable(columnIndex, compareColumnIndex1, compareColumnIndex2, columnName="") {
    // Dollars in thousands
    var player = GetPlayer();
    // last year  D15 to D48
    var Formula15 = convertAmount(evaluateFormula(compareColumnIndex2+'15/'+compareColumnIndex1+'15-1') * 100); 
    setVariableData(columnIndex+"15",Formula15, "percentage", 1, true);
    var Formula17 = convertAmount(evaluateFormula(compareColumnIndex2+'17/'+compareColumnIndex1+'17-1') * 100); 
    setVariableData(columnIndex+"17",Formula17, "percentage", 1, true);
    var Formula18 = convertAmount(evaluateFormula(compareColumnIndex2+'18/'+compareColumnIndex1+'18-1') * 100); 
    setVariableData(columnIndex+"18",Formula18, "percentage", 1, true);
    var Formula20 = convertAmount(evaluateFormula(compareColumnIndex2+'20/'+compareColumnIndex1+'20-1') * 100); 
    setVariableData(columnIndex+"20",Formula20, "percentage", 1, true);
    var Formula21 = convertAmount(evaluateFormula(compareColumnIndex2+'21/'+compareColumnIndex1+'21-1') * 100);
    setVariableData(columnIndex+"21",Formula21, "percentage", 1, true);
    var Formula23 = convertAmount(evaluateFormula(compareColumnIndex2+'23/'+compareColumnIndex1+'23-1') * 100); 
    setVariableData(columnIndex+"23",Formula23, "percentage", 1, true);
    var Formula24 = convertAmount(evaluateFormula(compareColumnIndex2+'24/'+compareColumnIndex1+'24-1') * 100); 
    setVariableData(columnIndex+"24",Formula24, "percentage", 1, true);
    var Formula26 = convertAmount(evaluateFormula(compareColumnIndex2+'26/'+compareColumnIndex1+'26-1') * 100); 
    setVariableData(columnIndex+"26",Formula26, "percentage", 1, true);
    var Formula27 = convertAmount(evaluateFormula(compareColumnIndex2+'27/'+compareColumnIndex1+'27-1') * 100); 
    setVariableData(columnIndex+"27",Formula27, "percentage", 1, true);
    var Formula29 = convertAmount(evaluateFormula(compareColumnIndex2+'29/'+compareColumnIndex1+'29-1') * 100); 
    setVariableData(columnIndex+"29",Formula29, "percentage", 1, true);
    var Formula30 = convertAmount(evaluateFormula(compareColumnIndex2+'30/'+compareColumnIndex1+'30-1') * 100); 
    setVariableData(columnIndex+"30",Formula30, "percentage", 1, true);
    var Formula32 = convertAmount(evaluateFormula(compareColumnIndex2+'32/'+compareColumnIndex1+'32-1') * 100); 
    setVariableData(columnIndex+"32",Formula32, "percentage", 1, true);
    var Formula33 = convertAmount(evaluateFormula(compareColumnIndex2+'33/'+compareColumnIndex1+'33-1') * 100); 
    setVariableData(columnIndex+"33",Formula33, "percentage", 1, true);
    var Formula35 = convertAmount(evaluateFormula(compareColumnIndex2+'35/'+compareColumnIndex1+'35-1') * 100); 
    setVariableData(columnIndex+"35",Formula35, "percentage", 1, true);
    var Formula37 = convertAmount(evaluateFormula(compareColumnIndex2+'37-'+compareColumnIndex1+'37')); // pts 
    setVariableData(columnIndex+"37",Formula37, "percentage", 1, true);
    var Formula39 = convertAmount(evaluateFormula(compareColumnIndex2+'39/'+compareColumnIndex1+'39-1') * 100);
    setVariableData(columnIndex+"39",Formula39, "percentage", 1, true);
    var Formula40 = convertAmount(evaluateFormula(compareColumnIndex2+'40-'+compareColumnIndex1+'40')); // pts
    setVariableData(columnIndex+"40",Formula40, "percentage", 1, true);
    var Formula42 = convertAmount(evaluateFormula(compareColumnIndex2+'42/'+compareColumnIndex1+'42-1') * 100);
    setVariableData(columnIndex+"42",Formula42, "percentage", 1, true);
    var Formula44 = convertAmount(evaluateFormula(compareColumnIndex2+'44/'+compareColumnIndex1+'44-1') * 100); 
    setVariableData(columnIndex+"44",Formula44, "percentage", 1, true);
    var Formula45 = convertAmount(evaluateFormula(compareColumnIndex2+'45-'+compareColumnIndex1+'45'));  // pts
    setVariableData(columnIndex+"45",Formula45, "percentage", 1, true);
    var Formula47 = convertAmount(evaluateFormula(compareColumnIndex2+'47/'+compareColumnIndex1+'47-1') * 100); 
    setVariableData(columnIndex+"47",Formula47, "percentage", 1, true);
    var Formula48 = convertAmount(evaluateFormula(compareColumnIndex2+'48-'+compareColumnIndex1+'48')); // pts
    setVariableData(columnIndex+"48",Formula48, "percentage", 1, true); 
    
}
function calculateChangesInTotalOfMainTable(columnIndex, compareColumnIndex1, compareColumnIndex2, columnName="") {
    // Dollars in thousands
    // last year  D52 to D55
    var Formula52 = convertAmount(evaluateFormula(compareColumnIndex2+'52/'+compareColumnIndex1+'52-1') * 100); // '(E52/D52-1)*100 (perc)'
    setVariableData(columnIndex+"52",Formula52, "percentage", 1);// Total Brand Spend change
    var Formula53 = convertAmount(evaluateFormula(compareColumnIndex2+'53/'+compareColumnIndex1+'53-1') * 100); //( SUM(E53:D53)-1)*100 (perc)
    setVariableData(columnIndex+"53",Formula53, "percentage", 1, true); // Paid Media TV, Digital, Etc.
    var Formula54 = convertAmount(evaluateFormula(compareColumnIndex2+'54/'+compareColumnIndex1+'54-1') * 100); //( SUM(E54:D54)-1)*100 (perc)
    setVariableData(columnIndex+"54",Formula54, "percentage", 1, true); // Other Activation Promotions, PR, Sponsorship, etc.
    var Formula55 = convertAmount(evaluateFormula(compareColumnIndex2+'55/'+compareColumnIndex1+'55-1') * 100); //( SUM(E55:D55)-1)*100 (perc)
    setVariableData(columnIndex+"55",Formula55, "percentage", 1, true);  // Non Working Agency Fees, Market Research, etc.
    
}
function calculateTotalOfBottomTable(columnIndex,columnName="") {
    // 750ml === D136 to D143
    var Formula64 = convertAmount((bottomTableData[columnIndex+"73"]+bottomTableData[columnIndex+"82"]+bottomTableData[columnIndex+"91"]+bottomTableData[columnIndex+"100"]+bottomTableData[columnIndex+"109"]+bottomTableData[columnIndex+"118"]+bottomTableData[columnIndex+"127"]+bottomTableData[columnIndex+"136"])); // D73+D82+D91+D100+D109+D118+D127+D136 (total of case volume of all type of measurement)
    bottomTableData[columnIndex+"64"] = Formula64; // Total: case volume

    var Formula66 = convertAmount((bottomTableData[columnIndex+"75"]+bottomTableData[columnIndex+"84"]+bottomTableData[columnIndex+"93"]+bottomTableData[columnIndex+"102"]+bottomTableData[columnIndex+"111"]+bottomTableData[columnIndex+"120"]+bottomTableData[columnIndex+"129"]+bottomTableData[columnIndex+"138"])); // D75+D84+D93+D102+D111+D120+D129+D138  (total of total SNS of all type of measurement)
    bottomTableData[columnIndex+"66"] = Formula66; // Total: Total SNS

    var Formula65 = convertAmount((bottomTableData[columnIndex+"66"]/bottomTableData[columnIndex+"64"])); // D66/D64 
    bottomTableData[columnIndex+"65"] = Formula65; // Total: Price/9L (SNS)

    var Formula68 = convertAmount((bottomTableData[columnIndex+"77"]+bottomTableData[columnIndex+"86"]+bottomTableData[columnIndex+"95"]+bottomTableData[columnIndex+"104"]+bottomTableData[columnIndex+"113"]+bottomTableData[columnIndex+"122"]+bottomTableData[columnIndex+"131"]+bottomTableData[columnIndex+"140"])); // D77+D86+D95+D104+D113+D122+D131+D140   (total of COS Total of all type of measurement)
    bottomTableData[columnIndex+"68"] = Formula68; // Total: COS Total

    var Formula67 = convertAmount((bottomTableData[columnIndex+"68"]/bottomTableData[columnIndex+"64"])); // D68/D64
    bottomTableData[columnIndex+"67"] = Formula67; // Total: COS/9L

    var Formula69 = convertAmount((bottomTableData[columnIndex+"65"]-bottomTableData[columnIndex+"67"])); // D65-D67
    bottomTableData[columnIndex+"69"] = Formula69; // Total: GP/9L

    var Formula70 = convertAmount((bottomTableData[columnIndex+"66"]-bottomTableData[columnIndex+"68"])); // D66-D68
    bottomTableData[columnIndex+"70"] = Formula70; // Total: GP Total

    var Formula71 = convertAmount(((bottomTableData[columnIndex+"69"]/bottomTableData[columnIndex+"65"])*100)); // (D69/D65)*100 (perc) 
    bottomTableData[columnIndex+"71"] = Formula71; // Total: GP Margin
}
function calculateKToRColumn() {
    var player = GetPlayer();
    // input dropdowns variables
    var M15 = player.GetVar("M15"); // Price Positioning
    var N15 = player.GetVar("N15"); // Price Promo
    var O15 = player.GetVar("O15"); // Assortment
    var P15 = player.GetVar("P15"); // Packaging
    var Q15 = player.GetVar("Q15"); // VA Gifts
    var R15 = player.GetVar("R15"); // Advertising Spend

    defineStaticPlanningScenarioData();
    
    var FormulaL91=FormulaL82=1+planningScenarioData['D16'];
    var FormulaM73=FormulaM74=FormulaM82=FormulaM83=FormulaM91=FormulaM92=FormulaM100=FormulaM101=FormulaM118=FormulaM119=FormulaM128=FormulaM136=FormulaM137=FormulaN90=FormulaN91=FormulaN92=FormulaO73=FormulaO82=FormulaO91=FormulaO100=FormulaO118=FormulaO136=FormulaP73=FormulaP76=FormulaP82=FormulaP85=FormulaP91=FormulaP94=FormulaP100=FormulaP109=FormulaP118=FormulaP130=FormulaP136=FormulaP139=FormulaQ91=FormulaQ127=FormulaQ130=FormulaR65=FormulaR73=FormulaR82=FormulaR91=FormulaR100=FormulaR109=FormulaR118=FormulaR136=0;
    
    // M
    if(M15 == "A"){
        
        FormulaM73 = FormulaM82 = FormulaM91 = FormulaM100 = FormulaM118 = FormulaM136 = 1+planningScenarioData['D20'];
        FormulaM74 = FormulaM83 = FormulaM92 = FormulaM101 = FormulaM119 = FormulaM128 = FormulaM137 = 1+planningScenarioData['F20'];
    }
    else if(M15 == "B"){
        FormulaM73 = FormulaM82 = FormulaM91 = FormulaM100 = FormulaM118 = FormulaM136 = 1+planningScenarioData['D21'];;
        FormulaM74 = FormulaM83 = FormulaM92 = FormulaM101 = FormulaM119 = FormulaM128 = FormulaM137 = 1+planningScenarioData['F21'];
    }
    else{
        FormulaM73 = FormulaM82 = FormulaM91 = FormulaM100 = FormulaM118 = FormulaM136 = 1+planningScenarioData['D22'];
        FormulaM74 = FormulaM83 = FormulaM92 = FormulaM101 = FormulaM119 = FormulaM128 = FormulaM137 = 1+planningScenarioData['F22'];
    }
    // N
    if(N15 == "A"){
        FormulaN90 = planningScenarioData['E40'];
        FormulaN91 = 1+planningScenarioData['D40'];
        FormulaN92 = 1+planningScenarioData['F40'];
    }
    else if(N15 == "B"){
        FormulaN90 = planningScenarioData['E41'];
        FormulaN91 = 1+planningScenarioData['D41'];
        FormulaN92 = 1+planningScenarioData['F41'];
    }
    else if(N15 == "C"){
        FormulaN90 = planningScenarioData['E42'];
        FormulaN91 = 1+planningScenarioData['D42'];
        FormulaN92 = 1+planningScenarioData['F42'];
    }
    else{
        FormulaN90 = planningScenarioData['E43'];
        FormulaN91 = 1+planningScenarioData['D43'];
        FormulaN92 = 1+planningScenarioData['F43'];
    }
    // O
    if(O15 == "A"){
        FormulaO73 = planningScenarioData['D30'];
        FormulaO82 = 1+planningScenarioData['D36'];
        FormulaO91 = 1+planningScenarioData['D37'];
        FormulaO100 = planningScenarioData['D31'];
        FormulaO118 = planningScenarioData['D32'];
        FormulaO136 = planningScenarioData['D34'];
    }
    else if(O15 == "B"){
        FormulaO73 = planningScenarioData['E30'];
        FormulaO82 = 1+planningScenarioData['E36'];
        FormulaO91 = 1+planningScenarioData['E37'];
        FormulaO100 = planningScenarioData['E31'];
        FormulaO118 = planningScenarioData['E32'];
        FormulaO136 = planningScenarioData['E34'];
    }
    else{
        FormulaO73 = planningScenarioData['E30'];
        FormulaO82 = 1+planningScenarioData['F36'];
        FormulaO91 = 1+planningScenarioData['F37'];
        FormulaO100 = planningScenarioData['F31'];
        FormulaO118 = planningScenarioData['F32'];
        FormulaO136 = planningScenarioData['F34'];
    }
    // P
    if(P15 == "A"){
        FormulaP73 = FormulaP82 = FormulaP91 = FormulaP100 = FormulaP109 = FormulaP118 = FormulaP136 = 1+planningScenarioData['D46'];
        FormulaP76 = FormulaP85 = FormulaP94 = FormulaP139 = FormulaP130 = planningScenarioData['G46'];
    }
    else if(P15 == "B"){
        FormulaP73 = FormulaP82 = FormulaP91 = FormulaP100 = FormulaP109 = FormulaP118 = FormulaP136 = 1+planningScenarioData['D47'];
        FormulaP76 = FormulaP85 = FormulaP94 = FormulaP139 = FormulaP130 = planningScenarioData['G47'];
    }
    else{
        FormulaP73 = FormulaP82 = FormulaP91 = FormulaP100 = FormulaP109 = FormulaP118 = FormulaP136 = 1+planningScenarioData['D48'];
        FormulaP76 = FormulaP85 = FormulaP94 = FormulaP139 = FormulaP130 = planningScenarioData['G48'];
    }
    // Q
    if(Q15 == "A"){
        FormulaQ91 = planningScenarioData['D56'];
        FormulaQ127 = planningScenarioData['D51'];
        FormulaQ130 = planningScenarioData['F51'];
    }
    else if(Q15 == "B"){
        FormulaQ91 = planningScenarioData['D57'];
        FormulaQ127 = planningScenarioData['D52'];
        FormulaQ130 = planningScenarioData['F52'];
    }
    else if(Q15 == "C"){
        FormulaQ91 = planningScenarioData['D58'];
        FormulaQ127 = planningScenarioData['D53'];
        FormulaQ130 = planningScenarioData['F53'];
    }
    else{
        FormulaQ91 = planningScenarioData['D59'];
        FormulaQ127 = planningScenarioData['D54'];
        FormulaQ130 = planningScenarioData['F54'];
    }
    
    // R
    if(R15 == "A"){
        FormulaR65 = planningScenarioData['H62'];
        FormulaR73 = FormulaR82 = FormulaR91 = FormulaR100 = FormulaR109 = FormulaR118 = FormulaR136 = 1+planningScenarioData['D62'];
    }
    else if(R15 == "B"){
        FormulaR65 = planningScenarioData['H63'];
        FormulaR73 = FormulaR82 = FormulaR91 = FormulaR100 = FormulaR109 = FormulaR118 = FormulaR136 = 1+planningScenarioData['D63'];
    }
    else{
        FormulaR65 = planningScenarioData['H64'];
        FormulaR73 = FormulaR82 = FormulaR91 = FormulaR100 = FormulaR109 = FormulaR118 = FormulaR136 = 1+planningScenarioData['D64'];
    }
    
    bottomTableData["L82"] = FormulaL82;
    bottomTableData["L91"] = FormulaL91;
    bottomTableData["M73"] = FormulaM73;
    bottomTableData["M74"] = FormulaM74;
    bottomTableData["M82"] = FormulaM82;
    bottomTableData["M83"] = FormulaM83
    bottomTableData["M91"] = FormulaM91;
    bottomTableData["M92"] = FormulaM92;
    bottomTableData["M100"] = FormulaM100;
    bottomTableData["M101"] = FormulaM101
    bottomTableData["M118"] = FormulaM118
    bottomTableData["M119"] = FormulaM119;
    bottomTableData["M128"] = FormulaM128;
    bottomTableData["M136"] = FormulaM136;
    bottomTableData["M137"] = FormulaM137;
    bottomTableData["N90"] = FormulaN90;
    bottomTableData["N91"] = FormulaN91;
    bottomTableData["N92"] = FormulaN92;
    bottomTableData["O73"] = FormulaO73;
    bottomTableData["O82"] = FormulaO82;
    bottomTableData["O91"] = FormulaO91;
    bottomTableData["O100"] = FormulaO100;
    bottomTableData["O118"] = FormulaO118;
    bottomTableData["O136"] = FormulaO136;
    bottomTableData["P73"] = FormulaP73;
    bottomTableData["P76"] = FormulaP76;
    bottomTableData["P82"] = FormulaP82;
    bottomTableData["P85"] = FormulaP85
    bottomTableData["P91"] = FormulaP91;
    bottomTableData["P94"] = FormulaP94;
    bottomTableData["P100"] = FormulaP100;
    bottomTableData["P109"] = FormulaP109;
    bottomTableData["P103"] = 0;
    bottomTableData["P118"] = FormulaP118;
    bottomTableData["P121"] = 0;
    bottomTableData["P130"] = FormulaP130;
    bottomTableData["P136"] = FormulaP136;
    bottomTableData["P139"] = FormulaP139;
    bottomTableData["Q91"] = FormulaQ91;
    bottomTableData["Q127"] = FormulaQ127;
    bottomTableData["Q130"] = FormulaQ130;
    bottomTableData["R65"] = FormulaR65;
    bottomTableData["R73"] = FormulaR73;
    bottomTableData["R82"] = FormulaR82;
    bottomTableData["R91"] = FormulaR91;
    bottomTableData["R100"] = FormulaR100;
    bottomTableData["R109"] = FormulaR109;
    bottomTableData["R118"] = FormulaR118;
    bottomTableData["R136"] = FormulaR136;

    // MEDIA R65===============
    bottomTableData["R65"] = convertAmount(FormulaR65);
    bottomTableData["N90"] = convertAmount(FormulaN90);

    // 750 Ml===============
    var FormulaK139 = convertAmount(evaluateFormula(bottomTableData['E139']+"+"+bottomTableData['P139'])); // 'E139+P139'
    bottomTableData["K139"] = FormulaK139;

    var FormulaK137 = convertAmount(evaluateFormula(bottomTableData['E137']+"*"+bottomTableData['M137'])); // 'E137*M137'
    bottomTableData["K137"] = FormulaK137;
    
    // K91
    var FormulaK91 = convertAmount(evaluateFormula('('+bottomTableData['E91']+"*"+bottomTableData['L91']+"*"+bottomTableData['M91']+"*"+bottomTableData['O91']+"*"+bottomTableData['N91']+"*"+bottomTableData['P91']+"*"+bottomTableData['R91']+')+'+bottomTableData['Q91'])); // (E91*L91*M91*O91*N91*P91*R91)+Q91)
    bottomTableData["K91"] = FormulaK91;

    // K136
    var FormulaK136 = convertAmount(evaluateFormula('('+bottomTableData['K91']+"*"+bottomTableData['O136']+')*'+bottomTableData['M136']+'*'+bottomTableData['P136']+'*'+bottomTableData['R136'])); // (K$91*O136)*M136*P136*R136)
    bottomTableData["K136"] = FormulaK136;

    // 750ml VAP===================
    // K130
    var FormulaK130 = convertAmount(evaluateFormula(bottomTableData['E130']+"+"+bottomTableData['P130']+'+'+bottomTableData['Q130'])); // E130+P130+Q130
    bottomTableData["K130"] = FormulaK130;
    // K128
    var FormulaK128 = convertAmount(evaluateFormula(bottomTableData['E128']+"*"+bottomTableData['M128'])); // E128*M128
    bottomTableData["K128"] = FormulaK128;
    // K127
    var FormulaK127 = convertAmount(bottomTableData['Q127']); // Q127
    bottomTableData["K127"] = FormulaK127;

    // 50ml===================
    // K121
    var FormulaK121 = convertAmount(evaluateFormula(bottomTableData['E121']+"+"+bottomTableData['P121'])); // E121+P121
    bottomTableData["K121"] = FormulaK121;
    // K119
    var FormulaK119 = convertAmount(evaluateFormula(bottomTableData['E119']+"*"+bottomTableData['M119'])); // E119*M119
    bottomTableData["K119"] = FormulaK119;
    // K118
    var FormulaK118 = convertAmount(evaluateFormula('('+bottomTableData['K91']+"*"+bottomTableData['O118']+')*'+bottomTableData['M118']+'*'+bottomTableData['P118']+'*'+bottomTableData['R118'])); // (K$91*O118)*M118*P118*R118
    bottomTableData["K118"] = FormulaK118;

    // 200ml===================
    // NO K column calculation

    // 375ml===================
    // K103
    var FormulaK103 = convertAmount(evaluateFormula(bottomTableData['E103']+"+"+bottomTableData['P103'])); // E103+P103
    bottomTableData["K103"] = FormulaK103;
    // K101
    var FormulaK101 = convertAmount(evaluateFormula(bottomTableData['E101']+"*"+bottomTableData['M101'])); // E101*M101
    bottomTableData["K101"] = FormulaK101;
    // K100
    var FormulaK100 = convertAmount(evaluateFormula('('+bottomTableData['K91']+"*"+bottomTableData['O100']+')*'+bottomTableData['M100']+'*'+bottomTableData['P100']+'*'+bottomTableData['R100'])); // (K$91*O100)*M100*P100*R100
    bottomTableData["K100"] = FormulaK100;

    // 750ml===================
    // K94
    var FormulaK94 = convertAmount(evaluateFormula(bottomTableData['E94']+"+"+bottomTableData['P94'])); // E103+P103
    bottomTableData["K94"] = FormulaK94;
    // K92
    var FormulaK92 = convertAmount(evaluateFormula(bottomTableData['E92']+"*"+bottomTableData['M92']+"*"+bottomTableData['N92'])); // E92*M92*N92
    bottomTableData["K92"] = FormulaK92;

    // 1 L=================================
    // K85
    var FormulaK85 = convertAmount(evaluateFormula(bottomTableData['E85']+"+"+bottomTableData['P85'])); // E85+P85
    bottomTableData["K85"] = FormulaK85;
    // K83
    var FormulaK83 = convertAmount(evaluateFormula(bottomTableData['E83']+"*"+bottomTableData['M83'])); // E83*M83
    bottomTableData["K83"] = FormulaK83;
    // K82 
    var FormulaK82 = convertAmount(evaluateFormula('('+bottomTableData['E82']+"*"+bottomTableData['L82']+"*"+bottomTableData['M82']+"*"+bottomTableData['O82']+"*"+bottomTableData['P82']+"*"+bottomTableData['R82']+')')); // (E82*L82*M82*O82*P82*R82)
    bottomTableData["K82"] = FormulaK82;

    // 1.75 L=================================
    // K76
    var FormulaK76 = convertAmount(evaluateFormula(bottomTableData['E76']+"+"+bottomTableData['P76'])); // E76+P76
    bottomTableData["K76"] = FormulaK76;
    // K74
    var FormulaK74 = convertAmount(evaluateFormula(bottomTableData['E74']+"*"+bottomTableData['M74'])); // E74*M74
    bottomTableData["K74"] = FormulaK74;
    // K73 
    var FormulaK73 = convertAmount(evaluateFormula('('+bottomTableData['K91']+"*"+bottomTableData['O73']+")*"+bottomTableData['M73']+"*"+bottomTableData['P73']+"*"+bottomTableData['R73'])); // (K$91*O73)*M73*P73*R73
    bottomTableData["K73"] = FormulaK73;
}
function calculateBottomTable(columnIndex,columnName="") {
    var player = GetPlayer();
    if(columnIndex == "H"){
        // 1.75L
        bottomTableData[columnIndex+"73"] = bottomTableData["K73"]; // Case Volume
        bottomTableData[columnIndex+"74"] = bottomTableData["K74"]; // Price/9L (SNS)
        bottomTableData[columnIndex+"76"] = bottomTableData["K76"]; // COS/9L
        // 1L 
        bottomTableData[columnIndex+"82"] = bottomTableData["K82"]; // Case Volume
        bottomTableData[columnIndex+"83"] = bottomTableData["K83"]; // Price/9L (SNS)
        bottomTableData[columnIndex+"85"] = bottomTableData["K85"]; // COS/9L
        // 750 ml
        bottomTableData[columnIndex+"91"] = bottomTableData["K91"]; // Case Volume
        bottomTableData[columnIndex+"92"] = bottomTableData["K92"]; // Price/9L (SNS)
        bottomTableData[columnIndex+"94"] = bottomTableData["K94"]; // COS/9L
        // 375 ml
        bottomTableData[columnIndex+"100"] = bottomTableData["K100"]; // Case Volume
        bottomTableData[columnIndex+"101"] = bottomTableData["K101"]; // Price/9L (SNS)
        bottomTableData[columnIndex+"103"] = bottomTableData["K103"]; // COS/9L
        // 50 ml
        bottomTableData[columnIndex+"118"] = bottomTableData["K118"]; // Case Volume
        bottomTableData[columnIndex+"119"] = bottomTableData["K119"]; // Price/9L (SNS)
        bottomTableData[columnIndex+"121"] = bottomTableData["K121"]; // COS/9L
        // 750ml VAP
        bottomTableData[columnIndex+"127"] = bottomTableData["K127"]; // Case Volume
        bottomTableData[columnIndex+"128"] = bottomTableData["K128"]; // Price/9L (SNS)
        bottomTableData[columnIndex+"130"] = bottomTableData["K130"]; // COS/9L
        //750ml
        bottomTableData[columnIndex+"136"] = bottomTableData["K136"]; // Case Volume
        bottomTableData[columnIndex+"137"] = bottomTableData["K137"]; // Price/9L (SNS)
        bottomTableData[columnIndex+"139"] = bottomTableData["K139"]; // COS/9L
    }
    // 1.75L === D73 to D80
    var Formula75 = convertAmount(evaluateFormula(columnIndex+'73*'+columnIndex+'74')); // 'D73*D74'
    bottomTableData[columnIndex+"75"] = Formula75; // Total SNS
    var Formula77 = convertAmount(evaluateFormula(columnIndex+'76*'+columnIndex+'73')); // 'D76*D73'
    bottomTableData[columnIndex+"77"] = Formula77; // COS Total
    var Formula78 = convertAmount(evaluateFormula(columnIndex+'74-'+columnIndex+'76')); // 'D74-D76'
    bottomTableData[columnIndex+"78"] = Formula78; // GP/9L
    var Formula79 = convertAmount(evaluateFormula(columnIndex+'75-'+columnIndex+'77')); // 'D75-D77'
    bottomTableData[columnIndex+"79"] = Formula79; // GP Total
    var Formula80 = convertAmount(evaluateFormula(columnIndex+'78/'+columnIndex+'74') * 100); // '(D78/D74)*100 (perc)'
    bottomTableData[columnIndex+"80"] = Formula80; // GP Margin
    // 1L === D82 to D89
    var Formula84 = convertAmount(evaluateFormula(columnIndex+'82*'+columnIndex+'83')); // 'D82*D83'
    bottomTableData[columnIndex+"84"] = Formula84; // Total SNS
    var Formula86 = convertAmount(evaluateFormula(columnIndex+'85*'+columnIndex+'82')); // 'D85*D82'
    bottomTableData[columnIndex+"86"] = Formula86; // COS Total
    var Formula87 = convertAmount(evaluateFormula(columnIndex+'83-'+columnIndex+'85'),2); // 'D83-D85'
    bottomTableData[columnIndex+"87"] = Formula87; // GP/9L
    var Formula88 = convertAmount(evaluateFormula(columnIndex+'84-'+columnIndex+'86')); // 'D84-D86'
    bottomTableData[columnIndex+"88"] = Formula88; // GP Total
    var Formula89 = convertAmount(evaluateFormula(columnIndex+'87/'+columnIndex+'83') * 100); // '(D87/D83)*100 (perc)'
    bottomTableData[columnIndex+"89"] = Formula89; // GP Margin
    // 750 ml === D91 to D98
    var Formula93 = convertAmount(evaluateFormula(columnIndex+'91*'+columnIndex+'92')); // 'D91*D92'
    bottomTableData[columnIndex+"93"] = Formula93; // Total SNS
    var Formula95 = convertAmount(evaluateFormula(columnIndex+'94*'+columnIndex+'91')); // 'D91*D92'
    bottomTableData[columnIndex+"95"] = Formula95; // COS Total
    var Formula96 = convertAmount(evaluateFormula(columnIndex+'92-'+columnIndex+'94')); // 'D92-D94'
    bottomTableData[columnIndex+"96"] = Formula96; // GP/9L
    var Formula97 = convertAmount(evaluateFormula(columnIndex+'93-'+columnIndex+'95')); // 'D93-D95'
    bottomTableData[columnIndex+"97"] = Formula97; // GP Total
    var Formula98 = convertAmount(evaluateFormula(columnIndex+'96/'+columnIndex+'92') * 100); // '(D96/D92)*100 (perc)'
    bottomTableData[columnIndex+"98"] = Formula98; // GP Margin
    // 375 ml === D100 to D107
    var Formula102 = convertAmount(evaluateFormula(columnIndex+'100*'+columnIndex+'101')); // 'D100*D101'
    bottomTableData[columnIndex+"102"] = Formula102; // Total SNS
    var Formula104 = convertAmount(evaluateFormula(columnIndex+'103*'+columnIndex+'100')); // 'D103*D100'
    bottomTableData[columnIndex+"104"] = Formula104; // COS Total
    var Formula105 = convertAmount(evaluateFormula(columnIndex+'101-'+columnIndex+'103')); // 'D101-D103'
    bottomTableData[columnIndex+"105"] = Formula105; // GP/9L
    var Formula106 = convertAmount(evaluateFormula(columnIndex+'102-'+columnIndex+'104')); // 'D102-D104'
    bottomTableData[columnIndex+"106"] = Formula106; // GP Total
    var Formula107 = convertAmount(evaluateFormula(columnIndex+'105/'+columnIndex+'101') * 100); // '(D105/D101)*100 (perc)'
    bottomTableData[columnIndex+"107"] = Formula107; // GP Margin
    // 200 ml === D109 to D116
    var Formula111 = convertAmount(evaluateFormula(columnIndex+'109*'+columnIndex+'110')); // 'D109*D110'
    bottomTableData[columnIndex+"111"] = Formula111; // Total SNS
    var Formula113 = convertAmount(evaluateFormula(columnIndex+'112*'+columnIndex+'109')); // 'D112*D109'
    bottomTableData[columnIndex+"113"] = Formula113; // COS Total
    var Formula114 = convertAmount(evaluateFormula(columnIndex+'110-'+columnIndex+'112')); // 'D110-D112'
    bottomTableData[columnIndex+"114"] = Formula114; // GP/9L
    var Formula115 = convertAmount(evaluateFormula(columnIndex+'111-'+columnIndex+'113')); // 'D111-D113'
    bottomTableData[columnIndex+"115"] = Formula115; // GP Total
    var Formula116 = convertAmount(evaluateFormula(columnIndex+'114/'+columnIndex+'110') * 100); // '(D114/D110)*100 (perc)'
    bottomTableData[columnIndex+"116"] = Formula116; // GP Margin
    // 50 ml === D118 to D125
    var Formula120 = convertAmount(evaluateFormula(columnIndex+'118*'+columnIndex+'119')); // 'D118*D119'
    bottomTableData[columnIndex+"120"] = Formula120; // Total SNS
    var Formula122 = convertAmount(evaluateFormula(columnIndex+'121*'+columnIndex+'118')); // 'D121*D118'
    bottomTableData[columnIndex+"122"] = Formula122; // COS Total
    var Formula123 = convertAmount(evaluateFormula(columnIndex+'119-'+columnIndex+'121')); // 'D119-D121'
    bottomTableData[columnIndex+"123"] = Formula123; // GP/9L
    var Formula124 = convertAmount(evaluateFormula(columnIndex+'120-'+columnIndex+'122')); // 'D120-D122'
    bottomTableData[columnIndex+"124"] = Formula124; // GP Total
    var Formula125 = convertAmount(evaluateFormula(columnIndex+'123/'+columnIndex+'119') * 100); // '(D123/D119)*100 (perc)'
    bottomTableData[columnIndex+"125"] = Formula125; // GP Margin
    // 750ml VAP === D127 to D134
    var Formula129 = convertAmount(evaluateFormula(columnIndex+'127*'+columnIndex+'128')); // 'D127*D128'
    bottomTableData[columnIndex+"129"] = Formula129; // Total SNS
    var Formula131 = convertAmount(evaluateFormula(columnIndex+'130*'+columnIndex+'127')); // 'D130*D127'
    bottomTableData[columnIndex+"131"] = Formula131; // COS Total
    var Formula132 = convertAmount(evaluateFormula(columnIndex+'128-'+columnIndex+'130')); // 'D128-D130'
    bottomTableData[columnIndex+"132"] = Formula132; // GP/9L
    var Formula133 = convertAmount(evaluateFormula(columnIndex+'129-'+columnIndex+'131')); // 'D129-D131'
    bottomTableData[columnIndex+"133"] = Formula133; // GP Total
    var Formula134 = convertAmount(evaluateFormula(columnIndex+'132/'+columnIndex+'128') * 100); // '(D132/D128)*100 (perc)'
    bottomTableData[columnIndex+"134"] = Formula134; // GP Margin
    // 750ml === D136 to D143
    var Formula138 = convertAmount(evaluateFormula(columnIndex+'136*'+columnIndex+'137')); // 'D136*D137'
    bottomTableData[columnIndex+"138"] = Formula138; // Total SNS
    if(columnIndex != "H"){
        var Formula139 = convertAmount(bottomTableData[columnIndex+'94']*1.2); // 'D94*1.2'
        bottomTableData[columnIndex+"139"] = Formula139; // COS/9L
    }
    var Formula140 = convertAmount(evaluateFormula(columnIndex+'139*'+columnIndex+'136')); // 'D139*D136'
    bottomTableData[columnIndex+"140"] = Formula140; // COS Total
    var Formula141 = convertAmount(evaluateFormula(columnIndex+'137-'+columnIndex+'139')); // 'D137-D139'
    bottomTableData[columnIndex+"141"] = Formula141; // GP/9L
    var Formula142 = convertAmount(evaluateFormula(columnIndex+'138-'+columnIndex+'140')); // 'D138-D140'
    bottomTableData[columnIndex+"142"] = Formula142; // GP Total
    var Formula143 = convertAmount(evaluateFormula(columnIndex+'141/'+columnIndex+'137') * 100); // '(D141/D137)*100 (perc)'
    bottomTableData[columnIndex+"143"] = Formula143; // GP Margin
}
function displayValuesForColoredTable(){
    // var player = GetPlayer();
    setVariableData("M2",bottomTableData["I15"], "percentage", 1, true);
    setVariableData("M3",bottomTableData["I29"], "percentage", 1, true);
    setVariableData("M4",bottomTableData["I30"], "percentage", 1, true);
    setVariableData("M5",bottomTableData["I35"], "percentage", 1, true);
    setVariableData("M6",bottomTableData["I37"], "percentage", 1, true);
    setVariableData("M7",bottomTableData["I39"], "percentage", 1, true);
    setVariableData("M8",bottomTableData["I40"], "percentage", 1, true);
    setVariableData("M9",bottomTableData["I42"], "percentage", 1, true);
    setVariableData("M10",bottomTableData["I47"], "percentage", 1, true);
    setVariableData("M11",bottomTableData["I48"], "percentage", 1, true);
}
function convertAmount(amount, allowConversion=false){
    if(allowConversion){
        amount = (amount/1000);
    }
    return Number(amount);
}
function setVariableData(key, value, valueType, fractionDigit="", showSign=false){
    // Check if the result is very close to zero, and if so, set it to 0.00
    if (Math.abs(value) < 1e-10) {
        value = 0.00;
    }
    var unformatedValue = formatedValue = Number(value);
    var player = GetPlayer();
    bottomTableData[key] = value;
    if(valueType == "amount"){
        formatedValue = unformatedValue.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: fractionDigit,
        // maximumFractionDigits: getDecimalLength(value),
        maximumFractionDigits: fractionDigit,
        useGrouping: true,
        });
    }
    else if(valueType == "percentage"){
        unformatedValue = unformatedValue/100;
        formatedValue = (unformatedValue).toLocaleString('en-GB', {
            style: 'percent',
            minimumFractionDigits: fractionDigit,
            maximumFractionDigits: fractionDigit,
            useGrouping: true,
            });
            if (showSign)
            {
                if(unformatedValue != 0){
                    var sign = unformatedValue >= 0 ? '+':'';
                    formatedValue = sign+formatedValue;
                }
                else{
                    formatedValue = "-"
                }
            }
            if(key == "I48" || key == "F48" || key == "I45" || key == "F45" || key == "I40" || key == "F40" || key == "I37" || key == "F37" || key == "M6" || key == "M8" || key == "M11"){
                if(formatedValue != "-"){
                    formatedValue += " pts";
                }
            }
    }

    player.SetVar(key,formatedValue);
}
function getDecimalLength(number) {
    if (number % 1 !== 0) {
      const decimalPart = number.toString().split('.')[1];
      return decimalPart.length;
    } else {
      return 0; // If there are no decimal values, return 0
    }
  }
// Create a function to evaluate a formula
function evaluateFormula(formula, isElement) {
    var player = GetPlayer();
    // Replace cell references with their values
    var replacedFormula = formula.replace(/\b[A-Z]+\d+\b/g, function (match) {
    //   var data = (isElement) ? player.GetVar(match) : bottomTableData[match];
    var data = bottomTableData[match];
      return data || 0; // Default to 0 if the cell reference is not found
    });
    // console.log(replacedFormula)
    try {
      var result = eval(replacedFormula);
      return result;
    } catch (error) {
      console.error('Error evaluating formula:', error);
      return NaN;
    }
}