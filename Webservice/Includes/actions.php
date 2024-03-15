<?php
/**
 * @return array
 */
function getClubs()
{
    return [
        [
            'id' => 1,
            'name' => 'Feyenoord',
        ],
        [
            'id' => 2,
            'name' => 'Ajax',
        ],
        [
            'id' => 3,
            'name' => 'PSV',
        ],
        [
            'id' => 4,
            'name' => 'AZ',
        ],
        [
            'id' => 5,
            'name' => 'ADO Den Haag',
        ],
        [
            'id' => 6,
            'name' => 'Sparta',
        ],
        [
            'id' => 7,
            'name' => 'Paris Saint-Germain',
        ],
        [
            'id' => 8,
            'name' => 'Manchester City',
        ],
        [
            'id' => 9,
            'name' => 'FC Barcelona',
        ],
        [
            'id' => 10,
            'name' => 'Bayern München',
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getClubDetails($id)
{
    $tags = [
        1 => [
            'id' => 1,
            'name' => 'Feyenoord',
            'img'=> 'img/feyenoord.png',
            'imgalt' => 'Logo Feyenoord',
            'linktext' => 'Feyenoord.nl',
            'link' => 'https://www.feyenoord.nl/',
            'city' => 'Rotterdam, Nederland',
            'stadium' => 'De Kuip',
            'adress' => 'Van Zandvlietplein 1, 3077 AA Rotterdam',
            'division' => 'Eredivisie',
            'founded' => '19 juli 1908',
            'manager' => 'Arne Slot',
            'championshipType' => [
                'Landstitel',
                'KNVB Beker',
                'Johan Cruijff Schaal',
                'Europa Cup',
                'UEFA Cup',
                'Wereldbeker',
                'Zilveren Bal',
            ],
            'championshipAmount' => [
                '16',
                '13',
                '4',
                '1',
                '2',
                '1',
                '8',
            ],
            'information' => 'Feyenoord Rotterdam is een Nederlandse profvoetbalclub uit Rotterdam, opgericht op 19 juli 1908, die uitkomt in de Eredivisie. De stadionclub wordt vaak betiteld als de club van het volk. De thuisbasis is Stadion Feijenoord, dat in de volksmond De Kuip wordt genoemd. De traditionele uitrusting van Feyenoord bestaat uit een rood-wit shirt met een zwarte broek en dito kousen. De voetbalclub is een van de drie traditionele topclubs in Nederland.',
            'accessibility' => 'De Kuip is goed toegankelijk voor mindervaliden. Er zijn speciale rolstoelplaatsen en er is een lift aanwezig. Ook zijn er aangepaste toiletten en is er een invalideparkeerplaats. Supporters met een visuele handicap kunnen tijdens de thuiswedstrijden van Feyenoord plaatsnemen op de blindentribune. Via een hoofdtelefoon kunnen zij met speciaal commentaar (verzorgd door Radio Rijnmond) de wedstrijd volgen. De blindentribune bevindt zich op de eerste rij van vak M',
        ],
        2 => [
            'id' => 2,
            'name' => 'Ajax',
            'img'=> 'img/ajax.png',
            'imgalt' => 'Logo Ajax',
            'linktext' => 'Ajax.nl',
            'link' => 'https://www.ajax.nl/',
            'city' => 'Amsterdam, Nederland',
            'stadium' => 'Johan Cruijff ArenA',
            'adress' => 'ArenA Boulevard 1, 1101 AX Amsterdam',
            'division' => 'Eredivisie',
            'founded' => '18 maart 1900',
            'manager' => 'Erik ten Hag',
        ],
        3 => [
            'id' => 3,
            'name' => 'PSV',
            'img'=> 'img/psv.png',
            'imgalt' => 'Logo PSV',
            'linktext' => 'PSV.nl',
            'link' => 'https://www.psv.nl/',
            'city' => 'Eindhoven, Nederland',
            'stadium' => 'Philips Stadion',
            'adress' => 'Frederiklaan 10a, 5616 NH Eindhoven',
            'division' => 'Eredivisie',
            'founded' => '31 augustus 1913',
            'manager' => 'Roger Schmidt',
        ],
        4 => [
            'id' => 4,
            'name' => 'AZ',
            'img'=> 'img/az.png',
            'imgalt' => 'Logo AZ',
            'linktext' => 'AZ.nl',
            'link' => 'https://www.az.nl/',
            'city' => 'Alkmaar, Nederland',
            'stadium' => 'AFAS Stadion',
            'adress' => 'Stadionweg 1, 1812 AZ Alkmaar',
            'division' => 'Eredivisie',
            'founded' => '10 mei 1967',
            'manager' => 'Pascal Jansen',
        ],
        5 => [
            'id' => 5,
            'name' => 'ADO Den Haag',
            'img'=> 'img/ado.png',
            'imgalt' => 'Logo ADO Den Haag',
            'linktext' => 'ADODenHaag.nl',
            'link' => 'https://adodenhaag.nl/',
            'city' => 'Den Haag, Nederland',
            'stadium' => 'Bingoal Stadion',
            'adress' => 'Haags Kwartier 55, 2491 BM Den Haag',
            'division' => 'Eredivisie',
            'founded' => '1 februari 1905',
            'manager' => 'Ruud Brood',
        ],
        6 => [
            'id' => 6,
            'name' => 'Sparta',
            'img'=> 'img/sparta.png',
            'imgalt' => 'Logo Sparta',
            'linktext' => 'Sparta-Rotterdam.nl',
            'link' => 'https://www.sparta-rotterdam.nl/',
            'city' => 'Rotterdam, Nederland',
            'stadium' => 'Het Kasteel',
            'adress' => 'Spartapark Noord 1, 3027 VW Rotterdam',
            'division' => 'Eredivisie',
            'founded' => '1 april 1888',
            'manager' => 'Henk Fraser',
        ],
        7 => [
            'id' => 7,
            'name' => 'Paris Saint-Germain',
            'img'=> 'img/psg.webp',
            'imgalt' => 'Logo PSG',
            'linktext' => 'PSG.fr',
            'link' => 'https://en.psg.fr/',
            'city' => 'Parijs, Frankrijk',
            'stadium' => 'Parc des Princes',
            'adress' => '24 Rue du Commandant Guilbaud, 75016 Paris',
            'division' => 'Ligue 1',
            'founded' => '12 augustus 1970',
            'manager' => 'Mauricio Pochettino',

        ],
        8 => [
            'id' => 8,
            'name' => 'Manchester City',
            'img'=> 'img/mancity.webp',
            'imgalt' => 'Logo Manchester City',
            'linktext' => 'ManCity.com',
            'link' => 'https://www.mancity.com/',
            'city' => 'Manchester, Engeland',
            'stadium' => 'Etihad Stadium',
            'adress' => 'Etihad Campus, Manchester M11 3FF',
            'division' => 'Premier League',
            'founded' => '16 april 1894',
            'manager' => 'Pep Guardiola',
        ],
        9 => [
            'id' => 9,
            'name' => 'FC Barcelona',
            'img'=> 'img/barca.webp',
            'imgalt' => 'Logo FC Barcelona',
            'linktext' => 'FCBarcelona.com',
            'link' => 'https://www.fcbarcelona.com/',
            'city' => 'Barcelona, Spanje',
            'stadium' => 'Camp Nou',
            'adress' => 'Carrer d\'Aristides Maillol, s/n, 08028 Barcelona',
            'division' => 'La Liga',
            'founded' => '29 november 1899',
            'manager' => 'Ronald Koeman',
        ],
        10 => [
            'id' => 10,
            'name' => 'Bayern München',
            'img'=> 'img/bayern.webp',
            'imgalt' => 'Logo Bayern München',
            'linktext' => 'FCBayern.com',
            'link' => 'https://fcbayern.com/',
            'city' => 'München, Duitsland',
            'stadium' => 'Allianz Arena',
            'adress' => 'Werner-Heisenberg-Allee 25, 80939 München',
            'division' => 'Bundesliga',
            'founded' => '27 februari 1900',
            'manager' => 'Julian Nagelsmann',
        ],
    ];

    return $tags[$id];
}
