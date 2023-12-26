import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

function Header() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((store) => store.user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, []);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                navigate("/error");
            });
    };

    return (
        <div className="absolute top-0 w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex flex-col md:flex-row justify-between">
            <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
            { user &&
                <div className="flex p-2 justify-between">
                    <img
                        className="hidden md:block w-12 h-12"
                        alt="usericon"
                        src={user?.photoURL}
                    />
                    <button onClick={handleSignOut} className="font-bold text-white ">
                        (Sign Out)
                    </button>
                </div>
            }
        </div>
    )
}

export default Header;
