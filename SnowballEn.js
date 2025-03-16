/*
This file is based on snowball-en.js in Snowball version 2.2.0.
It is converted from commonjs to ES6 module and the export is changed to a class.
*/

import BaseStemmer from './BaseStemmer';

class SnowballEn {
    constructor() {
        this.a_0 = [
            ["arsen", -1, -1],
            ["commun", -1, -1],
            ["gener", -1, -1]
        ];
    
        this.a_1 = [
            ["'", -1, 1],
            ["'s'", 0, 1],
            ["'s", -1, 1]
        ];
    
        this.a_2 = [
            ["ied", -1, 2],
            ["s", -1, 3],
            ["ies", 1, 2],
            ["sses", 1, 1],
            ["ss", 1, -1],
            ["us", 1, -1]
        ];
    
        this.a_3 = [
            ["", -1, 3],
            ["bb", 0, 2],
            ["dd", 0, 2],
            ["ff", 0, 2],
            ["gg", 0, 2],
            ["bl", 0, 1],
            ["mm", 0, 2],
            ["nn", 0, 2],
            ["pp", 0, 2],
            ["rr", 0, 2],
            ["at", 0, 1],
            ["tt", 0, 2],
            ["iz", 0, 1]
        ];
    
        this.a_4 = [
            ["ed", -1, 2],
            ["eed", 0, 1],
            ["ing", -1, 2],
            ["edly", -1, 2],
            ["eedly", 3, 1],
            ["ingly", -1, 2]
        ];
    
        this.a_5 = [
            ["anci", -1, 3],
            ["enci", -1, 2],
            ["ogi", -1, 13],
            ["li", -1, 15],
            ["bli", 3, 12],
            ["abli", 4, 4],
            ["alli", 3, 8],
            ["fulli", 3, 9],
            ["lessli", 3, 14],
            ["ousli", 3, 10],
            ["entli", 3, 5],
            ["aliti", -1, 8],
            ["biliti", -1, 12],
            ["iviti", -1, 11],
            ["tional", -1, 1],
            ["ational", 14, 7],
            ["alism", -1, 8],
            ["ation", -1, 7],
            ["ization", 17, 6],
            ["izer", -1, 6],
            ["ator", -1, 7],
            ["iveness", -1, 11],
            ["fulness", -1, 9],
            ["ousness", -1, 10]
        ];
    
        this.a_6 = [
            ["icate", -1, 4],
            ["ative", -1, 6],
            ["alize", -1, 3],
            ["iciti", -1, 4],
            ["ical", -1, 4],
            ["tional", -1, 1],
            ["ational", 5, 2],
            ["ful", -1, 5],
            ["ness", -1, 5]
        ];
    
        this.a_7 = [
            ["ic", -1, 1],
            ["ance", -1, 1],
            ["ence", -1, 1],
            ["able", -1, 1],
            ["ible", -1, 1],
            ["ate", -1, 1],
            ["ive", -1, 1],
            ["ize", -1, 1],
            ["iti", -1, 1],
            ["al", -1, 1],
            ["ism", -1, 1],
            ["ion", -1, 2],
            ["er", -1, 1],
            ["ous", -1, 1],
            ["ant", -1, 1],
            ["ent", -1, 1],
            ["ment", 15, 1],
            ["ement", 16, 1]
        ];
    
        this.a_8 = [
            ["e", -1, 1],
            ["l", -1, 2]
        ];
    
        this.a_9 = [
            ["succeed", -1, -1],
            ["proceed", -1, -1],
            ["exceed", -1, -1],
            ["canning", -1, -1],
            ["inning", -1, -1],
            ["earring", -1, -1],
            ["herring", -1, -1],
            ["outing", -1, -1]
        ];
    
        this.a_10 = [
            ["andes", -1, -1],
            ["atlas", -1, -1],
            ["bias", -1, -1],
            ["cosmos", -1, -1],
            ["dying", -1, 3],
            ["early", -1, 9],
            ["gently", -1, 7],
            ["howe", -1, -1],
            ["idly", -1, 6],
            ["lying", -1, 4],
            ["news", -1, -1],
            ["only", -1, 10],
            ["singly", -1, 11],
            ["skies", -1, 2],
            ["skis", -1, 1],
            ["sky", -1, -1],
            ["tying", -1, 5],
            ["ugly", -1, 8]
        ];
        /** Array<int> */ this.g_aeo = [17, 64];
        /** Array<int> */ this.g_v = [17, 65, 16, 1];
        /** Array<int> */ this.g_v_WXY = [1, 17, 65, 208, 1];
        /** Array<int> */ this.g_valid_LI = [55, 141, 2];
        this.base = new BaseStemmer();
        /** boolean */ this.B_Y_found = false;
        /** number */ this.I_p2 = 0;
        /** number */ this.I_p1 = 0;
    }

    /** @return {boolean} */
    r_prelude() {
        this.B_Y_found = false;
        let /** number */ v_1 = this.base.cursor;
        lab0: {
            this.base.bra = this.base.cursor;
            if (!(this.base.eq_s("'")))
            {
                break lab0;
            }
            this.base.ket = this.base.cursor;
            if (!this.base.slice_del())
            {
                return false;
            }
        }
        this.base.cursor = v_1;
        let /** number */ v_2 = this.base.cursor;
        lab1: {
            this.base.bra = this.base.cursor;
            if (!(this.base.eq_s("y")))
            {
                break lab1;
            }
            this.base.ket = this.base.cursor;
            if (!this.base.slice_from("Y"))
            {
                return false;
            }
            this.B_Y_found = true;
        }
        this.base.cursor = v_2;
        let /** number */ v_3 = this.base.cursor;
        lab2: {
            while(true)
            {
                let /** number */ v_4 = this.base.cursor;
                lab3: {
                    golab4: while(true)
                    {
                        let /** number */ v_5 = this.base.cursor;
                        lab5: {
                            if (!(this.base.in_grouping(this.g_v, 97, 121)))
                            {
                                break lab5;
                            }
                            this.base.bra = this.base.cursor;
                            if (!(this.base.eq_s("y")))
                            {
                                break lab5;
                            }
                            this.base.ket = this.base.cursor;
                            this.base.cursor = v_5;
                            break golab4;
                        }
                        this.base.cursor = v_5;
                        if (this.base.cursor >= this.base.limit)
                        {
                            break lab3;
                        }
                        this.base.cursor++;
                    }
                    if (!this.base.slice_from("Y"))
                    {
                        return false;
                    }
                    this.B_Y_found = true;
                    continue;
                }
                this.base.cursor = v_4;
                break;
            }
        }
        this.base.cursor = v_3;
        return true;
    };

    /** @return {boolean} */
    r_mark_regions() {
        this.I_p1 = this.base.limit;
        this.I_p2 = this.base.limit;
        let /** number */ v_1 = this.base.cursor;
        lab0: {
            lab1: {
                let /** number */ v_2 = this.base.cursor;
                lab2: {
                    if (this.base.find_among(this.a_0) == 0)
                    {
                        break lab2;
                    }
                    break lab1;
                }
                this.base.cursor = v_2;
                golab3: while(true)
                {
                    lab4: {
                        if (!(this.base.in_grouping(this.g_v, 97, 121)))
                        {
                            break lab4;
                        }
                        break golab3;
                    }
                    if (this.base.cursor >= this.base.limit)
                    {
                        break lab0;
                    }
                    this.base.cursor++;
                }
                golab5: while(true)
                {
                    lab6: {
                        if (!(this.base.out_grouping(this.g_v, 97, 121)))
                        {
                            break lab6;
                        }
                        break golab5;
                    }
                    if (this.base.cursor >= this.base.limit)
                    {
                        break lab0;
                    }
                    this.base.cursor++;
                }
            }
            this.I_p1 = this.base.cursor;
            golab7: while(true)
            {
                lab8: {
                    if (!(this.base.in_grouping(this.g_v, 97, 121)))
                    {
                        break lab8;
                    }
                    break golab7;
                }
                if (this.base.cursor >= this.base.limit)
                {
                    break lab0;
                }
                this.base.cursor++;
            }
            golab9: while(true)
            {
                lab10: {
                    if (!(this.base.out_grouping(this.g_v, 97, 121)))
                    {
                        break lab10;
                    }
                    break golab9;
                }
                if (this.base.cursor >= this.base.limit)
                {
                    break lab0;
                }
                this.base.cursor++;
            }
            this.I_p2 = this.base.cursor;
        }
        this.base.cursor = v_1;
        return true;
    };

    /** @return {boolean} */
    r_shortv() {
        lab0: {
            let /** number */ v_1 = this.base.limit - this.base.cursor;
            lab1: {
                if (!(this.base.out_grouping_b(this.g_v_WXY, 89, 121)))
                {
                    break lab1;
                }
                if (!(this.base.in_grouping_b(this.g_v, 97, 121)))
                {
                    break lab1;
                }
                if (!(this.base.out_grouping_b(this.g_v, 97, 121)))
                {
                    break lab1;
                }
                break lab0;
            }
            this.base.cursor = this.base.limit - v_1;
            if (!(this.base.out_grouping_b(this.g_v, 97, 121)))
            {
                return false;
            }
            if (!(this.base.in_grouping_b(this.g_v, 97, 121)))
            {
                return false;
            }
            if (this.base.cursor > this.base.limit_backward)
            {
                return false;
            }
        }
        return true;
    };

    /** @return {boolean} */
    r_R1() {
        return this.I_p1 <= this.base.cursor;
    };

    /** @return {boolean} */
    r_R2() {
        return this.I_p2 <= this.base.cursor;
    };

    /** @return {boolean} */
    r_Step_1a() {
        let /** number */ among_var;
        let /** number */ v_1 = this.base.limit - this.base.cursor;
        lab0: {
            this.base.ket = this.base.cursor;
            if (this.base.find_among_b(this.a_1) == 0)
            {
                this.base.cursor = this.base.limit - v_1;
                break lab0;
            }
            this.base.bra = this.base.cursor;
            if (!this.base.slice_del())
            {
                return false;
            }
        }
        this.base.ket = this.base.cursor;
        among_var = this.base.find_among_b(this.a_2);
        if (among_var == 0)
        {
            return false;
        }
        this.base.bra = this.base.cursor;
        switch (among_var) {
            case 1:
                if (!this.base.slice_from("ss"))
                {
                    return false;
                }
                break;
            case 2:
                lab1: {
                    let /** number */ v_2 = this.base.limit - this.base.cursor;
                    lab2: {
                        {
                            let /** number */ c1 = this.base.cursor - 2;
                            if (c1 < this.base.limit_backward)
                            {
                                break lab2;
                            }
                            this.base.cursor = c1;
                        }
                        if (!this.base.slice_from("i"))
                        {
                            return false;
                        }
                        break lab1;
                    }
                    this.base.cursor = this.base.limit - v_2;
                    if (!this.base.slice_from("ie"))
                    {
                        return false;
                    }
                }
                break;
            case 3:
                if (this.base.cursor <= this.base.limit_backward)
                {
                    return false;
                }
                this.base.cursor--;
                golab3: while(true)
                {
                    lab4: {
                        if (!(this.base.in_grouping_b(this.g_v, 97, 121)))
                        {
                            break lab4;
                        }
                        break golab3;
                    }
                    if (this.base.cursor <= this.base.limit_backward)
                    {
                        return false;
                    }
                    this.base.cursor--;
                }
                if (!this.base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    r_Step_1b() {
        let /** number */ among_var;
        this.base.ket = this.base.cursor;
        among_var = this.base.find_among_b(this.a_4);
        if (among_var == 0)
        {
            return false;
        }
        this.base.bra = this.base.cursor;
        switch (among_var) {
            case 1:
                if (!this.r_R1())
                {
                    return false;
                }
                if (!this.base.slice_from("ee"))
                {
                    return false;
                }
                break;
            case 2:
                let /** number */ v_1 = this.base.limit - this.base.cursor;
                golab0: while(true)
                {
                    lab1: {
                        if (!(this.base.in_grouping_b(this.g_v, 97, 121)))
                        {
                            break lab1;
                        }
                        break golab0;
                    }
                    if (this.base.cursor <= this.base.limit_backward)
                    {
                        return false;
                    }
                    this.base.cursor--;
                }
                this.base.cursor = this.base.limit - v_1;
                if (!this.base.slice_del())
                {
                    return false;
                }
                this.base.ket = this.base.cursor;
                this.base.bra = this.base.cursor;
                let /** number */ v_3 = this.base.limit - this.base.cursor;
                among_var = this.base.find_among_b(this.a_3);
                switch (among_var) {
                    case 1:
                        if (!this.base.slice_from("e"))
                        {
                            return false;
                        }
                        return false;
                    case 2:
                        {
                            let /** number */ v_4 = this.base.limit - this.base.cursor;
                            lab2: {
                                if (!(this.base.in_grouping_b(this.g_aeo, 97, 111)))
                                {
                                    break lab2;
                                }
                                if (this.base.cursor > this.base.limit_backward)
                                {
                                    break lab2;
                                }
                                return false;
                            }
                            this.base.cursor = this.base.limit - v_4;
                        }
                        break;
                    case 3:
                        if (this.base.cursor != this.I_p1)
                        {
                            return false;
                        }
                        let /** number */ v_5 = this.base.limit - this.base.cursor;
                        if (!this.r_shortv())
                        {
                            return false;
                        }
                        this.base.cursor = this.base.limit - v_5;
                        if (!this.base.slice_from("e"))
                        {
                            return false;
                        }
                        return false;
                }
                this.base.cursor = this.base.limit - v_3;
                this.base.ket = this.base.cursor;
                if (this.base.cursor <= this.base.limit_backward)
                {
                    return false;
                }
                this.base.cursor--;
                this.base.bra = this.base.cursor;
                if (!this.base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    r_Step_1c() {
        this.base.ket = this.base.cursor;
        lab0: {
            let /** number */ v_1 = this.base.limit - this.base.cursor;
            lab1: {
                if (!(this.base.eq_s_b("y")))
                {
                    break lab1;
                }
                break lab0;
            }
            this.base.cursor = this.base.limit - v_1;
            if (!(this.base.eq_s_b("Y")))
            {
                return false;
            }
        }
        this.base.bra = this.base.cursor;
        if (!(this.base.out_grouping_b(this.g_v, 97, 121)))
        {
            return false;
        }
        lab2: {
            if (this.base.cursor > this.base.limit_backward)
            {
                break lab2;
            }
            return false;
        }
        if (!this.base.slice_from("i"))
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    r_Step_2() {
        let /** number */ among_var;
        this.base.ket = this.base.cursor;
        among_var = this.base.find_among_b(this.a_5);
        if (among_var == 0)
        {
            return false;
        }
        this.base.bra = this.base.cursor;
        if (!this.r_R1())
        {
            return false;
        }
        switch (among_var) {
            case 1:
                if (!this.base.slice_from("tion"))
                {
                    return false;
                }
                break;
            case 2:
                if (!this.base.slice_from("ence"))
                {
                    return false;
                }
                break;
            case 3:
                if (!this.base.slice_from("ance"))
                {
                    return false;
                }
                break;
            case 4:
                if (!this.base.slice_from("able"))
                {
                    return false;
                }
                break;
            case 5:
                if (!this.base.slice_from("ent"))
                {
                    return false;
                }
                break;
            case 6:
                if (!this.base.slice_from("ize"))
                {
                    return false;
                }
                break;
            case 7:
                if (!this.base.slice_from("ate"))
                {
                    return false;
                }
                break;
            case 8:
                if (!this.base.slice_from("al"))
                {
                    return false;
                }
                break;
            case 9:
                if (!this.base.slice_from("ful"))
                {
                    return false;
                }
                break;
            case 10:
                if (!this.base.slice_from("ous"))
                {
                    return false;
                }
                break;
            case 11:
                if (!this.base.slice_from("ive"))
                {
                    return false;
                }
                break;
            case 12:
                if (!this.base.slice_from("ble"))
                {
                    return false;
                }
                break;
            case 13:
                if (!(this.base.eq_s_b("l")))
                {
                    return false;
                }
                if (!this.base.slice_from("og"))
                {
                    return false;
                }
                break;
            case 14:
                if (!this.base.slice_from("less"))
                {
                    return false;
                }
                break;
            case 15:
                if (!(this.base.in_grouping_b(this.g_valid_LI, 99, 116)))
                {
                    return false;
                }
                if (!this.base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    r_Step_3() {
        let /** number */ among_var;
        this.base.ket = this.base.cursor;
        among_var = this.base.find_among_b(this.a_6);
        if (among_var == 0)
        {
            return false;
        }
        this.base.bra = this.base.cursor;
        if (!this.r_R1())
        {
            return false;
        }
        switch (among_var) {
            case 1:
                if (!this.base.slice_from("tion"))
                {
                    return false;
                }
                break;
            case 2:
                if (!this.base.slice_from("ate"))
                {
                    return false;
                }
                break;
            case 3:
                if (!this.base.slice_from("al"))
                {
                    return false;
                }
                break;
            case 4:
                if (!this.base.slice_from("ic"))
                {
                    return false;
                }
                break;
            case 5:
                if (!this.base.slice_del())
                {
                    return false;
                }
                break;
            case 6:
                if (!this.r_R2())
                {
                    return false;
                }
                if (!this.base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    r_Step_4() {
        let /** number */ among_var;
        this.base.ket = this.base.cursor;
        among_var = this.base.find_among_b(this.a_7);
        if (among_var == 0)
        {
            return false;
        }
        this.base.bra = this.base.cursor;
        if (!this.r_R2())
        {
            return false;
        }
        switch (among_var) {
            case 1:
                if (!this.base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                lab0: {
                    let /** number */ v_1 = this.base.limit - this.base.cursor;
                    lab1: {
                        if (!(this.base.eq_s_b("s")))
                        {
                            break lab1;
                        }
                        break lab0;
                    }
                    this.base.cursor = this.base.limit - v_1;
                    if (!(this.base.eq_s_b("t")))
                    {
                        return false;
                    }
                }
                if (!this.base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    r_Step_5() {
        let /** number */ among_var;
        this.base.ket = this.base.cursor;
        among_var = this.base.find_among_b(this.a_8);
        if (among_var == 0)
        {
            return false;
        }
        this.base.bra = this.base.cursor;
        switch (among_var) {
            case 1:
                lab0: {
                    lab1: {
                        if (!this.r_R2())
                        {
                            break lab1;
                        }
                        break lab0;
                    }
                    if (!this.r_R1())
                    {
                        return false;
                    }
                    {
                        let /** number */ v_2 = this.base.limit - this.base.cursor;
                        lab2: {
                            if (!this.r_shortv())
                            {
                                break lab2;
                            }
                            return false;
                        }
                        this.base.cursor = this.base.limit - v_2;
                    }
                }
                if (!this.base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                if (!this.r_R2())
                {
                    return false;
                }
                if (!(this.base.eq_s_b("l")))
                {
                    return false;
                }
                if (!this.base.slice_del())
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    r_exception2() {
        this.base.ket = this.base.cursor;
        if (this.base.find_among_b(this.a_9) == 0)
        {
            return false;
        }
        this.base.bra = this.base.cursor;
        if (this.base.cursor > this.base.limit_backward)
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    r_exception1() {
        let /** number */ among_var;
        this.base.bra = this.base.cursor;
        among_var = this.base.find_among(this.a_10);
        if (among_var == 0)
        {
            return false;
        }
        this.base.ket = this.base.cursor;
        if (this.base.cursor < this.base.limit)
        {
            return false;
        }
        switch (among_var) {
            case 1:
                if (!this.base.slice_from("ski"))
                {
                    return false;
                }
                break;
            case 2:
                if (!this.base.slice_from("sky"))
                {
                    return false;
                }
                break;
            case 3:
                if (!this.base.slice_from("die"))
                {
                    return false;
                }
                break;
            case 4:
                if (!this.base.slice_from("lie"))
                {
                    return false;
                }
                break;
            case 5:
                if (!this.base.slice_from("tie"))
                {
                    return false;
                }
                break;
            case 6:
                if (!this.base.slice_from("idl"))
                {
                    return false;
                }
                break;
            case 7:
                if (!this.base.slice_from("gentl"))
                {
                    return false;
                }
                break;
            case 8:
                if (!this.base.slice_from("ugli"))
                {
                    return false;
                }
                break;
            case 9:
                if (!this.base.slice_from("earli"))
                {
                    return false;
                }
                break;
            case 10:
                if (!this.base.slice_from("onli"))
                {
                    return false;
                }
                break;
            case 11:
                if (!this.base.slice_from("singl"))
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    r_postlude() {
        if (!this.B_Y_found)
        {
            return false;
        }
        while(true)
        {
            let /** number */ v_1 = this.base.cursor;
            lab0: {
                golab1: while(true)
                {
                    let /** number */ v_2 = this.base.cursor;
                    lab2: {
                        this.base.bra = this.base.cursor;
                        if (!(this.base.eq_s("Y")))
                        {
                            break lab2;
                        }
                        this.base.ket = this.base.cursor;
                        this.base.cursor = v_2;
                        break golab1;
                    }
                    this.base.cursor = v_2;
                    if (this.base.cursor >= this.base.limit)
                    {
                        break lab0;
                    }
                    this.base.cursor++;
                }
                if (!this.base.slice_from("y"))
                {
                    return false;
                }
                continue;
            }
            this.base.cursor = v_1;
            break;
        }
        return true;
    };

    /** @return {boolean} */ 
    stem() {
        lab0: {
            let /** number */ v_1 = this.base.cursor;
            lab1: {
                if (!this.r_exception1())
                {
                    break lab1;
                }
                break lab0;
            }
            this.base.cursor = v_1;
            lab2: {
                {
                    let /** number */ v_2 = this.base.cursor;
                    lab3: {
                        {
                            let /** number */ c1 = this.base.cursor + 3;
                            if (c1 > this.base.limit)
                            {
                                break lab3;
                            }
                            this.base.cursor = c1;
                        }
                        break lab2;
                    }
                    this.base.cursor = v_2;
                }
                break lab0;
            }
            this.base.cursor = v_1;
            this.r_prelude();
            this.r_mark_regions();
            this.base.limit_backward = this.base.cursor; this.base.cursor = this.base.limit;
            let /** number */ v_5 = this.base.limit - this.base.cursor;
            this.r_Step_1a();
            this.base.cursor = this.base.limit - v_5;
            lab4: {
                let /** number */ v_6 = this.base.limit - this.base.cursor;
                lab5: {
                    if (!this.r_exception2())
                    {
                        break lab5;
                    }
                    break lab4;
                }
                this.base.cursor = this.base.limit - v_6;
                let /** number */ v_7 = this.base.limit - this.base.cursor;
                this.r_Step_1b();
                this.base.cursor = this.base.limit - v_7;
                let /** number */ v_8 = this.base.limit - this.base.cursor;
                this.r_Step_1c();
                this.base.cursor = this.base.limit - v_8;
                let /** number */ v_9 = this.base.limit - this.base.cursor;
                this.r_Step_2();
                this.base.cursor = this.base.limit - v_9;
                let /** number */ v_10 = this.base.limit - this.base.cursor;
                this.r_Step_3();
                this.base.cursor = this.base.limit - v_10;
                let /** number */ v_11 = this.base.limit - this.base.cursor;
                this.r_Step_4();
                this.base.cursor = this.base.limit - v_11;
                let /** number */ v_12 = this.base.limit - this.base.cursor;
                this.r_Step_5();
                this.base.cursor = this.base.limit - v_12;
            }
            this.base.cursor = this.base.limit_backward;
            let /** number */ v_13 = this.base.cursor;
            this.r_postlude();
            this.base.cursor = v_13;
        }
        return true;
    };

    /**@return{string}*/
    stemWord(/**string*/word) {
        this.base.setCurrent(word);
        this.stem();
        return this.base.getCurrent();
    };
}

export default SnowballEn;