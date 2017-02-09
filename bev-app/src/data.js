/* eslint-disable */

const data = {
    "ingredients": [{
        "name": "gin",
        "id": 0
    }, {
        "name": "vodka",
        "id": 1
    }, {
        "name": "bourbon",
        "id": 2
    }, {
        "name": "rye",
        "id": 3
    }, {
        "name": "scotch",
        "id": 4
    }, {
        "name": "tequila",
        "id": 5
    }, {
        "name": "light rum",
        "id": 6
    }, {
        "name": "dark rum",
        "id": 7
    }, {
        "name": "sweet vermouth",
        "id": 9
    }, {
        "name": "dry vermouth",
        "id": 10
    }, {
        "name": "absinthe",
        "id": 11
    }, {
        "name": "aperol",
        "id": 12
    }, {
        "name": "aromatic bitters",
        "id": 13
    }, {
        "name": "apple brandy",
        "id": 14
    }, {
        "name": "benedictine",
        "id": 15
    }, {
        "name": "simple syrup",
        "id": 16
    }, {
        "name": "lime juice",
        "id": 17
    }, {
        "name": "lemon juice",
        "id": 18
    }, {
        "name": "campari",
        "id": 19
    }, {
        "name": "sparkling wine",
        "id": 20
    }, {
        "name": "prosecco",
        "id": 21
    }, {
        "name": "green chartreuse",
        "id": 22
    }, {
        "name": "orange liqueur",
        "id": 24
    }, {
        "name": "cognac",
        "id": 25
    }, {
        "name": "fernet branca",
        "id": 26
    }, {
        "name": "ginger beer",
        "id": 27
    }, {
        "name": "mint",
        "id": 28
    }, {
        "name": "lillet blanc",
        "id": 29
    }, {
        "name": "grenadine",
        "id": 30
    }, {
        "name": "orange slice",
        "id": 31
    }, {
        "name": "pisco",
        "id": 32
    }, {
        "name": "orange bitters",
        "id": 33
    }, {
        "name": "red wine",
        "id": 35
    }, {
        "name": "lemon peel",
        "id": 36
    }, {
        "name": "orange peel",
        "id": 38
    }, {
        "name": "cherry",
        "id": 39
    }, {
        "name": "tonic",
        "id": 40
    }, {
        "name": "soda water",
        "id": 41
    }, {
        "name": "olive juice",
        "id": 42
    }, {
        "name": "olive",
        "id": 43
    }, {
        "name": "grapefruit juice",
        "id": 44
    }, {
        "name": "maraschino liqueur",
        "id": 45
    }, {
        "name": "sugar cube",
        "id": 46
    }, {
        "name": "egg white",
        "id": 47
    }, {
        "name": "lime wheel",
        "id": 48
    }, {
        "name": "lemon wheel",
        "id": 49
    }, {
        "name": "orgeat",
        "id": 50
    }, {
        "name": "honey",
        "id": 51
    }, {
        "name": "orange juice",
        "id": 52
    }],
    "drinks": [{
        "name": "gin martini",
        "id": 0,
        "ingredients": ["gin", "dry vermouth"],
        "importance": 0,
        "amounts": {
            "gin": 2.5,
            "dry vermouth": 0.5
        },
        "procedure": "Stir gin and vermouth in a mix glassing with ice. Strain into a chilled cocktail glass. Garnish with a lemon twist or olives."
    }, {
        "name": "vodka martini",
        "id": 1,
        "ingredients": ["vodka", "dry vermouth"],
        "importance": 0,
        "amounts": {
            "vodka": 2.5,
            "dry vermouth": 0.5
        },
        "procedure": "Stir vodka and vermouth in a mix glassing with ice. Strain into a chilled cocktail glass. Garnish with a lemon twist or olives."
    }, {
        "name": "old fashioned",
        "id": 2,
        "ingredients": ["rye", "aromatic bitters", "simple syrup", "orange peel"],
        "importance": 0,
        "amounts": {
            "rye": 2,
            "aromatic bitters": "3 dashes",
            "simple syrup": 0.5,
            "orange peel": 0
        },
        "procedure": "Put rye, simple syrup, and bitters in a rocks glass, add ice, and stir. Twist the orange peel and drop it in."
    }, {
        "name": "manhattan",
        "id": 3,
        "ingredients": ["bourbon", "sweet vermouth", "aromatic bitters", "cherry"],
        "importance": 0,
        "amounts": {
            "bourbon": 2.5,
            "sweet vermouth": 1,
            "aromatic bitters": "3 dashes",
            "cherry": 0
        },
        "procedure": "Pour the bourbon, vermouth, and bitters in a mixing glass with ice and stir. Strain into a chilled cocktail glass and drop the cherry in."
    }, {
        "name": "negroni",
        "id": 4,
        "ingredients": ["gin", "campari", "sweet vermouth", "orange peel"],
        "importance": 0,
        "amounts": {
            "gin": 1,
            "campari": 1,
            "sweet vermouth": 1,
            "orange peel": 0
        },
        "procedure": "Pour gin, Campari, and sweet vermouth into a mixing glass with ice and stir. Strain into a chilled cocktail glass and drop the orange peel in."
    }, {
        "name": "boulevardier",
        "id": 5,
        "ingredients": ["rye", "sweet vermouth", "campari"],
        "importance": 0,
        "amounts": {
            "rye": 1,
            "sweet vermouth": 1,
            "campari": 1
        },
        "procedure": "Pour rye, Campari, and sweet vermouth into a mixing glass with ice and stir. Strain into a chilled cocktail glass and drop the orange peel in."
    }, {
        "name": "martinez",
        "id": 6,
        "ingredients": ["gin", "sweet vermouth", "maraschino liqueur", "orange bitters", "orange peel"],
        "importance": 0,
        "amounts": {
            "gin": 2,
            "sweet vermouth": 1,
            "maraschino liqueur": 0.5,
            "orange bitters": "1 dash",
            "orange peel": 1
        },
        "procedure": "Pour all the ingredients into a mixing glass with ice and stir. Strain into a chilled cocktail glass and drop lemon twist in."
    }, {
        "name": "americano",
        "id": 7,
        "ingredients": ["campari", "sweet vermouth", "soda water", "orange slice"],
        "importance": 0,
        "amounts": {
            "campari": 1.5,
            "sweet vermouth": 1.5,
            "soda water": 3,
            "orange slice": 1
        },
        "procedure": "Pour Campari and vermouth into a shaker. Add orange slice and ice and shake gently. Pour into a collins glass."
    }, {
        "name": "sazerac",
        "id": 8,
        "ingredients": ["rye", "absinthe", "simple syrup", "aromatic bitters", "lemon peel"],
        "importance": 0,
        "amounts": {
            "rye": 2.5,
            "absinthe": 0.5,
            "simple syrup": 0.5,
            "aromatic bitters": "3 dashes",
            "lemon peel": 1
        },
        "procedure": "Pour absinthe into a chilled rocks glass and tilt the glass so the absinthe touches all the sides. Pour the absinthe out. Pour rye, simple syrup, and bitters in a mixing glass with ice. Stir and strain into the now-empty chilled rocks glass. Rub lemon peel on the rim and drop it in."
    }, {
        "name": "vesper",
        "id": 9,
        "ingredients": ["vodka", "gin", "lillet blanc", "lemon peel"],
        "importance": 0,
        "amounts": {
            "vodka": 2,
            "gin": 1,
            "lillet blanc": 0.5,
            "lemon peel": 1
        },
        "procedure": "Pour all the ingredients into a mixing glass with ice and stir. Strain into a chilled cocktail glass and drop lemon twist in."
    }, {
        "name": "champagne cocktail",
        "id": 10,
        "ingredients": ["sparkling wine", "sugar cube", "aromatic bitters", "lemon peel"],
        "importance": 0,
        "amounts": {
            "sparkling wine": "1 glass full",
            "sugar cube": 1,
            "aromatic bitters": "5 dashes",
            "lemon peel": 1
        },
        "procedure": "On a plate, drop bitters on top of sugar cube. Add it to the full glass of chilled sparkling wine. Drop the lemon peel in."
    }, {
        "name": "aviation",
        "id": 11,
        "ingredients": ["gin", "maraschino liqueur", "lemon juice", "cherry"],
        "importance": 0,
        "amounts": {
            "gin": 2,
            "maraschino liqueur": 0.5,
            "lemon juice": 0.75,
            "cherry": 1
        },
        "procedure": "Add gin, maraschino, lemon juice to a mixing glass with ice. Stir, strain into a chilled cocktail glass, and drop in the cherry."
    }, {
        "name": "millionaire",
        "id": 12,
        "ingredients": ["bourbon", "orange liqueur", "egg white", "grenadine", "absinthe"],
        "importance": 0,
        "amounts": {
            "bourbon": 2,
            "orange liqueur": 0.75,
            "egg white": 1,
            "grenadine": 0.5,
            "absinthe": 0.25
        },
        "procedure": "Pour all ingreidents into a mixing glass with no ice, and shake vigorously. Add ice, and shake again. Strain into a chilled cocktail glass."
    }, {
        "name": "french 75",
        "id": 13,
        "ingredients": ["sparkling wine", "lemon juice", "simple syrup", "gin", "lemon peel"],
        "importance": 0,
        "amounts": {
            "sparkling wine": 3,
            "lemon juice": 0.5,
            "simple syrup": 0.5,
            "gin": 1.5,
            "lemon peel": 1
        },
        "procedure": "Pour gin, lemon juice, and syrup into a shaker with ice. Shake and strain into a champagne glass. Top with sparkling wine and drop lemon peel in."
    }, {
        "name": "gimlet",
        "id": 14,
        "ingredients": ["gin", "lime juice", "simple syrup", "lime wheel"],
        "importance": 0,
        "amounts": {
            "gin": 2,
            "lime juice": 0.5,
            "simple syrup": 0.5,
            "lime wheel": 1
        },
        "procedure": "Pour gin, lime juice, and simple syrup into a shaker with ice. Shake and strain into a chilled cocktail glass. Garnish with lime wheel."
    }, {
        "name": "gin rickey",
        "id": 15,
        "ingredients": ["gin", "lime juice", "simple syrup", "soda water"],
        "importance": 0,
        "amounts": {
            "gin": 2,
            "lime juice": 0.5,
            "simple syrup": 0.5,
            "soda water": 2
        },
        "procedure": "Pour all ingredients into a collins glass with ice and stir."
    }, {
        "name": "mint julep",
        "id": 16,
        "ingredients": ["bourbon", "mint", "simple syrup", "soda water"],
        "importance": 0,
        "amounts": {
            "bourbon": 2.5,
            "mint": "5-10 leaves",
            "simple syrup": 0.75,
            "soda water": 1
        },
        "procedure": "Put mint and simple syrup in the bottom of a chilled rocks glass and muddle. Add bourbon and ice and stir. Top with splash of clubs soda and garnish with a mint sprig."
    }, {
        "name": "mojito",
        "id": 17,
        "ingredients": ["light rum", "mint", "lime juice", "soda water", "simple syrup", "lime wheel"],
        "importance": 0,
        "amounts": {
            "light rum": 2,
            "mint": "5-10 leaves",
            "lime juice": 1,
            "soda water": 1,
            "simple syrup": 0.75,
            "lime wheel": 1
        },
        "procedure": "Muddle mint and simple syrup in a collins glass. Add ice, rum, and lime juice. Cover with a shaker and shake. Pour into collins glass, add more ice, and top with soda water. Garnish with more mint and a lime wheel."
    }, {
        "name": "new york sour",
        "id": 18,
        "ingredients": ["rye", "lemon juice", "simple syrup", "red wine"],
        "importance": 0,
        "amounts": {
            "rye": 2,
            "lemon juice": 1,
            "simple syrup": 1,
            "red wine": 0.5
        },
        "procedure": "Pour rye, simple syrup, and lemon juice into a shaker with ice. Shake and strain into a rocks glass. Add more ice, hold a spoon over the glass, and pour the red wine onto the spoon so that it floats on the surface."
    }, {
        "name": "whiskey sour",
        "id": 19,
        "ingredients": ["rye", "lemon juice", "simple syrup", "lemon wheel"],
        "importance": 0,
        "amounts": {
            "rye": 2.5,
            "lemon juice": 1,
            "simple syrup": 1,
            "lemon wheel": 0        },
        "procedure": "Pour rye, lemon juice, and simple syrup into a shaker with ice. Shake and strain into a rocks glass with more ice. Garnish with lemon wheel."
    }, {
        "name": "hemingway daiquiri",
        "id": 20,
        "ingredients": ["light rum", "lime juice", "grapefruit juice", "maraschino liqueur", "lime wheel"],
        "importance": 0,
        "amounts": {
            "light rum": 2,
            "lime juice": 0.75,
            "grapefruit juice": 0.5,
            "maraschino liqueur": 0.5,
            "lime wheel": 0
        },
        "procedure": "Pour rum, lime juice, grapefruit juice, and maraschino into a shaker with ice. Shake and strain into a chilled cocktail glass. Garnish with lime wheel."
    }, {
        "name": "daiquiri",
        "id": 21,
        "ingredients": ["light rum", "lime juice", "simple syrup", "lime wheel"],
        "importance": 0,
        "amounts": {
            "light rum": 2,
            "lime juice": 1,
            "simple syrup": 0.5,
            "lime wheel": 0
        },
        "procedure": "Pour rum, lime juice, and simple syrup into a shaker with ice. Shake and strain into a chilled cocktail glass. Garnish with lime wheel."
    }, {
        "name": "jack rose",
        "id": 22,
        "ingredients": ["apple brandy", "lemon juice", "grenadine", "lemon peel"],
        "importance": 0,
        "amounts": {
            "apple brandy": 2,
            "lemon juice": 0.75,
            "grenadine": 0.75,
            "lemon peel": 0
        },
        "procedure": "Pour brandy, lemon juice, and grenadine into a shaker with ice. Shake and strain into a chilled cocktail glass. Garnish with lemon peel."
    }, {
        "name": "mai tai",
        "id": 23,
        "ingredients": ["dark rum", "light rum", "orgeat", "orange liqueur", "lime juice", "lime wheel"],
        "importance": 0,
        "amounts": {
            "dark rum": 1,
            "light rum": 1,
            "orgeat": 0.5,
            "orange liqueur": 0.5,
            "lime juice": 1,
            "lime wheel": 0
        },
        "procedure": "Add all ingredients to shaker filled with ice. Shake and strain into a rocks glass with more ice. Garnish with lime wheel."
    }, {
        "name": "sidecar",
        "id": 24,
        "ingredients": ["cognac", "orange liqueur", "lemon juice", "orange peel"],
        "importance": 0,
        "amounts": {
            "cognac": 1.5,
            "orange liqueur": 0.75,
            "lemon juice": 0.75,
            "orange peel": 0
        },
        "procedure": "Pour cognac, orange liqueur, and lemon juice into a shaker with ice. Shake and strain into a chilled cocktail glass. Garnish with orange peel. Optionally, before making the drink, rub lemon juice around the rim of the glass and dip into a plate of sugar to coat the rim."
    }, {
        "name": "pisco sour",
        "id": 25,
        "ingredients": ["pisco", "lime juice", "simple syrup", "egg white"],
        "importance": 0,
        "amounts": {
            "pisco": 2,
            "lime juice": 1,
            "simple syrup": 1,
            "egg white": 1
        },
        "procedure": "Add pisco, lime juice, simple syrup, and egg white to shaker without ice. Shake vigorously. Add ice, and shake again. Strain into a chilled cocktail glass."
    }, {
        "name": "dark and stormy",
        "id": 26,
        "ingredients": ["dark rum", "ginger beer", "lime juice", "lime wheel"],
        "importance": 0,
        "amounts": {
            "dark rum": 2,
            "ginger beer": 4,
            "lime juice": 0.5,
            "lime wheel": 0
        },
        "procedure": "Pour ginger beer and lime juice into a collins glass with ice. Stir briefly, then gently pour rum on top so it floats. Garnish with lime wheel."
    }, {
        "name": "moscow mule",
        "id": 27,
        "ingredients": ["vodka", "ginger beer", "lime juice", "lime wheel"],
        "importance": 0,
        "amounts": {
            "vodka": 1.5,
            "ginger beer": 4,
            "lime juice": 0.5,
            "lime wheel": 0
        },
        "procedure": "Pour vodka, lime juice, and ginger beer into a rocks glass or copper cup, add ice, and stir briefly. Garnish with lime wheel."
    }, {
        "name": "white lady",
        "id": 28,
        "ingredients": ["gin", "orange liqueur", "lemon juice", "orange peel"],
        "importance": 0,
        "amounts": {
            "gin": 2,
            "orange liqueur": 1,
            "lemon juice": 1,
            "orange peel": 0
        },
        "procedure": "Pour gin, orange liqueur, and lemon juice into a shaker with ice. Shake and strain into a chilled cocktail glass. Garnish with orange peel."
    }, {
        "name": "south side",
        "id": 29,
        "ingredients": ["gin", "lemon juice", "simple syrup", "mint", "soda water"],
        "importance": 0,
        "amounts": {
            "gin": 2,
            "lemon juice": 1,
            "simple syrup": 0.5,
            "mint": "2 sprigs",
            "soda water": "splash"
        },
        "procedure": "Put gin, lemon juice, simple syrup, and mint into a shaker with ice. Shake vigorously, then add club soda to shaker. Strain into a chilled cocktail glass."
    }, {
        "name": "last word",
        "id": 30,
        "ingredients": ["gin", "green chartreuse", "maraschino liqueur", "lime juice", "lime wheel"],
        "importance": 0,
        "amounts": {
            "gin": 0.75,
            "green chartreuse": 0.75,
            "maraschino liqueur": 0.75,
            "lime juice": 0.75,
            "lime wheel": 0
        },
        "procedure": "Pour maraschino, gin, Chartreuse, and lime juice into a shaker with ice. Shake and strain into chilled cocktail glass. Garnish with lime wheel."
    }, {
        "name": "between the sheets",
        "id": 31,
        "ingredients": ["cognac", "light rum", "orange liqueur", "lemon juice"],
        "importance": 0,
        "amounts": {
            "cognac": 1,
            "light rum": 1,
            "orange liqueur": 1,
            "lemon juice": 0.75
        },
        "procedure": "Pour all ingredients into a shaker with ice. Shake and strain into a chilled cocktail glass."
    }, {
        "name": "bee's knees",
        "id": 32,
        "ingredients": ["gin", "lemon juice", "honey", "lemon peel"],
        "importance": 0,
        "amounts": {
            "gin": 2,
            "lemon juice": 0.75,
            "honey": 0.5,
            "lemon peel": 0
        },
        "procedure": "Pour gin, lemon juice, and honey into a shaker with ice. Shake and strain into a chilled cocktail glass and drop in the lemon peel."
    }, {
        "name": "gin and tonic",
        "id": 33,
        "ingredients": ["gin", "tonic", "lime juice"],
        "importance": 0,
        "amounts": {
            "gin": 2,
            "tonic": 3,
            "lime juice": 0.5
        },
        "procedure": "Add gin, tonic, and lime juice to a collins glass with ice. Stir."
    }, {
        "name": "bijou",
        "id": 34,
        "ingredients": ["gin", "green chartreuse", "sweet vermouth", "orange bitters"],
        "importance": 0,
        "amounts": {
            "gin": 1.5,
            "green chartreuse": 0.75,
            "sweet vermouth": 1,
            "orange bitters": "2 dashes"
        },
        "procedure": "Pour all ingredients into a mixing glass with ice. Stir and strain into a chilled cocktail glass."
    }, {
        "name": "planter's punch",
        "id": 35,
        "ingredients": ["dark rum", "lime juice", "lemon juice", "grenadine", "simple syrup"],
        "importance": 0,
        "amounts": {
            "dark rum": 3,
            "lime juice": 1,
            "lemon juice": 0.5,
            "grenadine": 0.5,
            "simple syrup": 0.5
        },
        "procedure": "Pour all ingreidents into a mixing glass with ice. Stir and strain into a collins glass with more ice."
    }, {
        "name": "blinker",
        "id": 36,
        "ingredients": ["rye", "grapefruit juice", "grenadine"],
        "importance": 0,
        "amounts": {
            "rye": 1.5,
            "grapefruit juice": 1,
            "grenadine": 0.5
        },
        "procedure": "Pour rye, grapefruit juice, and grenadine into a shaker with ice. Shake and strain into chilled cocktail glass with ice."
    }, {
        "name": "brown derby",
        "id": 37,
        "ingredients": ["grapefruit juice", "bourbon", "honey"],
        "importance": 0,
        "amounts": {
            "grapefruit juice": 1,
            "bourbon": 1,
            "honey": 1
        },
        "procedure": ""
    }, {
        "name": "trinidad sour",
        "id": 38,
        "ingredients": ["aromatic bitters", "orgeat", "lemon juice", "rye"],
        "importance": 0,
        "amounts": {
            "aromatic bitters": 1.5,
            "orgeat": 1,
            "lemon juice": 0.75,
            "rye": 0.5
        },
        "procedure": "Pour bitters, orgeat, lemon juice, and rye into a shaker with ice. Shake vigorously and strain into a chilled cocktail glass."
    }, {
        "name": "aperol spritz",
        "id": 39,
        "ingredients": ["prosecco", "aperol", "soda water", "orange slice"],
        "importance": 0,
        "amounts": {
            "prosecco": 4,
            "aperol": 2,
            "soda water": 1,
            "orange slice": 1
        },
        "procedure": "Pour all ingredients into a collins glass with ice and stir . Squeeze orange slice into the drink and drop it in."
    }, {
        "name": "corpse reviver #2",
        "id": 40,
        "ingredients": ["gin", "lemon juice", "orange liqueur", "lillet blanc", "absinthe"],
        "importance": 0,
        "amounts": {
            "gin": 0.75,
            "lemon juice": 0.75,
            "orange liqueur": 0.75,
            "lillet blanc": 0.75,
            "absinthe": "a dash"
        },
        "procedure": "Pour all ingredients into a shaker with ice. Shake and strain into a chilled cocktail glass."
    }, {
        "name": "vieux carre",
        "id": 41,
        "ingredients": ["rye", "cognac", "sweet vermouth", "benedictine", "aromatic bitters"],
        "importance": 0,
        "amounts": {
            "rye": 0.75,
            "cognac": 0.75,
            "sweet vermouth": 0.75,
            "benedictine": 0.5,
            "aromatic bitters": "4 dashes"
        },
        "procedure": "Add all ingredients to a rocks glass with plenty of ice and stir."
    }, {
        "name": "hanky panky",
        "id": 42,
        "ingredients": ["gin", "sweet vermouth", "fernet branca", "orange peel"],
        "importance": 0,
        "amounts": {
            "gin": 1.5,
            "sweet vermouth": 1.5,
            "fernet branca": 0.5,
            "orange peel": 0
        },
        "procedure": "Pour all ingredients into a mixing glass with ice. Stir and strain into a chilled cocktail glass. Garnish with orange peel."
    }, {
        "name": "b & b",
        "id": 43,
        "ingredients": ["cognac", "benedictine"],
        "importance": 0,
        "amounts": {
            "cognac": 1,
            "benedictine": 1
        },
        "procedure": "Pour cognac and Benedictine into a rocks glass and stir briefly."
    }, {
        "name": "dirty martini",
        "id": 44,
        "ingredients": ["gin", "olive juice", "dry vermouth", "olive"],
        "importance": 0,
        "amounts": {
            "gin": 2.5,
            "olive juice": 0.5,
            "dry vermouth": 0.5,
            "olive": 3
        },
        "procedure": "Pour all ingredients into a mixing glass with ice. Stir and strain into a chilled cocktail glass. Garnish with olives."
    }, {
        "name": "tom collins",
        "id": 45,
        "ingredients": ["gin", "lemon juice", "simple syrup", "soda water"],
        "importance": 0,
        "amounts": {
            "gin": 2,
            "lemon juice": 0.75,
            "simple syrup": 0.5,
            "soda water": 2
        },
        "procedure": "Add gin, lemon juice, and simple syrup to a shaker with ice. Shake and strain into a collins glass with ice. Top with soda water."
    }, {
        "name": "paloma",
        "id": 46,
        "ingredients": ["tequila", "grapefruit juice", "simple syrup", "soda water", "lime juice"],
        "importance": 0,
        "amounts": {
            "tequila": 2,
            "grapefruit juice": 1,
            "simple syrup": 0.5,
            "soda water": 1,
            "lime juice": 0.75
        },
        "procedure": "Pour tequila, grapefruit juice, simple syrup and lime juice into a shaker with ice. Shake and strain into a collins glass with ice. Top with soda water."
    }, {
        "name": "rob roy",
        "id": 47,
        "ingredients": ["scotch", "sweet vermouth", "aromatic bitters", "cherry"],
        "importance": 0,
        "amounts": {
            "scotch": 2,
            "sweet vermouth": 1,
            "aromatic bitters": "a dash",
            "cherry": 0
        },
        "procedure": "Pour all ingredients into a mixing glass with ice. Stir and strain into a chilled cocktail glass. Drop in the cherry."
    }, {
        "name": "death in the afternoon",
        "id": 48,
        "ingredients": ["sparkling wine", "absinthe"],
        "importance": 0,
        "amounts": {
            "sparkling wine": 4.5,
            "absinthe": 1.5
        },
        "procedure": "Pour absinthe and sparkling wine into a champagne glass."
    }, {
        "name": "ward eight",
        "id": 49,
        "ingredients": ["rye", "lemon juice", "grenadine", "orange juice", "cherry"],
        "importance": 0,
        "amounts": {
            "rye": 2,
            "lemon juice": 0.5,
            "grenadine": 0.5,
            "orange juice": 0.5,
            "cherry": 0
        },
        "procedure": "Pour rye, juices, and grenadine into a shaker with ice. Shake and strain into a chilled cocktail glass. Drop in cherry."
    }]
};

export default data;
