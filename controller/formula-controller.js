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
        
        component11 = 0;
        component22 = 0;
        component33 = 0;
        if(component1 == 'Collagen'){
            component11 = '5bf261649740b128788f18d9'
        }
        else if(component1 == 'Fiber'){
            component11 = '5bf2616e59f86d3d406b8032'
        }
        else if(component1 == 'Antioxidant'){
            component11 = '5bf261769740b128788f18da'
        }
        else if(component1 == 'Vitamin A'){
            component11 = '5bf2618959f86d3d406b8033'
        }
        else if(component1 == 'Vitamin B'){
            component11 = '5bf261a459f86d3d406b8034'
        }
        else if(component1 == 'Vitamin C'){
            component11 = '5bf261c959f86d3d406b8035'
        }
        else if(component1 == 'Vitamin E'){
            component11 = '5bf261f959f86d3d406b8036'
        }
        else if(component1 == 'Vitamin K'){
            component11 = '5bf2622459f86d3d406b8037'
        }
        else if(component1 == 'Fe'){
            component11 = '5bf261889740b128788f18db'
        }
        else if(component1 == 'L-Carnitine'){
            component11 = '5bf261999740b128788f18dc'
        }
        else if(component1 == 'Folate'){
            component11 = '5bf261ae9740b128788f18dd'
        }
        else if(component1 == 'Calcium'){
            component11 = '5bf261c19740b128788f18de'
        }
        else if(component1 == 'Beta Carotene'){
            component11 = '5bf261ed9740b128788f18df'
        }
        else if(component1 == 'Fe'){
            component11 = '5bf261889740b128788f18db'
        }

        if(component2 == 'Collagen'){
            component22 = '5bf261649740b128788f18d9'
        }
        else if(component2 == 'Fiber'){
            component22 = '5bf2616e59f86d3d406b8032'
        }
        else if(component2 == 'Antioxidant'){
            component22 = '5bf261769740b128788f18da'
        }
        else if(component2 == 'Vitamin A'){
            component22 = '5bf2618959f86d3d406b8033'
        }
        else if(component2 == 'Vitamin B'){
            component22 = '5bf261a459f86d3d406b8034'
        }
        else if(component2 == 'Vitamin C'){
            component22 = '5bf261c959f86d3d406b8035'
        }
        else if(component2 == 'Vitamin E'){
            component22 = '5bf261f959f86d3d406b8036'
        }
        else if(component2 == 'Vitamin K'){
            component22 = '5bf2622459f86d3d406b8037'
        }
        else if(component2 == 'Fe'){
            component22 = '5bf261889740b128788f18db'
        }
        else if(component2 == 'L-Carnitine'){
            component22 = '5bf261999740b128788f18dc'
        }
        else if(component2 == 'Folate'){
            component22 = '5bf261ae9740b128788f18dd'
        }
        else if(component2 == 'Calcium'){
            component22 = '5bf261c19740b128788f18de'
        }
        else if(component2 == 'Beta Carotene'){
            component22 = '5bf261ed9740b128788f18df'
        }
        else if(component2 == 'Fe'){
            component22 = '5bf261889740b128788f18db'
        }

        if(component3 == 'Collagen'){
            component33 = '5bf261649740b128788f18d9'
        }
        else if(component3 == 'Fiber'){
            component33 = '5bf2616e59f86d3d406b8032'
        }
        else if(component3 == 'Antioxidant'){
            component33 = '5bf261769740b128788f18da'
        }
        else if(component3 == 'Vitamin A'){
            component33 = '5bf2618959f86d3d406b8033'
        }
        else if(component3 == 'Vitamin B'){
            component33 = '5bf261a459f86d3d406b8034'
        }
        else if(component3 == 'Vitamin C'){
            component33 = '5bf261c959f86d3d406b8035'
        }
        else if(component3 == 'Vitamin E'){
            component33 = '5bf261f959f86d3d406b8036'
        }
        else if(component3 == 'Vitamin K'){
            component33 = '5bf2622459f86d3d406b8037'
        }
        else if(component3 == 'Fe'){
            component33 = '5bf261889740b128788f18db'
        }
        else if(component3 == 'L-Carnitine'){
            component33 = '5bf261999740b128788f18dc'
        }
        else if(component3 == 'Folate'){
            component33 = '5bf261ae9740b128788f18dd'
        }
        else if(component3 == 'Calcium'){
            component33 = '5bf261c19740b128788f18de'
        }
        else if(component3 == 'Beta Carotene'){
            component33 = '5bf261ed9740b128788f18df'
        }
        else if(component3 == 'Fe'){
            component33 = '5bf261889740b128788f18db'
        }

        const formula = new Formula();

        formula.formulaname = formulaname;
        formula.component1 = component11;
        formula.component2 = component22;
        formula.component3 = component33;
        formula.save();
        req.flash('success','successful');
        res.redirect('/formula/add');

    }
    catch (e) {
        HandingErorr(res, e)
    }
}