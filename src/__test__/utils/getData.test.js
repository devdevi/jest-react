import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Llamar una api y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    getData('https://google.com')
      .then((response) => {
        expect(response.data).toEqual('12345');
      });

    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });

  //   test("Search a term and get the response as array", () => {
  //     fetch.mockResponseOnce(JSON.stringify({ data: [] }));

//     searchTrack("Dear friend", "desc").then((response) => {
//       return expect(response.data).toEqual([]);
//     });
//   });
});

