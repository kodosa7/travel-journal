import Header from './components/Header'
import Card from './components/Card'
import data from "../data"
import './App.css'


export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })  

    return (
        <div className="app">
            <Header />
            { cards }
        </div>
    )
}