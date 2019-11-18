import ProfileIcon from 'assets/HelpIcons/profile.png';
import LikesIcon from 'assets/HelpIcons/likes.png';
import PlaylistsIcon from 'assets/HelpIcons/playlists.png';

const userNavEls = [
  {
    name: 'Profile',
    src: ProfileIcon,
    path: '/you/library',
  },
  {
    name: 'Likes',
    src: LikesIcon,
    path: '/you/likes',
  },
  {
    name: 'Playlists',
    src: PlaylistsIcon,
    path: '/discover',
  },
];

export default userNavEls;
