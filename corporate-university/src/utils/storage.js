import { districtsDB } from "@/data/db/districts";
import { subdistrictsDB } from "@/data/db/subdistricts";

const token = () => `Bearer ${localStorage.getItem('TOKEN_MERAHPUTIH')}`;
const userDetail = () =>
  JSON.parse(localStorage.getItem('USERDETAIL_MERAHPUTIH'));

const checkNPAK = () =>
  userDetail()?.roles?.find((item) => item?.npak !== null);

const checkRolePositionId = () =>
  userDetail()?.roles?.find((item) => item?.role_positionId !== null);

const checkInstitutionId = () =>
  userDetail()?.roles?.find((item) => item?.institutionId !== null);

const getDistrictDB = (provinceCode) => districtsDB.filter(district => district.province_code === provinceCode);
const getSubdistrictDB = (districtCode) => subdistrictsDB.filter(subdistrict => subdistrict.district_code === districtCode);

const checkBankId = () =>
  userDetail()?.roles?.find((item) => item?.bankId !== null);

export {
  token,
  userDetail,
  checkNPAK,
  checkRolePositionId,
  checkInstitutionId,
  getDistrictDB,
  getSubdistrictDB,
  checkBankId,
};
