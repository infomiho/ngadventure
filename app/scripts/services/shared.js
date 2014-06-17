'use strict';

app.service('sharedVariables', function ($rootScope) {

    var loggedIn = false,
        user = {email:'test'},
        posts = [
            {id: 0, title: 'Cristiano Ronaldo odlučio sa suigračima dijeliti svoj gel za kosu', 'text': 'Nakon katastrofalnog poraza reprezentacije Portugala protiv Njemačke, odmah su krenule priče kako galvanizirati momčad Portugala prije sljedeće utakmice. Kao pomoć se ponudio Cristiano Ronaldo, koji je svojim suigračima ponudio nešto do sada nezamislivo: svoj gel za kosu. Popularni CR7 je jako ljut zbog loše izvedbe, no svjestan je da negativnom energijom neće uspjeti iz portugalskog tima izvući ono najbolje. Zato je krenuo malim koracima, ne bi li svatko u njegovom timu osvijestio da je važan, da svi dišu za njega, i da on mora disati za sve.', image: 'http://images.news-bar.hr/vijesti/5990/182009404_3a884605ea_o__wide-xxlarge.jpg'},
            {id: 1, title: 'Nakon izbacivanja Linić bacio na Hrvatsku kletvu kralja Zvonimira', text: 'Izdajice, neće imati mira, izbacili su ministra Slavka Linića iz SDP-a. Nakon što je pola stranke izbacilo ministra Slavka Linića, bivši ministar i aktualni Riječanin bacio je na zemlju kletvu.', image: 'http://images.news-bar.hr/vijesti/5953/pxl_070614_7872208__wide-xxlarge.jpg'},
            {id: 2, title: '​Policija upozorava: Provjerite diplome i ispite koje kupujete, možda su krivotvorene', text: 'Lažirane diplome do 4000 eura proširile su se Hrvatskom. Zagrebačka policija upozorila je danas da su se pojavile u Holdingu i policiji, a iz MUP-a kažu kako su zabilježene i u Osijeku i Sisku.- U Zagrebačkom holdingu, koji je naručio provjeru svih diploma i svjedodžbi svojih 12.500 zaposlenih, dosad je otkriveno 45 \'lažnjaka\'. Od toga je čak 25 lažnih srednjoškolskih svjedodžbi. Ljudi u dobroj vjeri kupe diplomu, ali im kriminalci prodaju neki lažnjak – objašnjavaju u policiji.', image: 'http://images.news-bar.hr/vijesti/1297/policija-e1336943846863__wide-xxlarge.jpg'}
        ];
    return {

        getLoggedIn: function () {
            return loggedIn;
        },
        setLoggedIn: function (newValue) {
            loggedIn = newValue;
            $rootScope.$broadcast('logged-in-changed');
        },
        getUser: function () {
            return user;
        },
        setUser: function (newValue) {
            user = newValue;
        },
        getPosts: function () {
            return posts;
        },
        getPost: function (id) {

            return posts[id]

        }

    }

});