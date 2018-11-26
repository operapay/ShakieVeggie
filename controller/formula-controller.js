let Formula = require('../models/formula');
const {HandingErorr} = require('./handingError')
exports.formula = async (req, res, next) => {
    try {
        const {
            formulaname,
            component1,
            component2,
            component3,
        } = req.body;
        
        // if(component1 == 'Collagen'){
        //     component1 = '5bf261649740b128788f18d9'
        // }
        // else if(component1 == 'Fiber'){
        //     component1 = '5bf2616e59f86d3d406b8032'
        // }
        // else if(component1 == 'Antioxidant'){
        //     component1 = '5bf261769740b128788f18da'
        // }
        // else if(component1 == 'Vitamin A'){
        //     component1 = '5bf2618959f86d3d406b8033'
        // }
        // else if(component1 == 'Vitamin B'){
        //     component1 = '5bf261a459f86d3d406b8034'
        // }
        // else if(component1 == 'Vitamin C'){
        //     component1 = '5bf261c959f86d3d406b8035'
        // }
        // else if(component1 == 'Vitamin E'){
        //     component1 = '5bf261f959f86d3d406b8036'
        // }
        // else if(component1 == 'Vitamin K'){
        //     component1 = '5bf2622459f86d3d406b8037'
        // }
        // else if(component1 == 'Fe'){
        //     component1 = '5bf261889740b128788f18db'
        // }
        // else if(component1 == 'L-Carnitine'){
        //     component1 = '5bf261999740b128788f18dc'
        // }
        // else if(component1 == 'Folate'){
        //     component1 = '5bf261ae9740b128788f18dd'
        // }
        // else if(component1 == 'Calcium'){
        //     component1 = '5bf261c19740b128788f18de'
        // }
        // else if(component1 == 'Beta Carotene'){
        //     component1 = '5bf261ed9740b128788f18df'
        // }
        // else if(component1 == 'Fe'){
        //     component1 = '5bf261889740b128788f18db'
        // }

        // if(component2 == 'Collagen'){
        //     component2 = '5bf261649740b128788f18d9'
        // }
        // else if(component2 == 'Fiber'){
        //     component2 = '5bf2616e59f86d3d406b8032'
        // }
        // else if(component2 == 'Antioxidant'){
        //     component2 = '5bf261769740b128788f18da'
        // }
        // else if(component2 == 'Vitamin A'){
        //     component2 = '5bf2618959f86d3d406b8033'
        // }
        // else if(component2 == 'Vitamin B'){
        //     component2 = '5bf261a459f86d3d406b8034'
        // }
        // else if(component2 == 'Vitamin C'){
        //     component2 = '5bf261c959f86d3d406b8035'
        // }
        // else if(component2 == 'Vitamin E'){
        //     component2 = '5bf261f959f86d3d406b8036'
        // }
        // else if(component2 == 'Vitamin K'){
        //     component2 = '5bf2622459f86d3d406b8037'
        // }
        // else if(component2 == 'Fe'){
        //     component2 = '5bf261889740b128788f18db'
        // }
        // else if(component2 == 'L-Carnitine'){
        //     component2 = '5bf261999740b128788f18dc'
        // }
        // else if(component2 == 'Folate'){
        //     component2 = '5bf261ae9740b128788f18dd'
        // }
        // else if(component2 == 'Calcium'){
        //     component2 = '5bf261c19740b128788f18de'
        // }
        // else if(component2 == 'Beta Carotene'){
        //     component2 = '5bf261ed9740b128788f18df'
        // }
        // else if(component2 == 'Fe'){
        //     component2 = '5bf261889740b128788f18db'
        // }

        // if(component3 == 'Collagen'){
        //     component3 = '5bf261649740b128788f18d9'
        // }
        // else if(component3 == 'Fiber'){
        //     component3 = '5bf2616e59f86d3d406b8032'
        // }
        // else if(component3 == 'Antioxidant'){
        //     component3 = '5bf261769740b128788f18da'
        // }
        // else if(component3 == 'Vitamin A'){
        //     component3 = '5bf2618959f86d3d406b8033'
        // }
        // else if(component3 == 'Vitamin B'){
        //     component3 = '5bf261a459f86d3d406b8034'
        // }
        // else if(component3 == 'Vitamin C'){
        //     component3 = '5bf261c959f86d3d406b8035'
        // }
        // else if(component3 == 'Vitamin E'){
        //     component3 = '5bf261f959f86d3d406b8036'
        // }
        // else if(component3 == 'Vitamin K'){
        //     component3 = '5bf2622459f86d3d406b8037'
        // }
        // else if(component3 == 'Fe'){
        //     component3 = '5bf261889740b128788f18db'
        // }
        // else if(component3 == 'L-Carnitine'){
        //     component3 = '5bf261999740b128788f18dc'
        // }
        // else if(component3 == 'Folate'){
        //     component3 = '5bf261ae9740b128788f18dd'
        // }
        // else if(component3 == 'Calcium'){
        //     component3 = '5bf261c19740b128788f18de'
        // }
        // else if(component3 == 'Beta Carotene'){
        //     component3 = '5bf261ed9740b128788f18df'
        // }
        // else if(component3 == 'Fe'){
        //     component3 = '5bf261889740b128788f18db'
        // }

        const formula = new Formula();

        formula.formulaname = formulaname;
        formula.component1 = component1;
        formula.component2 = component2;
        formula.component3 = component3;
        formula.save();
        req.flash('success','successful');
        res.redirect('/formula/add');

    }
    catch (e) {
        HandingErorr(res, e)
    }
}