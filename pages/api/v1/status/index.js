export default function ststus(request, response) {
  response.status(200).json({ status: 'ok - funcionando perfeitamente' });
}