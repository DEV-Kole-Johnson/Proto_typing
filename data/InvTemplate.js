const mpmInvoicetemplate = {
    basicOP : [
        {id: 1, ccec_unit: 'UG3.2', description: '3 Ø pad mount transformer', pricing: 'N/A', year: 2025},
        {id: 2, ccec_unit: 'UG3.2', description: '3 Ø pad mount transformer removal', pricing: 'N/A', year: 2025},
        {id: 3, ccec_unit: 'UG1.2', description: '1 Ø pad mount transformer', pricing: 280.00, year: 2025 },
        {id: 4, ccec_unit: 'UG1.2', description: '1 Ø pad mount transformer removal', pricing: 280.00, year: 2025 },
        {id: 5, ccec_unit: '25US3.PJ.FG', description: '3 Ø junction box fiberglass', pricing:  340.00, year: 2025 },
        {id: 6, ccec_unit: '25US1. PJ.FG', description: '1 Ø junction box fiberglass', pricing: 330.00, year: 2025 },
        {id: 7, ccec_unit: 'UF1.P.PP', description: 'Transformer poly pad basement', pricing:  130.00, year: 2025 },
        {id: 8, ccec_unit: 'UF1.P.FG', description: 'Transformer fiberglass basement', pricing:  350.00, year: 2025 },
        {id: 9, ccec_unit: '25US3.0', description: '3 Ø switch basement', pricing:  475.00, year: 2025 },
        {id: 10, ccec_unit: 'UM 11-1', description: 'Cable & pipeline crossing encasement', pricing:  750.00, year: 2025 },
        {id: 11, ccec_unit: 'UH1.4', description: '3 Ø ground grid', pricing:  230.00, year: 2025 },
        {id: 12, ccec_unit: '01.()', description: 'Fiberglass pole', pricing:  250.00, year: 2025 },
        {id: 13, ccec_unit: '25UM6.SP.()', description: 'Splice pit, anode pit, conduit or cable', pricing:  190.00, year: 2025 },
        {id: 14, ccec_unit: 'UH1.1', description: 'Ground rod', pricing:  40.00, year: 2025 },
        {id: 15, ccec_unit: 'UJ5.1', description: 'Secondary junction box', pricing:  190.00, year: 2025 },
        {id: 16, ccec_unit: '10. UP7.().90', description: 'Sweeps', pricing:  15.50, year: 2025 }
    ],
    mat_per_ft: [
        {id: 1, ccec_unit: '', description: '1 conduit, 24" - 35" depth', pricing: 4.25, year: 2025 },
        {id: 2, ccec_unit: '', description: '1 conduit, 48" - 60" depth', pricing: 5.50, year: 2025 },
        {id: 3, ccec_unit: 'UP8.()', description: 'Additional conduits, per conduit', pricing: 0.20, year: 2025 },
        {id: 4, ccec_unit: '', description: 'Secondary trench under 100ft. (min charge)', pricing: 850.00, year: 2025 },
        {id: 5, ccec_unit: '', description: 'Joint trench under 100ft. (min charge)', pricing: 850.00, year: 2025 }
    ],
    rat_per_ft: [
        {id: 1, ccec_unit: '', description: 'Direct buried secondaries 24"-35"', pricing: 4.00, year: 2025 },
        {id: 2, ccec_unit: '', description: 'Direct buried single phase, 48" - 60"', pricing: 5.50, year: 2025 },
        {id: 3, ccec_unit: '', description: 'Direct buried three phase 48" - 60*', pricing: 6.50, year: 2025 },
        {id: 4, ccec_unit: 'UDPJ52', description: 'Pirect buried 500mum 47" - 60*', pricing: 7.00, year: 2025 },
        {id: 5, ccec_unit: 'UDPJT2', description: 'Direct buried 750mcm 48"-60*', pricing: 7.50, year: 2025 },
        {id: 6, ccec_unit: '', description: 'Tracer wire', pricing: 0.15, year: 2025 }
    ],
    mab_per_ft: [
        {id: 1, ccec_unit: '', description: '1 conduit 24"-35" depth', pricing: 5.00, year: 2025 },
        {id: 2, ccec_unit: '', description: '1 conduit 48"-72" depth', pricing: 6.50, year: 2025 },
        {id: 3, ccec_unit: '', description: '1 condult 72"-96" depth', pricing: 8.50, year: 2025 },
        {id: 4, ccec_unit: 'UP8.0)', description: 'Additional conduits, per conduit', pricing: 0.20, year: 2025 },
        {id: 5, ccec_unit: '', description: 'Lowering cable/dig along side', pricing: 9.50, year: 2025 },
        {id: 6, ccec_unit: '', description: 'Add additional wire', pricing: 1.00, year: 2025 }
    ],
    dib_per_ft: [
        {id: 1, ccec_unit: '', description: '1 conduit conventional bore', pricing: 15.00, year: 2025 },
        {id: 2, ccec_unit: '', description: '1 condult convenience bore', pricing: 12.00, year: 2025 },
        {id: 3, ccec_unit: '', description: 'Bore and pre-ream up to 10"', pricing: 26.00, year: 2025 },
        {id: 4, ccec_unit: '', description: 'Bore and pre-ream 11* to 14"', pricing: 28.00, year: 2025 },
        {id: 5, ccec_unit: 'UP8.()', description: 'Additional conduits, per conduit', pricing: 2.00, year: 2025 }
    ],    
    vip_per_ft: [
        {id: 1, ccec_unit: '', description: 'Up to 1/0 1 phase', pricing: 4.00, year: 2025 },
        {id: 2, ccec_unit: '', description: 'Each additional phase 1/0', pricing: 0.75, year: 2025 },
        {id: 3, ccec_unit: '', description: '4/0 single phase', pricing: 4.25, year: 2025 },
        {id: 4, ccec_unit: '', description: 'Each additional phase 4/0', pricing: 1.10, year: 2025 },
        {id: 5, ccec_unit: '', description: '500mcm single phase', pricing: 5.00, year: 2025 },
        {id: 6, ccec_unit: '', description: 'Each additional phase 500mcm', pricing: 2.00, year: 2025 }
    ],
    misc_util_rates: [
        {id: 1, ccec_unit: '', description: 'Pulling 1/0 & 4/0 cable into conduit', pricing: 0.95, year: 2025 },
        {id: 2, ccec_unit: '', description: 'Pulling 500mcm cable into conduit', pricing: 1.10, year: 2025 },
        {id: 3, ccec_unit: '', description: 'Pulling 750mcm cable into condult', pricing: 2.15, year: 2025 },
        {id: 4, ccec_unit: '', description: 'Junction box removal', pricing: 340.00, year: 2025 },
        {id: 5, ccec_unit: '', description: 'Concrete vault removal', pricing: 'N/A', year: 2025 },
        {id: 6, ccec_unit: '', description: 'Frost charges, per foot', pricing: 4.00, year: 2025 },
        {id: 7, ccec_unit: '', description: 'Secondary splicing', pricing: 'N/A', year: 2025 },
        {id: 8, ccec_unit: '', description: 'Cable crossing', pricing: 55.00, year: 2025 }
    ],
    misc_util_rates: [
        {id: 1, ccec_unit: '', description: 'Water pumping', pricing: 42.00, year: 2025 },
        {id: 2, ccec_unit: '', description: 'Set up shoring per hour', pricing: 250.00, year: 2025 },
        {id: 3, ccec_unit: '', description: 'Foremen', pricing: 72.00, year: 2025 },
        {id: 4, ccec_unit: '', description: 'Operator', pricing: 65.00, year: 2025 },
        {id: 5, ccec_unit: '', description: 'General labor', pricing: 60.00, year: 2025 },
        {id: 6, ccec_unit: '', description: 'Backhoe / Mini Excavator', pricing: 90.00, year: 2025 },
        {id: 7, ccec_unit: '', description: 'Hyd. breaker on backhoe', pricing: 'N/A', year: 2025 },
        {id: 8, ccec_unit: '', description: 'Small trencher', pricing: 55.00, year: 2025 },
        {id: 9, ccec_unit: '', description: 'Large trencher', pricing: 70.00, year: 2025 },
        {id: 10, ccec_unit: '', description: 'Moving and hauling', pricing: 170.00, year: 2025 },
        {id: 11, ccec_unit: '', description: 'Tractor Backhoe', pricing: 90.00, year: 2025 },
        {id: 12, ccec_unit: '', description: 'Excavator', pricing: 'N/A', year: 2025 },
        {id: 13, ccec_unit: '', description: 'Trencher/backhoe trailer', pricing: 20.00, year: 2025 },
        {id: 14, ccec_unit: '', description: '1 ton truck', pricing: 50.00, year: 2025 },
        {id: 15, ccec_unit: '', description: '2 ton truck', pricing: 65.00, year: 2025 },
        {id: 16, ccec_unit: '', description: 'Tandom dump truck', pricing: 65.00, year: 2025 },
        {id: 17, ccec_unit: '', description: 'Compressor w/ jack hammer', pricing: 60.00, year: 2025 },
        {id: 18, ccec_unit: '', description: 'Winch truck', pricing: 65.00, year: 2025 },
        {id: 19, ccec_unit: '', description: 'Vactron', pricing: 70.00, year: 2025 },
        {id: 20, ccec_unit: '', description: 'Diamond mover', pricing: 'N/A', year: 2025 },
        {id: 21, ccec_unit: '', description: 'Jumping jack packer', pricing: 45.00, year: 2025 },
        {id: 22, ccec_unit: '', description: 'D-S CAT put cat', pricing: 'N/A', year: 2025 },
        {id: 23, ccec_unit: '', description: 'Boom truck', pricing: 'N/A', year: 2025 },
        {id: 24, ccec_unit: '', description: 'Skidsteer', pricing: 75.00, year: 2025 }
    ],
};
