/*
Yeti built a custom firewall to manage traffic between the snow machines on the 
mountain, because why use boring old firewalls when Yeti's JavaScript VM outperforms 
Rust and C? It's blazingly fast! (At least, that's what Yeti claims.)

The firewall calculates subnet capacity to route traffic between snow machines that 
produce snow for the slopes. But something's off, some calculations are returning 
negative capacity results and the snow machines can't communicate! The party's about 
to start and without snow, there's no skiing. Fix the subnet calculator before the 
skiing expedition gets cancelled!
*/

function calculateSubnetCapacity(startIP, endIP) {
  function ipToInt(ip) {
    return ip.split('.').reduce((acc, octet) => {
      // Shift current value 8 bits left, add new octet
      return ((acc << 8) | parseInt(octet, 10)) >>> 0;
    }, 0);
  }

  const startInt = ipToInt(startIP);
  const endInt = ipToInt(endIP);
  return endInt - startInt + 1; // +1 because we want to include the end IP
}
