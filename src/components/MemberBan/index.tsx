import { useState } from "react";
import { useAuth } from "../../providers/Auth";
import api from "../../services/api";
import { IUser } from "../../types/IProviders";
import { CgUnavailable } from "react-icons/cg";
import { BsPeopleCircle } from "react-icons/bs";

interface IMemberBanProps {
  groupId: number;
}

const MemberBan = ({ groupId }: IMemberBanProps) => {
  const [banMembers, setBanMembers] = useState<Array<IUser>>([]);
  const [members, setMembers] = useState<Array<IUser>>([]);
  const auth = useAuth();
  console.log(auth.token);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pcXVlaWFzQGdtYWlsLmNvbSIsImlhdCI6MTYzMTYyMzU1OCwiZXhwIjoxNjMxNjI3MTU4LCJzdWIiOiIyIn0.JtNAKyFr-US6aCJA66mMcL29tKimV3IlHkLtZ-YrjMQ";
  api
    .get(`/groups${groupId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      setMembers(res.data.members);
      setBanMembers(res.data.banned);
    })
    .catch((e) => console.log(e));

  const handleBan = (user: IUser) => {
    setBanMembers([...banMembers, user]);
    const filtered = members.filter((item) => item.id !== user.id);
    setMembers(filtered);
    const data = {
      banned: banMembers,
      users: members,
    };
    api.patch(`/groups${groupId}`, data).catch((e) => console.log(e));
  };
  console.log(members);
  return (
    <section>
      <h1>{BsPeopleCircle} Membros</h1>
      <ul>
        {members.map((user) => (
          <li key={user.id}>
            <div>{user.username}</div>
            <div onClick={() => handleBan(user)}>{CgUnavailable}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MemberBan;
