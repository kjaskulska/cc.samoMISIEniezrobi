import TaskGroup from './taskGroup';

class MainView {

    constructor(taskList, login = 'default') {
        console.log('MainView Loaded...');
        // console.log(taskList);// mainView otrzymuje całą liste tasków; Pamietać by przekazać ją dalej
        this.login = login;
        // console.log(this.login)
        this.work = new TaskGroup(`job`, 'Praca', 'list', 'pink', taskList, this.login);
        this.shop = new TaskGroup(`shop`, 'Lista zakupów', 'list', 'orange', taskList, this.login);
        this.visit = new TaskGroup(`toVisit`, 'Do Odwiedzenia', 'list', 'green', taskList, this.login);
    }

    static refreshWork = (taskList) => {
        const work = new TaskGroup(`Work`, 'Praca', 'list', 'pink', taskList);
        document.getElementById('root').innerHTML = "";
        work.render();
    }

    render() {
        document.getElementById('root').innerHTML = "";
        this.work.render();
        this.shop.render();
        this.visit.render();
        //To Do: kolejna/e karta z zadaniami wg schematu
        //Może by kiedyś dodać zawsze na ostatnim miejscu karte z plusikiem która pozwoli robić nowe grupy tasków (zobaczymy na co backend pozwoli)
    }

}

export default MainView;
