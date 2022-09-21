import SalariesChart from '../charts/Salaries.jsx';
import salaries from '../data/salaries.json'
import { useState } from 'react';

export default function WelcomePage() {
    const [type, setType] = useState('Total')
    const [category, setCategory] = useState('Total')
    
    let types = salaries.map((item) => item.Type).filter((value, index, self) => self.indexOf(value) === index);
    let categories = {};
    types.forEach((type) => { categories[type] = salaries.filter((item) => item.Type === type).map(s => s.Catégorie).filter((value, index, self) => self.indexOf(value) === index) });
    
    let data = salaries.filter((s) => s.Type === type && s.Catégorie === category).map((s) => {
        return {
            "salary": s['2019'],
            "decile": s['Déciles']
        }
    });

    function handleType(type) {
        setType(type);
        setCategory(categories[type][0]);
    }

    
    return (<>
        <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Salaire des belges</h1>
            </div>
        </header>
        <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 h-72">
                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                        Type
                    </label>
                    <select
                        id="type"
                        name="type"
                        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        defaultValue="Total"
                        onChange={(e) => handleType(e.target.value)}
                    >
                        {types.map((type) => <option key={type} value={type}>{type}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                        Catégorie
                    </label>
                    <select
                        id="type"
                        name="type"
                        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        defaultValue="Total"
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories[type].map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                </div>
                <SalariesChart data={data}/>
            </div>
        </main>
    </>
    )
}