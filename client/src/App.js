import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ItemModal from './components/ItemModal/ItemModal';
import ContactsModal from './components/InfoModals/ContactsModal';
import DeliveryModal from './components/InfoModals/DeliveryModal';
import HistoryModal from './components/InfoModals/HistoryModal';
import PaymentModal from './components/InfoModals/PaymentModal';
import ReturnModal from './components/InfoModals/ReturnModal';
import SignInModal from './components/SignInModal/SignInModal';
import ProfileModal from './components/InfoModals/ProfileModal';

function App() {
	const [user, setUser] = useState(JSON.parse(window.localStorage.getItem('user')));

	const [favs, setFavs] = useState(JSON.parse(window.localStorage.getItem('favorite')) || []);

	useEffect(() => {
		localStorage.setItem('favorite', JSON.stringify(favs));
	}, [favs]);

	const [sex, setSex] = useState('all');

	return (
		<Router>
			<div id='top'></div>
			<div className='font-sans text-sm xl:text-2xl'>
				<Header user={user} sex={sex} setSex={setSex} />
				<Main sex={sex} favs={favs} setFavs={setFavs} />
				<Footer />
				<Switch>
					<Route path={`/item/:id`}>
						<ItemModal favs={favs} setFavs={setFavs} user={user || null} />
					</Route>
					<Route path={`/signIn`}>
						<SignInModal setUser={setUser} />
					</Route>
					<Route path='/profile'>
						<ProfileModal user={user} setUser={setUser}></ProfileModal>
					</Route>
					<Route path={`/payment`} component={PaymentModal} />
					<Route path={`/delivery`} component={DeliveryModal} />
					<Route path={`/returnsPolicy`} component={ReturnModal} />
					<Route path={`/contacts`} component={ContactsModal} />
					<Route path={`/history`} component={HistoryModal} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
