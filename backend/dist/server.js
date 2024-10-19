"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const korisnik_ruter_1 = __importDefault(require("./ruter/korisnik.ruter"));
const knjiga_ruter_1 = __importDefault(require("./ruter/knjiga.ruter"));
const zaduzene_ruter_1 = __importDefault(require("./ruter/zaduzene.ruter"));
const komentar_ruter_1 = __importDefault(require("./ruter/komentar.ruter"));
const registracija_ruter_1 = __importDefault(require("./ruter/registracija.ruter"));
const zahtev_ruter_1 = __importDefault(require("./ruter/zahtev.ruter"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb://localhost:27017/projekat');
const connection = mongoose_1.default.connection;
connection.once("open", () => {
    console.log('db connected');
});
const router = express_1.default.Router();
router.use('/korisnik', korisnik_ruter_1.default);
router.use('/knjiga', knjiga_ruter_1.default);
router.use('/zaduzene', zaduzene_ruter_1.default);
router.use('/komentar', komentar_ruter_1.default);
router.use('/registracija', registracija_ruter_1.default);
router.use('/zahtevi', zahtev_ruter_1.default);
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map